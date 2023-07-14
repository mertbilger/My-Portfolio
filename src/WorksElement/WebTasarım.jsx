import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Kungfu from '../models/kungfu'


const WebTasarım = () => {
  return (
    <Canvas camera={{ position: [-11, 0, 5], zoom: 0.6 }}>
      <Suspense fallback={null}>
        <OrbitControls />
        <hemisphereLight intensity={0.35} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <Stage environment="city" intensity={0.6} contactShadow={true} contactShadowOpacity={0.5} shadowBias={-0.0001}>
          <Kungfu />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default WebTasarım