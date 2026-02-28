'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    MeshDistortMaterial,
    Stars,
    Environment,
    MeshTransmissionMaterial,
} from '@react-three/drei';

function NeonCube({ position, size = 0.9, speed = 1, color = '#4DA6FF' }) {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.x = state.clock.elapsedTime * 0.35 * speed;
        ref.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
    });
    return (
        <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={1.5}>
            <mesh ref={ref} position={position}>
                <boxGeometry args={[size, size, size]} />
                <meshStandardMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.05}
                    emissive={color}
                    emissiveIntensity={0.15}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </Float>
    );
}

function GlassOctahedron({ position }) {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.x = state.clock.elapsedTime * 0.4;
        ref.current.rotation.z = state.clock.elapsedTime * 0.3;
    });
    return (
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2}>
            <mesh ref={ref} position={position}>
                <octahedronGeometry args={[0.9]} />
                <MeshDistortMaterial
                    color="#4DA6FF"
                    distort={0.35}
                    speed={2}
                    metalness={0.95}
                    roughness={0.05}
                    emissive="#1a5fff"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </Float>
    );
}

function GlowTorus({ position, speed = 1 }) {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
        ref.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
    });
    return (
        <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.2}>
            <mesh ref={ref} position={position}>
                <torusGeometry args={[0.65, 0.2, 16, 60]} />
                <meshStandardMaterial
                    color="#2d8fef"
                    metalness={0.9}
                    roughness={0.05}
                    emissive="#4DA6FF"
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </Float>
    );
}

function PulsingRing({ position }) {
    const ref = useRef();
    useFrame((state) => {
        const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
        ref.current.scale.set(s, s, s);
        ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    });
    return (
        <mesh ref={ref} position={position}>
            <torusGeometry args={[1.4, 0.04, 8, 80]} />
            <meshStandardMaterial
                color="#4DA6FF"
                emissive="#4DA6FF"
                emissiveIntensity={0.8}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
}

function SmallOrb({ position, color }) {
    const ref = useRef();
    useFrame((state) => {
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.8 + position[0]) * 0.25;
    });
    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.95} roughness={0.02} emissive={color} emissiveIntensity={0.5} />
        </mesh>
    );
}

export default function FloatingScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 9], fov: 52 }}
            style={{ background: 'transparent' }}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.3} />
            <pointLight position={[8, 8, 8]} intensity={2} color="#4DA6FF" />
            <pointLight position={[-8, -4, -4]} intensity={1.2} color="#1a5fff" />
            <pointLight position={[0, 6, 2]} intensity={0.8} color="#93d1fd" />

            {/* Featured shapes */}
            <NeonCube position={[-3.5, 1.8, 0]} size={1.1} speed={0.7} color="#4DA6FF" />
            <NeonCube position={[3.8, -1.5, -1]} size={0.7} speed={1.3} color="#2d8fef" />
            <NeonCube position={[2.5, 2.5, -2]} size={0.5} speed={0.5} color="#60a5fa" />
            <NeonCube position={[-2, -2.5, -0.5]} size={0.6} speed={1} color="#93c5fd" />

            <GlassOctahedron position={[3.2, 2, 0]} />
            <GlassOctahedron position={[-3, -1.5, -1]} />

            <GlowTorus position={[-1.2, 2.8, -1]} speed={0.8} />
            <GlowTorus position={[1.8, -2.5, 0.5]} speed={1.2} />

            {/* Pulsing ring decorations */}
            <PulsingRing position={[3.5, 0, -2]} />
            <PulsingRing position={[-3, 1, -3]} />

            {/* Small orbs */}
            <SmallOrb position={[-4, 0.5, 1]} color="#93d1fd" />
            <SmallOrb position={[4.2, 1, 0.5]} color="#60a5fa" />
            <SmallOrb position={[0.5, -3.2, 1.2]} color="#4DA6FF" />
            <SmallOrb position={[-1, 3.5, -0.5]} color="#bfdbfe" />

            <Stars radius={100} depth={60} count={1200} factor={3} saturation={0.3} speed={0.4} fade />
        </Canvas>
    );
}
