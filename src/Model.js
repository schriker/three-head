/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: martinjario (https://sketchfab.com/martinjario)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/skull-downloadable-1a9db900738d44298b0bc59f68123393
title: Skull downloadable
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();

  useFrame(({ mouse }) => {
    group.current.rotation.y = (mouse.x * Math.PI) / 5;
    group.current.rotation.x = - (mouse.y * Math.PI) / 5;
  });

  const { nodes, materials } = useGLTF('/model/scene.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={materials.defaultMat}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model/scene.gltf');
