import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { scene, nodes, materials } = useGLTF("assets/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} {...props} />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      /> */}
    </group>
  );
}

useGLTF.preload("assets/scene.gltf");
