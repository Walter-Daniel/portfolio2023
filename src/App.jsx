
import { Container } from '@mui/material'
import { About, Contact, EducationSkills, Hero, Portfolio } from './sections';
import {AppTheme} from './theme/AppTheme'
import { Navbar } from './common/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
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
