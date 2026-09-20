"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TechnicalStructure() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    group.current.rotation.y +=
      (mouseX * 0.18 + Math.sin(time * 0.3) * 0.04 -
        group.current.rotation.y) *
      0.035;

    group.current.rotation.x +=
      (-mouseY * 0.12 + Math.sin(time * 0.2) * 0.025 -
        group.current.rotation.x) *
      0.035;

    group.current.position.x +=
      (mouseX * 0.18 - group.current.position.x) * 0.02;

    group.current.position.y +=
      (mouseY * 0.1 - group.current.position.y) * 0.02;
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.7, 3.6, 1.7]} />
        <meshStandardMaterial
          color="#1a1e1c"
          metalness={0.9}
          roughness={0.22}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.15, 4.1, 2.15]} />
        <meshStandardMaterial
          color="#c9a35a"
          metalness={0.9}
          roughness={0.18}
          wireframe
        />
      </mesh>

      {[-1.35, 0, 1.35].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <boxGeometry args={[2.7, 0.11, 2.7]} />
          <meshStandardMaterial
            color="#c9a35a"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>
      ))}

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.55, 2.5, 0.55]} />
        <meshStandardMaterial
          color="#c9a35a"
          emissive="#c9a35a"
          emissiveIntensity={1.5}
          metalness={0.6}
          roughness={0.18}
        />
      </mesh>

      {[
        [-1.15, 0, -1.15],
        [1.15, 0, -1.15],
        [-1.15, 0, 1.15],
        [1.15, 0, 1.15],
      ].map(([x, , z], index) => (
        <mesh key={index} position={[x, 0, z]}>
          <boxGeometry args={[0.08, 3.9, 0.08]} />
          <meshStandardMaterial
            color="#c9a35a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}

      {[
        [-1.25, 1.35, 1.25],
        [1.25, 1.35, -1.25],
        [-1.25, -1.35, -1.25],
        [1.25, -1.35, 1.25],
        [-1.25, 1.35, -1.25],
        [1.25, 1.35, 1.25],
        [-1.25, -1.35, 1.25],
        [1.25, -1.35, -1.25],
      ].map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#c9a35a"
            emissive="#c9a35a"
            emissiveIntensity={1.1}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2.25, 0]}>
        <torusGeometry args={[1.55, 0.018, 12, 80]} />
        <meshStandardMaterial
          color="#c9a35a"
          emissive="#c9a35a"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2.25, 0]}>
        <torusGeometry args={[1.55, 0.018, 12, 80]} />
        <meshStandardMaterial
          color="#c9a35a"
          emissive="#c9a35a"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#c9a35a"
          emissive="#c9a35a"
          emissiveIntensity={1.8}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="pointer-events-none absolute right-[-42%] top-[12%] h-[430px] w-[430px] opacity-45 sm:right-[-20%] sm:top-[12%] sm:h-[520px] sm:w-[520px] sm:opacity-65 lg:right-[-5%] lg:top-[10%] lg:h-[620px] lg:w-[620px] lg:opacity-90">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [5, 3, 6],
          fov: 42,
        }}
      >
        <ambientLight intensity={1.1} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={3}
        />

        <pointLight
          position={[-4, 2, 3]}
          intensity={2.5}
          color="#c9a35a"
        />

        <pointLight
          position={[4, -2, -3]}
          intensity={1.2}
          color="#ffffff"
        />

        <Float
          speed={1.15}
          rotationIntensity={0.12}
          floatIntensity={0.35}
        >
          <TechnicalStructure />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}