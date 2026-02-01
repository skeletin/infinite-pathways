import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Lotus } from './Lotus'

interface LotusSceneProps {
    className?: string
}

const LotusScene = ({ className }: LotusSceneProps) => {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: [0, 1.5, 4], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    {/* Soft, natural lighting */}
                    <ambientLight intensity={0.6} />
                    <directionalLight
                        position={[5, 8, 5]}
                        intensity={0.8}
                        color="#ffffff"
                    />
                    <directionalLight
                        position={[-3, 5, -5]}
                        intensity={0.4}
                        color="#e8f0d8"
                    />

                    {/* Environment for subtle reflections */}
                    <Environment preset="apartment" />

                    {/* The Lotus - positioned and scaled for integration */}
                    <Lotus position={[0, -0.3, 0]} scale={1.3} />

                    {/* Very subtle shadow */}
                    <ContactShadows
                        position={[0, -1.2, 0]}
                        opacity={0.15}
                        scale={8}
                        blur={3}
                        far={3}
                    />

                    {/* Gentle auto-rotation only */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                        autoRotate
                        autoRotateSpeed={0.3}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default LotusScene
