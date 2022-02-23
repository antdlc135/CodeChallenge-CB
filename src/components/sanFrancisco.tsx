import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "./assets/UnionSquare/posx.jpg",
    "./assets/UnionSquare/negx.jpg",
    "./assets/UnionSquare/posy.jpg",
    "./assets/UnionSquare/negy.jpg",
    "./assets/UnionSquare/posz.jpg",
    "./assets/UnionSquare/negz.jpg",
  ]);
  scene.background = texture;
  return null;
};

export default SkyBox;
