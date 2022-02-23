import React, { Suspense } from "react";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import { nobleSelect, carSelect, nobleState, carState } from "./app/appSlice";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Car from "./components/Car";
import Noble from "./components/Noble";
import { OrbitControls } from "@react-three/drei";

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
      <ambientLight intensity={1} />

      <Suspense fallback={null}>
        <Car
          children={carColor}
          onClick={() => dispatch(carSelect())}
          position={[-10, -5, -20]}
          // up={[20, 2, 0]}
          // scale={[0, 0, 0]}
          // rotation={[0, 0, 0]}
        />
        <Noble
          children={nobleColor}
          onClick={() => dispatch(nobleSelect())}
          position={[0.5, -1.5, 2.5]}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
