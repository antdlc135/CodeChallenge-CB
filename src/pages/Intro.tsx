import React, { Suspense } from "react";
import { RoundedBox, Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigateToPlay = useNavigate();
  function navigateTo() {
    return navigateToPlay("/pagename");
  }

  const OnGame = () => {
    return (
      <group rotation={[0, 0, 0]} position={[0, -5, -0.1]}>
        <RoundedBox
          args={[4, 1.5, 1]}
          radius={0.5}
          smoothness={4}
          scale={1}
          onClick={() => navigateTo()}
        >
          <meshPhongMaterial attach="material" color="grey" />
          <Text
            scale={[4, 4, 4]}
            color="red"
            anchorX="center"
            anchorY="middle"
            position={[0, 0, -0.51]}
            rotation={[0, Math.PI, 0]}
            maxWidth={1}
            textAlign={"left"}
          >
            Play the game!
          </Text>
        </RoundedBox>
      </group>
    );
  };
  return (
    <Suspense fallback={null}>
      <group
        rotation={[-Math.PI / 2, Math.PI / 2, Math.PI / 2]}
        position={[0, 0, 0]}
      >
        <RoundedBox args={[5, 13]} radius={0.5} smoothness={4} scale={45}>
          <meshPhongMaterial attach="material" color="black" />
          <Text
            scale={[5, 5, 0]}
            color="white"
            anchorX="center"
            anchorY="middle"
            position={[0, 0, 0.6]}
            maxWidth={0.7}
          >
            A noble of the upper middle class of 1460 in Florence finds himself,
            in incredible circumstances, catapulted forward in time until 1960
            in Los Angeles (ehm...San Francisco, maybe) and without memory... To
            more info... turn around the monolith!
          </Text>
          <Text
            scale={[5, 5, 0]}
            color="white"
            anchorX="center"
            anchorY="middle"
            position={[0, 1, -0.6]}
            rotation={[0, Math.PI, 0]}
            maxWidth={0.7}
          >
            In the first few minutes in this new reality, he is attracted to a
            strange glittering object. Know that our protagonist has lost his
            memory and it will be up to you to remind him of his name!
          </Text>
          {<OnGame />}
        </RoundedBox>
      </group>
    </Suspense>
  );
}
