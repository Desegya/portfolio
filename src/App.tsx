
import './App.css'

import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 

  return (
    <Layout scrollToTop={scrollToTop} >
      
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer scrollToTop={scrollToTop} />
    </Layout>
  )
}

export default App
