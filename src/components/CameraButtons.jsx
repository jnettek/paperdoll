
import state from '../state'

const style = {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '10vh',
    height: '40px',
    width: '40px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50%',
    fontSize: 20,
    fontWeight: 'bold',
    border: '1px solid black',
    cursor: 'pointer'
}

const CameraButtons = () => {

    const sets = {
       //model 1 
        1: {
        cameraPos: [-1,3,2],
        target: [-4,0,0],
        name: 'Pattern2D_28786_1'
        },
        //model 2 MIDDLE
        2: {
            //X,Y,Ze
            cameraPos: [-1,3,2],
            target: [0,0,0],
            name: '24'
        },
        //model 3 FAR LEFT
        3: {
            cameraPos: [8,3,2],
            target: [4,0,0],
            name: "Pattern2D_148591_1"
        }
    }

    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true

    }


    return (
        <>
        <button 
            onClick={e => handleClick(1)}
            style={{
                right: '40vw',
                ...style
            }}>
        {'>'}
        </button>

        <button
            onClick={e => handleClick(2)}
            style={{
                left: '40vw',
                ...style
             }}>
        {'<'}
        </button>
     
        </>
    )
   
}

export default CameraButtons;

