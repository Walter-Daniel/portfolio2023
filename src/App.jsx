import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from '@mui/material'
import { About, Contact, EducationSkills, Hero, Portfolio } from './sections';
import {AppTheme} from './theme/AppTheme'
import { Navbar } from './common/Navbar';

function App() {
  

  return (
    <AppTheme>
      <Navbar />
      <Container>
        <Hero />
        <About />
        <EducationSkills />
        <Portfolio />
        <Contact />
      </Container>
    </AppTheme>
  )
}

export default App
