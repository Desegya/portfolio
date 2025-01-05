import { Box } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
 

  return (
    <Box  px={{base: "10px", md: "40px"}} py={{base: "10px", md:"23px"}}>
      <NavBar />
    </Box>
  )
}

export default App
