import * as THREE from 'three'
import React, { Suspense, useRef, useLayoutEffect, useEffect, useState } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Html, ContactShadows, useGLTF, ScrollControls, useScroll, useAnimations } from "@react-three/drei"
import { BackSide } from 'three'
import Overlay from './Overlay';

useGLTF.preload('/3DLogo.gltf')

const Model = ({ caption, ...props }) => {
  const scroll = useScroll()
  const group = useRef()
  const { scene, nodes, materials, animations } = useGLTF('/3DLogo.gltf')
  const { actions } = useAnimations(animations, scene)
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))



  useEffect(() => void (actions['Camera.001Action.005'].play().paused = true), [actions])
  useFrame((state, delta) => {
    const action = actions['Camera.001Action.005']
    const t = state.clock.getElapsedTime() / 2
    /* const offset = 1 - scroll.offset */
    const offset = caption.current.outerText * 5
    /* console.log(t) */console.log(caption.current.outerText)
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    state.camera.lookAt(0, 0, 0)

    /* group.current.rotation.y += 0.01; */
    /* group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    group.current.position.y = (1 + Math.sin(t / 2)) / 10 */
  })

  return (
    <>
      <primitive object={scene} {...props} />
      <Lights />

    </>
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
        <pointLight position={[0, 7, -15]} distance={150} intensity={12} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, 15]} distance={150} intensity={12} />
      </group>
      <spotLight castShadow ref={front} penumbra={0.75} angle={Math.PI / 4} position={[0, 0, 8]} distance={2} intensity={105} shadow-mapSize={[2048, 2048]} />
    </>
  )
}

function Zoom() {
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: 0, z: 2 }, 0.005)
    state.camera.lookAt(0, 0, 0)
  })
}

function BigLogo({ scroll, caption }) {
  /* const scroll = useRef(0) */
  return (
    <>
      <Canvas style={{ position: 'fixed' }} shadows camera={{ position: [0, 1.5, 14], fov: 50 }}>
        <fog attach="fog" args={['black', 0, 20]} />
        {/* <pointLight position={[0, 10, -10]} intensity={1} /> */}
        <Suspense fallback={
          <Html center className="loader">
            LOADING
          </Html>
        }>

          <Model caption={caption} scale={3.4} position={[0, -0.09, 0]} rotation-x={[Math.PI / 2]} rotation-y={[Math.PI / 2]} />


          {/* <Zoom /> */}
          <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
        </Suspense>
      </Canvas >


    </>

  )
}

export default BigLogo