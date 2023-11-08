import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Dragable from "./Dragable";
import Model from './Model';


const Cars = ({ orbitRef }) => {
    return (         
        <group>

    {/* <Suspense fallback={null}>
        <group>

        <Dragable orbitControlsRef={orbitRef}>
        <BoundingBox  
        position={[-4,6,0]}
        dims={[2,1.5,5]}
        offset={[-0.1,-0.15,0.3]}
        >
            <Model 
            path='/tesla_model_3/scene.gltf'
            scale={new Array(3).fill(0.01)}
            
            />
        </BoundingBox>
        </Dragable>
    </group> 
    </Suspense> */}
       
{/* ///////////////// HUMAN */}
        <Suspense fallback={null}>
            <Dragable orbitControlsRef={orbitRef}>
            <Model 
                path='/testtt.glb' // Path to your .glb model file
                scale={new Array(3).fill(0.3)} // Scale factor, adjust as needed
                position={[3.5,0,0]}
            />
     </Dragable>
            </Suspense>


        
                    </group>
                    
        );
}

export default Cars;