import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();

  useFrame(({ mouse }) => {
    group.current.rotation.y = (mouse.x * Math.PI) / 5;
    group.current.rotation.x = -(mouse.y * Math.PI) / 5;
  });

  const { scene } = useGLTF('/model/scene.gltf');

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/model/scene.gltf');
