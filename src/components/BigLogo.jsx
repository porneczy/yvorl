import * as THREE from 'three'
import { Scene, Matrix4 } from 'three'
import React, { Suspense, useRef, useMemo, useLayoutEffect, useEffect, useState } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { Html, ContactShadows, useGLTF, PerspectiveCamera, useTexture, useScroll, useAnimations, Reflector } from "@react-three/drei"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'
import { BackSide } from 'three'
import Overlay from './Overlay';

useGLTF.preload('/3DLogo2.gltf')

const Model = ({ caption, ...props }) => {
  const scroll = useScroll()
  const group = useRef()
  const { scene, nodes, materials, animations, cameras } = useGLTF('/3DLogo2.gltf')
  const { actions } = useAnimations(animations, scene)


  /*  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true))) */

  useEffect(() => void (actions['Camera.001Action'].play().paused = true), [actions])

  useFrame((state, delta) => {
    const action = actions['Camera.001Action']
    const t = state.clock.getElapsedTime() / 2
    const offset = caption.current.innerText * 5

    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset / 2.5, 100, delta)

    state.camera.position.set(cameras[0].position.x, cameras[0].position.y, cameras[0].position.z)
    state.camera.rotation.set(cameras[0].rotation.x * Math.sin((t * 100) / 40) / 10, cameras[0].rotation.y, cameras[0].rotation.z * Math.sin((t * 100) / 40) / 10)
  })

  return (
    <>

      {/* <pointLight
        intensity={0.1}
        position={[0, 7, 5]}
        color="red"
      />
      <pointLight
        intensity={0.1}
        position={[10, 17, 15]}
        color="blue"
      />

    <spotLight castShadow penumbra={0.75} angle={Math.PI / 4} position={[0, 0, 8]} distance={2} intensity={105} shadow-mapSize={[2048, 2048]} /> */}

      {/* <directionalLight

        intensity={1000}
        position={[100, 20, 20]}
        color={"baa898"}

      />
       */}
      {/* <pointLight args={[`white`, 1.5]} position={[-6, 5, 6]} /> */}

      <pointLight args={[`#baa898`, 160.15]} position={[-5, 0, 13]} />
      <pointLight args={[`#baa898`, 160.14]} position={[0, 0, 3]} />
      <primitive object={scene}  {...props} />

    </>
  )
}





function BigLogo({ scroll, caption }) {
  /* const scroll = useRef(0) */
  return (
    <>

      <Canvas style={{ position: 'fixed' }}  >

        {/*  <fog attach="fog" args={['black', 0, 20]} /> */}
        {/* <pointLight position={[0, 10, -10]} intensity={1} /> */}

        {/* <ambientLight intensity={0.3} /> */}

        <Suspense fallback={
          <Html center className="loader">
            LOADING
          </Html>
        }>


          <Model caption={caption} />



          {/* <EffectComposer multisampling={8}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
            <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.6} />
          </EffectComposer> */}

        </Suspense>
      </Canvas >


    </>

  )
}

export default BigLogo