import cv2
import numpy as np
import os

input_file = r"..\portfolio-app\src\assets\leaf assets.jpg"
output_folder = "exports"

os.makedirs(output_folder, exist_ok=True)

img = cv2.imread(input_file)

if img is None:
    raise Exception("Image not found")


# background color (BGR)
bg = np.array([160,160,160], dtype=np.float32)


# calculate distance from gray background
distance = np.sqrt(
    np.sum(
        (img.astype(np.float32) - bg) ** 2,
        axis=2
    )
)


# create mask
mask = np.where(
    distance > 35,
    255,
    0
).astype(np.uint8)


# find objects
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(mask)


count = 0

for i in range(1, num_labels):

    x, y, w, h, area = stats[i]


    # ignore text/noise
    if area < 3000:
        continue


    crop = img[y:y+h, x:x+w]
    alpha = mask[y:y+h, x:x+w]


    b,g,r = cv2.split(crop)

    rgba = cv2.merge(
        [b,g,r,alpha]
    )


    cv2.imwrite(
        f"{output_folder}/plant_{count}.png",
        rgba
    )

    count += 1


print("Exported:", count)