import { Box } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
 

  return (
    <Box  px={{base: "10px", md: "40px"}} py={{base: "10px", md:"23px"}}>
      <NavBar />
      <Home />
      <Projects />
    </Box>
  )
}

export default App
