import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Educations'
import Certificates from './components/Certificates'
import Contacts from './components/Contacts'
import Footers from './components/Footers'


function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contacts />
      <Footers />
    </BrowserRouter>
  )
}

export default App
