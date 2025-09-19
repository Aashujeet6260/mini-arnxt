import React from 'react';
import { useGLTF } from '@react-three/drei';

const Scene = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} scale={1.5} />;
};

export default Scene;