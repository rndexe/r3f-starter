import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';

export default function App() {
    return (
        <Canvas>
            {import.meta.env.DEV && <Perf minimal />}

            <Scene />
        </Canvas>
    );
}

function Scene() {
    const boxRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.x += delta;
    });
    return <Box ref={boxRef} />;
}
