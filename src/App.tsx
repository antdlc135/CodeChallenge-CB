import React, { Suspense } from "react";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import { nobleSelect, carSelect, nobleState, carState } from "./app/appSlice";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Car from "./components/Car";
import Noble from "./components/Noble";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/camera";
import SkyBox from "./components/sanFrancisco";

export default function App() {
  const nobleSelected = useAppSelector(nobleState);
  const carSelected = useAppSelector(carState);
  const nobleColor = nobleSelected ? "red" : "white";
  const carColor = carSelected ? "red" : "#f9b60c";
  const dispatch = useAppDispatch();
  console.log(`nobleIsSelected?:${nobleSelected}`);
  console.log(`carIsSelected?:${carSelected}`);

  return (
    <Canvas style={{ background: "#171717", height: "100vh" }}>
      <Camera />
      <ambientLight intensity={1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <Car
          children={carColor}
          onClick={() => dispatch(carSelect())}
          position={[-90, -100, 150]}
        />
        <Noble
          children={nobleColor}
          onClick={() => dispatch(nobleSelect())}
          position={[150, -120, -150]}
        />
      </Suspense>
      <SkyBox />
    </Canvas>
  );
}
