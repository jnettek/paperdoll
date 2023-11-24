import * as THREE from 'three'
//"Capot001_CAR_PAINT_0"
//"object005_bod_0"
// X,Y,Z

//Pattern2D_148591_1
export const sets = {
        //model 1 FAR LEFT
         1: {
         cameraPos: [7,6,2],
         target: [-4,0,0],
        name: "Pattern2D_148591_1"
         },
         //model 2 MIDDLE
         2: {
             //X,Y,Z
             cameraPos: [-5,7,5],
             target: [0,0,0],
             name: '24'
         },
         //model 3 
         3: {
             cameraPos: [7,7,4],
             target: [4,0,0],
            name: "Pattern2D_28786_1"
         }
};

const initialCameraPos = [0, 4, 10]; // Replace with your initial camera position
const initialTarget = [0, 2, -8]; // Replace with your initial target


const state = {
    activeMesh: {},
    activeMeshName: "Pattern2D_148591_1",
    cameraPos: new THREE.Vector3(...initialCameraPos),
    target: new THREE.Vector3(...initialTarget),
    shouldUpdate: true,
    initialCameraPos, 
    initialTarget

}


export default state;