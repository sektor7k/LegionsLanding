'use client';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF('/animation6.glb'); 
  const { actions } = useAnimations(animations, group); 

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const actionNames: string[] = Object.keys(actions); 

      // Tüm animasyonları 2x hızında oynatıyoruz
      actionNames.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.timeScale = 2; // Hızı 2x yapıyoruz
          action.play(); // Animasyonu başlat
        }
      });
    } else {
      console.error('Animasyon bulunamadı veya yüklenemedi.');
    }
  }, [actions, animations]);

  return <primitive ref={group} object={scene} scale={0.5} />;
}

export default function Maskot() {
  return (
    <Canvas
      camera={{ position: [-15, 1.5, -5], fov: 22 }} // Kamera pozisyonu
      style={{ height: '50vh', width: '40vw' }} // Stil ayarları, geniş alan
    >
      {/* Yumuşak ve yaygın aydınlatma için geniş ambient light */}
      <ambientLight intensity={0.5} />

      {/* Üst ve alt geniş homojen ışık için hemisphereLight */}
      <hemisphereLight color={'white'} groundColor={'gray'} intensity={2.6} position={[-10, 10, 10]} />
      
      

      {/* Çok yoğun olmayan, yumuşak directional light'lar */}
      <directionalLight position={[10, 10, 10]} intensity={0.3} />
      <directionalLight position={[-10, 10, 10]} intensity={0.3} />
      <directionalLight position={[10, -10, 10]} intensity={0.3} />
      <directionalLight position={[-10, -10, -10]} intensity={0.3} />

      <Model />
    </Canvas>
  );
}
