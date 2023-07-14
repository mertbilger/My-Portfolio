import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Computer from '../models/computer'


const Development = () => {
  return (
    <Canvas camera={{ position: [15, 15, 15], zoom: 1 }} >
      <Suspense fallback={null}>
        <OrbitControls />
        <hemisphereLight intensity={0.35} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <Stage environment="city" intensity={0.6} contactShadow={true} contactShadowOpacity={0.5} shadowBias={-0.0001}>
          <Computer />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default Development