import { Box } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

const Floor = (props) => {
  const [ref] = useBox(()=>({mass: 0, args: [20,1,10], ...props}))
    return (
      <Box ref={ref} args={[100, 1, 100]} receiveShadow >
      <meshPhysicalMaterial transparent={true} opacity={1}/>
      </Box>
    );
  }

export default Floor;