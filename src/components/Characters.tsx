import React, { Suspense } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { nobleSelect, carSelect, nobleState, carState } from "../app/appSlice";
import Car from "../components/Characters/Car";
import Noble from "../components/Characters/Noble";

export default function Characters() {
  const nobleSelected = useAppSelector(nobleState);
  const carSelected = useAppSelector(carState);
  const nobleColor = nobleSelected ? "red" : "white";
  const carColor = carSelected ? "red" : "#f9b60c";
  const dispatch = useAppDispatch();
  console.log(`nobleIsSelected?:${nobleSelected}`);
  console.log(`carIsSelected?:${carSelected}`);

  return (
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
  );
}
