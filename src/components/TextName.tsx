import { RoundedBox, Text } from "@react-three/drei";
import { useAppSelector } from "../app/hooks";
import { nobleName } from "../app/appSlice";

export default function NameText() {
  const nameLabel = useAppSelector(nobleName);
  return (
    <group rotation={[0, 0.6, 0]} position={[150, 140, -150]}>
      <RoundedBox args={[10, 7]} radius={0.5} smoothness={4} scale={10}>
        <meshPhongMaterial attach="material" color="black" />
        <Text
          fontSize={0.12}
          textAlign="center"
          scale={[15, 15, 0]}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.6]}
          maxWidth={0.6}
        >
          {nameLabel}
        </Text>
      </RoundedBox>
    </group>
  );
}
