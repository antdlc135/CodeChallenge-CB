import { Text } from "@react-three/drei";
import { useAppSelector } from "../app/hooks";
import { nobleName } from "../app/appSlice";

export default function NameText() {
  const nameLabel = useAppSelector(nobleName);
  return (
    <group rotation={[0, 0.6, 0]} position={[150, 100, -150]}>
      <Text
        scale={[500, 500, 500]}
        color="blue"
        anchorX="center"
        anchorY="middle"
      >
        {nameLabel}
      </Text>
    </group>
  );
}
