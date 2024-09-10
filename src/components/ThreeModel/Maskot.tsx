'use client';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF('/maskot3.glb'); 
  const { actions } = useAnimations(animations, group); 


  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const actionNames: string[] = Object.keys(actions); 

      actions[actionNames[0]]?.play();
    } else {
      console.error('Animasyon bulunamadı veya yüklenemedi.');
    }
  }, [actions, animations]);

  return <primitive ref={group} object={scene} scale={0.5} />;
}

export default function Maskot() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 55 }} // Kamera pozisyonu
      style={{ height: '100vh', width: '40vw' }} // Stil ayarları, geniş alan
    >
      {/* Genel aydınlatma */}
      <ambientLight intensity={2.0} />

      {/* Her taraftan gelen ışık */}
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <directionalLight position={[-10, 10, 10]} intensity={0.5} />
      <directionalLight position={[10, -10, 10]} intensity={0.5} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Ek bir spot ışık ekledik */}
      <spotLight position={[5, 10, 10]} intensity={0.5} />

      <Model />
    </Canvas>
  );
}
