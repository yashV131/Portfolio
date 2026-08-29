import React from 'react';
import { useGLTF } from '@react-three/drei';

function CADModel({ url }){
  const { scene } = useGLTF(url);
  return <primitive object={ scene } />;
}

useGLTF.preload('/Assembly_for_robotic_car.glb');

export default CADModel;
