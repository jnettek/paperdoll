// import { useLoader, useThree } from '@react-three/fiber';
// import * as THREE from 'three';
// // import autoshop from "../asset/autoshop.jpg";
// import studio from "../asset/studio_small_09_2k.jpg";
// import { useMemo } from 'react';

// const Background = () => {

//     const { gl } = useThree();
//     const texture = useLoader(THREE.TextureLoader, studio)
//     const formatted = useMemo(() => 
//     new THREE.WebGLCubeRenderTarget(texture.image.height)
//     .fromEquirectangularTexture(gl, texture)
//     ,[gl, texture]);
    
//     return (
//         <primitive 
//         attach='background'
//         object={formatted.texture} />
//     )
// }

// export default Background;

import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const Background = () => {
    const { gl } = useThree();

    useEffect(() => {
        // This will change the background to black (0x000000)
        gl.setClearColor(0x000000);
    }, [gl]);

    // Since we're setting the background color directly on the renderer,
    // we don't need to return any JSX from this component.
    return null;
}

export default Background;
