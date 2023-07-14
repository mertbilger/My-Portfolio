import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";


const WhoEarth = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load("img/earthMap.jpg")} />
    </mesh>
  );
};

export default WhoEarth;
