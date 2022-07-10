import React, { Suspense, useRef } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Html, ContactShadows, useGLTF } from "@react-three/drei"

useGLTF.preload('/3DLogo.gltf')

const Model = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3DLogo.gltf')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    group.current.position.y = (1 + Math.sin(t / 2)) / 10
  })
  return (
    <group {...props} dispose={null}>
      <group ref={group} /* {...props} dispose={null} scale={2} */>
        <group position={[-0.16, 0, -0.22]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.Cylinder.geometry} material-color={"white"} scale={[2.04, 0.1, 2.04]} />
        </group>
      </group>
    </group>
  )
}

function BigLogo() {
  return (
    <Canvas style={{ position: 'absolute' }} shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
      <ambientLight intensity={2} />
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
      <Suspense fallback={null}>
        <Model scale={0.4} position={[0, -0.09, 0]} rotation-x={[Math.PI / 2]} rotation-y={[Math.PI / 2]} />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
      </Suspense>
    </Canvas >


  )
}

export default BigLogo