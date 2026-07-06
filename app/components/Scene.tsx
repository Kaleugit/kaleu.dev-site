"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";

function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/loader.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (names.length > 0) {
      names.forEach((name) => actions[name]?.play());
    }
  }, [actions, names]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.04} position={[0, -0.5, 0]} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, -0.5, 6], fov: 35 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} target={[0, 0, 0]} />
    </Canvas>
  );
}
