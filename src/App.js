import React, { useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AxesHelper } from 'three';
import { Suspense } from 'react';
import { Physics } from '@react-three/cannon';
import Background from './components/Background';
import Floor from './components/Floor';
import ColorPicker from './components/ColorPicker';
import Bulb from './components/Bulb';
import Avatars from './components/Avatars';
import CameraContorls from './components/CameraControls'; 
import CameraButtons from './components/CameraButtons';


function App() {

   const orbitRef = useRef();

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <ColorPicker />
            <CameraButtons/>
            <Canvas 
            style={{background: 'black'}}
            camera={{ position: [7,7,7]}} 
            shadowMap
            shadows>
                <CameraContorls orbitRef={orbitRef}/>
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Background />
                </Suspense>
                <Physics>
                <Bulb position={[7,8,0]}/>
                <Bulb position={[3.5,8,0]}/>
                <Bulb position={[0,8,0]}/>
                <Bulb position={[-3.5,8,0]}/>
                <Bulb position={[-7,8,0]}/>
                <Avatars orbitRef={orbitRef}/>
                <Floor/>
                </Physics>
                {/* <primitive object={new AxesHelper(8)} /> */}
                <OrbitControls ref={orbitRef}/>
            </Canvas>
        </div>
     
    );
}

export default App;
