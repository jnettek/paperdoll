import React from "react";
import { ReactComponent as ResetIcon } from "../asset/reset.svg";
import state from '../state';

const style = {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    bottom: '25px',
    height: '40px',
    width: '40px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50%',
    fontSize: 20,
    fontWeight: 'bold',
    border: '1px solid black',
    cursor: 'pointer',
}

const CameraButtons = () => {

    const resetCamera = () => {
      
        state.cameraPos.set(...state.initialCameraPos);
        state.target.set(...state.initialTarget);
        state.activeMeshName = ''; // Reset active mesh name if needed
        state.shouldUpdate = true;
    }

    return (
        <button 
            onClick={resetCamera}
            style={{
                right: '40vw',
                ...style
            }}>
              <ResetIcon />
        </button>
    )
}

export default CameraButtons;