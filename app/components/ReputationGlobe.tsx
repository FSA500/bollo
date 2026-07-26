'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ── Particle field orbiting the globe ── */
function ParticleField({ count }: { count: number }) {
  const groupRef = useRef<THREE.Group>(null!)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.15 + Math.random() * 1.6
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.018
  })

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#28E7C4"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.48}
        />
      </Points>
    </group>
  )
}

/* ── Glowing nodes distributed on sphere surface (Fibonacci) ── */
function GlobeNodes() {
  const groupRef = useRef<THREE.Group>(null!)

  const positions = useMemo<[number, number, number][]>(() => {
    const count  = 14
    const pts: [number, number, number][] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    const R      = 1.82
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(Math.max(0, 1 - y * y)) * R
      const t = golden * i
      pts.push([r * Math.cos(t), y * R, r * Math.sin(t)])
    }
    return pts
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh
      const mat  = mesh.material as THREE.MeshStandardMaterial
      mat.emissiveIntensity = 0.7 + Math.sin(t * 2.1 + i * 0.65) * 0.55
    })
  })

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.052, 10, 10]} />
          <meshStandardMaterial
            color={i % 4 === 0 ? '#06FF89' : '#28E7C4'}
            emissive={i % 4 === 0 ? '#06FF89' : '#28E7C4'}
            emissiveIntensity={1.0}
            roughness={0}
            metalness={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

/* ── Three concentric wireframe rings + solid core ── */
function Globe() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.0022
    // Subtle mouse parallax
    groupRef.current.rotation.x +=
      (state.mouse.y * 0.10 - groupRef.current.rotation.x) * 0.034
    groupRef.current.rotation.z +=
      (-state.mouse.x * 0.04 - groupRef.current.rotation.z) * 0.034
  })

  return (
    <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.45}>
      <group ref={groupRef}>
        {/* Outer ring — mint */}
        <mesh>
          <sphereGeometry args={[1.82, 28, 28]} />
          <meshStandardMaterial color="#28E7C4" wireframe transparent opacity={0.15} />
        </mesh>

        {/* Mid ring — coral, offset axis */}
        <mesh rotation={[0.7, 0.35, 0.2]}>
          <sphereGeometry args={[1.70, 20, 20]} />
          <meshStandardMaterial color="#6842E2" wireframe transparent opacity={0.10} />
        </mesh>

        {/* Inner ring — white, different axis for orrery feel */}
        <mesh rotation={[-0.4, 0.6, 0.5]}>
          <sphereGeometry args={[1.60, 16, 16]} />
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.05} />
        </mesh>

        {/* Solid core with mint emissive glow */}
        <mesh>
          <sphereGeometry args={[1.48, 64, 64]} />
          <meshStandardMaterial
            color="#070B1A"
            emissive="#28E7C4"
            emissiveIntensity={0.13}
            transparent
            opacity={0.92}
            roughness={1}
            metalness={0}
          />
        </mesh>

        <GlobeNodes />
      </group>
    </Float>
  )
}

/* ── Scene: lights + objects ── */
function Scene({ particleCount }: { particleCount: number }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5,  4,  4]} intensity={2.2} color="#28E7C4" />
      <pointLight position={[-4, -3, -3]} intensity={0.9} color="#6842E2" />
      <pointLight position={[1,  3,  2]} intensity={0.5} color="#ffffff" />
      <Globe />
      <ParticleField count={particleCount} />
    </>
  )
}

/* ── Exported component with SSR-safe setup + fallback ── */
export default function ReputationGlobe() {
  const [ready,   setReady]   = useState(false)
  const [reduced, setReduced] = useState(false)
  const [mobile,  setMobile]  = useState(false)
  const [dpr,     setDpr]     = useState<[number, number]>([1, 1])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const isMobile = window.innerWidth < 1024
    setMobile(isMobile)
    setDpr(isMobile ? [1, 1] : [1, Math.min(window.devicePixelRatio, 2)])
    setReady(true)
  }, [])

  /* Static gradient fallback for reduced-motion or pre-mount */
  if (reduced || !ready) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 42% 38%, rgba(40,231,196,0.20) 0%, rgba(104,66,226,0.12) 50%, transparent 70%)',
          boxShadow: '0 0 120px rgba(40,231,196,0.10)',
        }}
      />
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 43 }}
      dpr={dpr}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <Scene particleCount={mobile ? 180 : 480} />
    </Canvas>
  )
}
