import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Octahedron, Torus, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

function RotatingCube({ position, color, size = 1, speed = 1 }) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.4 * speed;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.6 * speed;
    });
    return (
        <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.2}>
            <mesh ref={mesh} position={position}>
                <boxGeometry args={[size, size, size]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.6}
                    roughness={0.2}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </Float>
    );
}

function GlowOctahedron({ position, color }) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
        mesh.current.rotation.z = state.clock.elapsedTime * 0.3;
    });
    return (
        <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
            <mesh ref={mesh} position={position}>
                <octahedronGeometry args={[0.8]} />
                <MeshDistortMaterial
                    color={color}
                    distort={0.3}
                    speed={2}
                    metalness={0.8}
                    roughness={0.1}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </Float>
    );
}

function GlowTorus({ position, color }) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
    });
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
            <mesh ref={mesh} position={position}>
                <torusGeometry args={[0.7, 0.25, 16, 32]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.7}
                    roughness={0.15}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

function SmallSphere({ position, color }) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.3;
    });
    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.05} />
        </mesh>
    );
}

export default function FloatingScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            style={{ background: 'transparent' }}
        >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} color="#4DA6FF" />
            <pointLight position={[-10, -5, -5]} intensity={0.8} color="#a8d8ff" />
            <directionalLight position={[5, 5, 5]} intensity={0.5} />

            {/* Main shapes */}
            <RotatingCube position={[-3.2, 1.5, 0]} color="#4DA6FF" size={1.1} speed={0.8} />
            <RotatingCube position={[3.5, -1.2, -1]} color="#93d1fd" size={0.75} speed={1.2} />
            <RotatingCube position={[2, 2.2, -2]} color="#60a5fa" size={0.55} speed={0.6} />

            <GlowOctahedron position={[3.2, 1.8, 0]} color="#2d8fef" />
            <GlowOctahedron position={[-2.8, -1.5, -1]} color="#93c5fd" />

            <GlowTorus position={[-1, 2.5, -1]} color="#4DA6FF" />
            <GlowTorus position={[1.5, -2.2, 0]} color="#3b82f6" />

            <SmallSphere position={[-3.5, -0.5, 1]} color="#bfdbfe" />
            <SmallSphere position={[4, 0.5, -0.5]} color="#93c5fd" />
            <SmallSphere position={[0, -2.8, 1]} color="#60a5fa" />

            <Stars radius={80} depth={50} count={800} factor={3} saturation={0} fade speed={0.5} />
        </Canvas>
    );
}
