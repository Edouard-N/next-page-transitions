import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, applyProps } from "@react-three/fiber";
import {
  Text,
  Plane,
  Sphere,
  meshBasicMaterial,
  useGLTF,
} from "@react-three/drei";
import { gsap } from "gsap";
import { Camera } from "three";
import Model from "./Model";

const d = {
  position: [-2, 10, 15],
};

const ThreeComponent = () => {
  return (
    <Canvas className="canvas" camera={d}>
      <Model />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 15, 0]}
        angle={0.8}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />

      <Porsche />
      <Caption>{`THE\nSEVENTY-TWO\nNAMES\nOF GOD.`}</Caption>
      <Plane args={[2, 2]} />
      <Sphere>
        <meshBasicMaterial color="hotpink" />
      </Sphere>
    </Canvas>
  );
};

function camera() {
  // const { camera } = useThree();
  console.log("camera");
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
}

function Porsche(props) {
  /*
  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: 1,
      },
    });

    tl2.to(Camera.position, {
      y: "+=100",
    });
    // animate camera with scroll trigger
  }, []);

  useMemo(() => {
    Object.values(nodes).forEach(
      (node) => node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    // applyProps(materials.rubber, {
    //   color: "#222",
    //   roughness: 0.6,
    //   roughnessMap: null,
    //   normalScale: [4, 4],
    // });
    // applyProps(materials.window, {
    //   color: "black",
    //   roughness: 0,
    //   clearcoat: 0.1,
    // });
    // applyProps(materials.coat, {
    //   envMapIntensity: 4,
    //   roughness: 0.5,
    //   metalness: 1,
    // });
    // applyProps(materials.paint, {
    //   roughness: 0.5,
    //   metalness: 0.8,
    //   color: "#555",
    //   envMapIntensity: 2,
    // });
  }, [nodes, materials]);
  return <primitive object={scene} {...props} />;
  */
}

export default ThreeComponent;
