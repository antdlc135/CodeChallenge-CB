/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: tuturu (https://sketchfab.com/tuturu)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/0e7c17cae64c4165aa181f5b20ef8816
title: Guest male 1 - Medieval Fantasy Challenge
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/assets/noble.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-1.55, 0, 0.8]}>
        <mesh
          scale={115}
          geometry={nodes.mesh_0.geometry}
          material={materials["Scene_-_Root"]}
          material-color={props.children}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/noble.glb");
