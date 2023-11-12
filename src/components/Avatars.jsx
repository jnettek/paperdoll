import { Suspense } from "react";
// import BoundingBox from "./BoundingBox";
import Dragable from "./Dragable";
import Model from './Model';


const Avatars = ({ orbitRef }) => {
    return (         
      


        <Suspense fallback={null}>
            <Dragable orbitControlsRef={orbitRef}>
                 <Model 
                path='/modelThree.glb' // Path to your .glb model file
                scale={new Array(3).fill(0.3)} // Scale factor, adjust as needed
                position={[3.5,0.5,0]}
            /> 
   
            <Model 
                path='/modelTwo.glb' // Path to your .glb model file
                scale={new Array(3).fill(0.3)} // Scale factor, adjust as needed
                position={[0,0.5,0]}
            />  
           
                 <Model 
                path='/testtt.glb' // Path to your .glb model file
                scale={new Array(3).fill(0.3)} // Scale factor, adjust as needed
                position={[-3.5,0.5,0]}
        /> 
     </Dragable>
            </Suspense>


        
                  
                    
        );
}

export default Avatars;