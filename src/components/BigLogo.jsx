import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Html, ContactShadows, useGLTF } from "@react-three/drei"

useGLTF.preload('/3DLogo.gltf')

const Model = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3DLogo.gltf')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    /* group.current.rotation.y += 0.01; */
    group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    group.current.position.y = (1 + Math.sin(t / 2)) / 10
  })

  return (
    <group {...props} dispose={null}>
      <group ref={group} /* {...props} dispose={null} scale={2} */>
        <group position={[-0.16, 0, -0.22]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.Cylinder.geometry} material-color={"white"} scale={[2.04, 0.1, 2.04]} >
            <meshStandardMaterial roughness={0.9} metalness={0.5} color="#474747" />
          </mesh>
          <Lights />
        </group>
      </group>
    </group>
  )
}

function Lights() {
  const groupL = useRef()
  const groupR = useRef()
  const front = useRef()
  useFrame(({ pointer }) => {

    groupL.current.rotation.y = THREE.MathUtils.lerp(groupL.current.rotation.y, -pointer.x * (Math.PI / 2), 0.1)
    groupR.current.rotation.y = THREE.MathUtils.lerp(groupR.current.rotation.y, pointer.x * (Math.PI / 2), 0.1)
    front.current.position.x = THREE.MathUtils.lerp(front.current.position.x, pointer.x * 12, 0.05)
    front.current.position.y = THREE.MathUtils.lerp(front.current.position.y, 7 + pointer.y * 4, 0.05)
  })
  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={2} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={2} />
      </group>
      <spotLight castShadow ref={front} penumbra={0.75} angle={Math.PI / 4} position={[0, 0, 8]} distance={2} intensity={15} shadow-mapSize={[2048, 2048]} />
    </>
  )
}

function Zoom() {
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: 0, z: 2 }, 0.005)
    state.camera.lookAt(0, 0, 0)
  })
}

function BigLogo() {
  return (
    <Canvas style={{ position: 'absolute' }} shadows camera={{ position: [0, 1.5, 14], fov: 50 }}>
      <fog attach="fog" args={['black', 0, 20]} />
      <pointLight position={[0, 10, -10]} intensity={1} />
      <Suspense fallback={
        <Html center className="loader">
          LOADING
        </Html>
      }>
        <Model scale={0.4} position={[0, -0.09, 0]} rotation-x={[Math.PI / 2]} rotation-y={[Math.PI / 2]} />
        <Zoom />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
      </Suspense>
    </Canvas >


  )
}

export default BigLogo