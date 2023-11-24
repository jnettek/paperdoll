import { Suspense } from "react";
import Dragable from "./Dragable";
import Model from './Model';
import { sets } from '../state';
import state from '../state';



const Avatars = ({ orbitRef }) => {

    const handleAvatarClick = (modelName) => {
        for (const key in sets) {
            if (sets.hasOwnProperty(key) && sets[key].name === modelName) {
                const selectedSet = sets[key];
                state.cameraPos.set(...selectedSet.cameraPos);
                state.target.set(...selectedSet.target);
                state.activeMeshName = selectedSet.name;
                state.shouldUpdate = true;
                return; // Exit the function once the matching set is found
            }
        }
    };

    return (
        <Suspense fallback={null}>
            <Dragable orbitControlsRef={orbitRef}>
                <Model 
                    path='/modelThree.glb'
                    scale={new Array(3).fill(0.3)}
                    position={[3.5,0.5,0]}
                    onAvatarClick={handleAvatarClick}
                    modelName="Pattern2D_28786_1"
                />
                <Model 
                    path='/modelTwo.glb'
                    scale={new Array(3).fill(0.3)}
                    position={[0,0.5,0]}
                    onAvatarClick={handleAvatarClick}
                    modelName="24"
                />
                <Model 
                    path='/testtt.glb'
                    scale={new Array(3).fill(0.3)}
                    position={[-3.5,0.5,0]}
                    onAvatarClick={handleAvatarClick}
                    modelName="Pattern2D_148591_1"
                />
            </Dragable>
        </Suspense>
    );
}

export default Avatars;
