import React from 'react';

const resumeUrl = 'Yashvi_M_Resume.pdf';

export default function ResumeSection() {
	return (
		<section
			id="resumepage"
			className="min-h-screen bg-[#2B4A3F] px-6 py-16 text-[#F5F0E6] md:px-12"
		>
			<div className="mx-auto max-w-5xl">
				<div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
					<div>
						<p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-[#B6C598]">
							Career snapshot
						</p>
						<h2 className="font-['Playfair_Display'] text-5xl font-bold text-[#D8B25C] md:text-7xl">
							Resume
						</h2>
					</div>

					<a
						href={resumeUrl}
						download="Yashvi-Mehta-Resume.pdf"
						className="w-fit border border-[#D8B25C] px-5 py-3 font-mono text-sm uppercase tracking-wider text-[#F5F0E6] transition-colors hover:bg-[#D8B25C] hover:text-[#2B4A3F] focus:outline-none focus:ring-2 focus:ring-[#D8B25C] focus:ring-offset-2 focus:ring-offset-[#2B4A3F]"
					>
						Download PDF
					</a>
				</div>

				<div className="overflow-hidden border-2 border-[#B6C598] bg-[#F5F0E6] shadow-[10px_10px_0_#D8B25C]">
					<iframe
						title="Yashvi Mehta resume preview"
						src={resumeUrl}
						className="h-[70vh] min-h-[520px] w-full"
					/>
				</div>

				<p className="mt-6 font-mono text-sm text-[#B6C598]">
					Preview unavailable?{' '}
					<a
						href={resumeUrl}
						target="_blank"
						rel="noreferrer"
						className="text-[#D8B25C] underline underline-offset-4 hover:text-[#F5F0E6]"
					>
						Open the PDF in a new tab
					</a>
					.
				</p>
			</div>
		</section>
	);
}
