
import { Grid, Typography, Button, useTheme} from '@mui/material';
import aboutIMG from '../assets/aboutIMG.png'

export const About = () => {
  const theme = useTheme()

  return (
    <Grid container sx={{ minHeight: '100vh', margin:{xs:'6rem 0', sm:'0'} }} id='about' display='flex'alignItems='center'>
      <Grid item xs={12} md={6}>
        <figure className='about-img'>
          <img src={aboutIMG} alt="Hombre trabajando con una computadora" />
        </figure>
      </Grid>
      <Grid item md={6}>
      <Typography variant='h3' color={theme.palette.primary.main} sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold'}}>Acerca de mí</Typography>
      <Typography variant='h5'>Un apasionado Desarrollador Web FullStack de Tucumán, Argentina.</Typography>
      <Typography>
      Como Desarrollador Web FullStack, tengo conocimientos en Javascript, Typescript, ReactJs, NodeJs, Express, en base de datos relacionales y no relacionales. 
      </Typography>
      <Typography>Cuento con experiencia en proyectos grupales e individuales, soy proactivo, me gusta investigar y poner en práctica nuevas formas de optimizar mi código y mejorar la experiencia del usuario.</Typography>
      <Typography> Mis mayores fortalezas son mi paciencia, mi empatía y mi empeño en aprender. Soy amante de la tecnología, fotografía y de la naturaleza.</Typography>
      <Button variant='contained' color='primary' sx={{ marginTop:'0.5rem', textTransform:'capitalize', width:{xs:'100%', sm:'auto'} }}>ver currículo</Button>

      </Grid>

    </Grid>
  )
}
