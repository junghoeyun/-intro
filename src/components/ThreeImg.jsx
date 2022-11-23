import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Image } from "@react-three/drei";
import "simple-reveal/index.css";
import React, { useRef } from "react";

const ThreeImg = () => {
  const { width, height } = useThree(state => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(2 / 1, 1 / 3) / 3;
    group.current.children[4].material.zoom =
      1 + data.range(1.5 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale =
      1 - data.range(1.5 / 3, 1 / 3);
    group.current.children[6].material.basic =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="./shirt.jpg" />
      <Image position={[2, 0, 1]} scale={3} url="./boot.jpg" />
      <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url="./watch.jpg"
      />
      <Image
        position={[-0.6, -height, 3]}
        scale={[1, 2, 1]}
        url="./blacktie.jpg"
      />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="./bag.jpg" />
      <Image
        position={[0, -height * 1.75, 2.5]}
        scale={[5, 3, 1]}
        url="./start.jpg"
      />
      <Image
        position={[2, -height * 2.75 - height / 4, -1]}
        scale={[width, height / 1.15, 2]}
        url="./simmons2.jpg"
      />
    </group>
  );
};

export default ThreeImg;
