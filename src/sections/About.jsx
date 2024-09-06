
import { Grid, Typography, Button, useTheme} from '@mui/material';
import aboutIMG from '../assets/aboutIMG.png'

export const About = () => {
  const theme = useTheme()

  return (
    <Grid container sx={{ minHeight: '100vh', margin:{xs:'6rem 0', sm:'0'} }} id='about' display='flex'alignItems='center'>
      <Grid item xs={12} md={6}>
      <div data-aos="fade-up-right">
        <figure className='about-img'>
          <img src={aboutIMG} alt="Hombre trabajando con una computadora" />
        </figure>
      </div>
      </Grid>
      <Grid item md={6}>
      <div data-aos="fade-up-left">
      <Typography variant='h3' color={theme.palette.primary.main} sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold'}}>Acerca de mí</Typography>
      <Typography variant='h5'>Un tucumano apasionado por el Desarrollo Web</Typography>
      <p>
            Soy un desarrollador frontend apasionado por aprender y crear
            aplicaciones web escalables y de alto rendimiento. Tengo una sólida
            base en JavaScript y TypeScript, y he trabajado en proyectos
            utilizando tecnologías como React, Next.js y herramientas de gestión
            de estado como React Redux Toolkit o Zustand.
          </p>
          <p>
            Mi experiencia incluye la creación de interfaces de usuario
            accesibles y responsivas, la implementación de componentes
            reutilizables, el desarrollo de APIs RESTful, la implementación de
            bases de datos relacionales y no relacionales, y la optimización de
            aplicaciones para mejorar el rendimiento. Soy un firme creyente en
            las mejores prácticas de desarrollo y utilizo herramientas como Git,
            Docker y metodologías ágiles para garantizar la calidad y la
            eficiencia de mi trabajo.
          </p>
          <p>
            Soy proactivo, adaptable y tengo un gran deseo de aprender nuevas
            tecnologías y enfoques de desarrollo.
          </p>
      {/* <Button variant='contained' color='primary' sx={{ marginTop:'0.5rem', textTransform:'capitalize', width:{xs:'100%', sm:'auto'} }}href='https://drive.google.com/file/d/1rL2BgRjFN-93fv_His9ujaAjDhr8aSlG/view' target='_blank'>ver currículo</Button> */}
      </div>
      </Grid>

    </Grid>
  )
}
