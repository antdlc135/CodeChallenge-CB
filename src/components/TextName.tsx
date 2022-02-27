import { RoundedBox, Text } from "@react-three/drei";
import { useAppSelector } from "../app/hooks";
import { nobleName } from "../app/appSlice";

export default function NameText() {
  const nameLabel = useAppSelector(nobleName);
  return (
    <group rotation={[0, 0.6, 0]} position={[150, 110, -150]}>
      <RoundedBox args={[10, 4]} radius={0.5} smoothness={4} scale={10}>
        <meshPhongMaterial attach="material" color="#f3f3f3" />
        <Text
          scale={[11, 10, 10]}
          color="blue"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.6]}
        >
          {nameLabel}
        </Text>
      </RoundedBox>
    </group>
  );
}
