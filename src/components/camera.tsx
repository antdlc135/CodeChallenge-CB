import React, { MutableRefObject, useRef } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls });

const CameraControls = () => {
  const controls: MutableRefObject<any> = useRef<THREE.Group>();
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.z = 150;
  camera.position.y = 70;
  camera.position.x = 500;
  useFrame(() => controls.current.update());
  return <OrbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;
