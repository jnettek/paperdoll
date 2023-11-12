import { Cylinder } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

const Bulb = ({position}) => {
    const meshRef = useRef();
    const { scene } = useThree();

    useEffect(() => {
        // Rotate the mesh to be parallel to the floor
        // Assuming the floor is on the XZ plane, we rotate around the Y axis
        meshRef.current.rotation.x = Math.PI / 2;
    }, []);

    return (
        <mesh position={position} ref={meshRef}>
        {/*size of the sphere defines by args */}
        <Cylinder args={[0.1, 0.1, 5, 32]}>
                    <meshStandardMaterial emissive="white" />
                </Cylinder>
        {/* The light emitted from the bulb */}
        <pointLight castShadow color="pink" 
        distance={20} 
        intensity={30} 
        decay={2}
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024}  />
    </mesh>
    );
} 

export default Bulb;