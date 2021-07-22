import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();

  useFrame(({ mouse }) => {
    group.current.rotation.y = (mouse.x * Math.PI) / 5;
    group.current.rotation.x = -(mouse.y * Math.PI) / 5;
  });

  // Zmień scene.gltf na nazwę swojego pliku
  const { nodes, materials } = useGLTF('/model/scene.gltf');

  return (
    // Zamień ten kawałek na ten wygenerowany kod
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={materials.defaultMat}
        />
      </group>
    </group>
    // Zamień ten kawałek na ten wygenerowany kod
  );
}

// Zmień scene.gltf na nazwę swojego pliku
useGLTF.preload('/model/scene.gltf');
