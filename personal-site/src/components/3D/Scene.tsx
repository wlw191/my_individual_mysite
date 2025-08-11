'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Torus } from '@react-three/drei';
import * as THREE from 'three';

// This is the rotating 3D object that will be displayed.
const SpinningTorus = () => {
  // useRef is used to get a direct reference to the DOM element or, in this case, the 3D mesh.
  const meshRef = useRef<THREE.Mesh>(null!);

  // useFrame is a hook from react-three-fiber that executes a callback on every rendered frame.
  // This is perfect for animations.
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the torus on its x and y axes on every frame.
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    // The Torus component from drei makes it easy to create a torus shape.
    <Torus ref={meshRef} args={[1, 0.4, 32, 100]}>
      {/* meshStandardMaterial is a standard physically-based rendering material. */}
      {/* It needs light to be visible. */}
      <meshStandardMaterial color="#910202" roughness={0.5} />
    </Torus>
  );
};

// This is the main scene component that sets up the canvas and environment.
const Scene = () => {
  return (
    <div className="w-full h-96 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        {/* Ambient light provides a soft, even light to the entire scene. */}
        <ambientLight intensity={Math.PI / 2} />
        {/* Point light acts like a light bulb, emitting light in all directions. */}
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />

        <SpinningTorus />

        {/* OrbitControls allows the user to rotate the camera around the scene. */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene;
