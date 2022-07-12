import * as THREE from 'three'
import { Scene, Matrix4 } from 'three'
import React, { Suspense, useRef, useMemo, useLayoutEffect, useEffect, useState } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Html, ContactShadows, useGLTF, PerspectiveCamera, OrbitControls, useScroll, useAnimations, useCamera } from "@react-three/drei"
import { BackSide } from 'three'
import Overlay from './Overlay';

useGLTF.preload('/3DLogo.gltf')
const color = new THREE.Color()

const Model = ({ caption, ...props }) => {
  const scroll = useScroll()
  const group = useRef()

  const [hovered, set] = useState()
  const { scene, nodes, materials, animations, cameras } = useGLTF('/3DLogo.gltf')
  const { actions } = useAnimations(animations, scene)


  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))

  useEffect(() => void (actions['Camera.001Action.005'].play().paused = true), [actions])



  useFrame((state, delta) => {
    const action = actions['Camera.001Action.005']
    const t = state.clock.getElapsedTime() / 2
    /* const offset = 1 - scroll.offset */
    const offset = caption.current.innerText * 5
    console.log(actions)
    /* console.log(t) *//* console.log(caption.current.outerText) */
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset / 2.5, 100, delta)


    console.log(cameras[0].position.x)

    state.camera.position.set(cameras[0].position.x * offset, cameras[0].position.y * offset * Math.sin((t) / 7) * 2, cameras[0].position.z * offset)


    /* cameras[0].position.y = Math.sin((t) / 30) */
    /* cameras[0].rotation.x = Math.sin((t + offset * 2000) / 40) / 10
    cameras[0].rotation.y = Math.cos((t + offset * 2000) / 30) / 10
    cameras[0].rotation.z = Math.sin((t + offset * 2000) / 40) / 10 */
  })

  return (
    <>
      <primitive object={scene}  {...props} />
      <group name="Camera">
        <PerspectiveCamera makeDefault far={100} near={0.5} fov={54} />

      </group>
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
      <Canvas style={{ position: 'fixed' }} shadows >
        <fog attach="fog" args={['black', 0, 20]} />
        {/* <pointLight position={[0, 10, -10]} intensity={1} /> */}
        <Suspense fallback={
          <Html center className="loader">
            LOADING
          </Html>
        }>

          <Model caption={caption} scale={3.4} position={[0, 4, 5]} />


          <Zoom />
          <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
        </Suspense>
      </Canvas >


    </>

  )
}

export default BigLogo