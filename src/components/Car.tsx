/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Robert Kotsch (https://sketchfab.com/robertkotsch)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/models/69ac631cfc2542fd87189c315753b82b
title: Vintage Car - Low Poly Style
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    polySurface118_Einfachdunkel_0: THREE.Mesh;
    polySurface118_Chrom_0: THREE.Mesh;
    polySurface118_Spiegel_0: THREE.Mesh;
    polySurface118_Chassis_0: THREE.Mesh;
    polySurface118_Scheibe_0: THREE.Mesh;
    polySurface118_Felge_0: THREE.Mesh;
    polySurface118_REifen_0: THREE.Mesh;
    polySurface118_Sitze_0: THREE.Mesh;
    polySurface118_scheinwerfer_0: THREE.Mesh;
    polySurface118_Ruecklicht_0: THREE.Mesh;
  };
  materials: {
    Einfachdunkel: THREE.MeshStandardMaterial;
    Chrom: THREE.MeshStandardMaterial;
    Spiegel: THREE.MeshStandardMaterial;
    Chassis: THREE.MeshStandardMaterial;
    Scheibe: THREE.MeshStandardMaterial;
    Felge: THREE.MeshStandardMaterial;
    REifen: THREE.MeshStandardMaterial;
    Sitze: THREE.MeshStandardMaterial;
    scheinwerfer: THREE.MeshStandardMaterial;
    Ruecklicht: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/assets/car.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-1.5, 0.1, 0.7]}>
        <group rotation={[Math.PI / 2, Math.PI / 12, 0]} scale={25}>
          <mesh
            geometry={nodes.polySurface118_Einfachdunkel_0.geometry}
            material={materials.Einfachdunkel}
          />
          <mesh
            geometry={nodes.polySurface118_Chrom_0.geometry}
            material={materials.Chrom}
          />
          <mesh
            geometry={nodes.polySurface118_Spiegel_0.geometry}
            material={materials.Spiegel}
          />
          <mesh
            geometry={nodes.polySurface118_Chassis_0.geometry}
            material={materials.Chassis}
            material-color={props.children}
          />
          <mesh
            geometry={nodes.polySurface118_Scheibe_0.geometry}
            material={materials.Scheibe}
          />
          <mesh
            geometry={nodes.polySurface118_Felge_0.geometry}
            material={materials.Felge}
          />
          <mesh
            geometry={nodes.polySurface118_REifen_0.geometry}
            material={materials.REifen}
          />
          <mesh
            geometry={nodes.polySurface118_Sitze_0.geometry}
            material={materials.Sitze}
          />
          <mesh
            geometry={nodes.polySurface118_scheinwerfer_0.geometry}
            material={materials.scheinwerfer}
          />
          <mesh
            geometry={nodes.polySurface118_Ruecklicht_0.geometry}
            material={materials.Ruecklicht}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/car.glb");
