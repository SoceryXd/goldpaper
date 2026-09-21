'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Orb(){
  const ref=useRef<THREE.Mesh>(null!)
  useFrame((state)=>{
    ref.current.rotation.x=state.clock.elapsedTime*.12
    ref.current.rotation.y=state.clock.elapsedTime*.16
  })
  return <Float speed={1.4} rotationIntensity={.4} floatIntensity={.7}>
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.45,4]}/>
      <meshPhysicalMaterial color="#0b1421" metalness={.88} roughness={.16} clearcoat={1} clearcoatRoughness={.08} emissive="#33240a" emissiveIntensity={.22}/>
    </mesh>
  </Float>
}

export default function ParticlesHero(){
  return <div className="absolute inset-0 pointer-events-none opacity-90">
    <Canvas camera={{position:[0,0,5],fov:48}} dpr={[1,1.6]}>
      <ambientLight intensity={.55}/><directionalLight position={[3,4,4]} intensity={2.2} color="#f4d681"/>
      <pointLight position={[-4,-2,3]} intensity={1.2} color="#24558d"/>
      <group position={[2.25,.1,0]}><Orb/><Sparkles count={85} scale={[6,5,4]} size={2.2} speed={.28} opacity={.6} color="#e0bd5f"/></group>
    </Canvas>
  </div>
}
