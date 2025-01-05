import { Box } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
 

  return (
    <Box  px={{base: "10px", md: "40px"}} py={{base: "10px", md:"23px"}}>
      <NavBar />
      <Home />
    </Box>
  )
}

export default App
