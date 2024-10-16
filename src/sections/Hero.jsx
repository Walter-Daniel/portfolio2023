import { Button, Grid, IconButton, Typography } from '@mui/material'
import hero from '../assets/hero1.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Hero = () => {
  return (
    <Grid container sx={{ height:'100vh' }}>
      <Grid item xs={12} md={6} lg={7} display='flex'  justifyContent='center' alignItems='flex-start' flexDirection='column'>
      <div data-aos="zoom-in">
        <Typography variant='h3' sx={{ textTransform:'uppercase', fontSize:{ xs:'1.8rem', md:'3rem' }, paddingTop:{xs:'4rem', md:'0'} }}>Desarrollador Web 
          <br />
          <span className='hero-text'>Full Stack</span>
          </Typography>
        <Typography variant='h5'color='GrayText'>Hola! Me llamo Walter Daniel Carrizo y soy un apasionado del Desarrollo Web.</Typography>
        <Typography variant='h5'><LocationOnIcon /> Tucumán, Argentina.</Typography>
        
        <Grid container width='100%'>
          <Grid item  paddingTop='0.5rem'>
          <Button variant='contained' color='secondary' startIcon={<LinkedInIcon />} sx={{marginRight:'1rem'}}href='https://www.linkedin.com/in/walter-daniel-carrizo/' target='_blank'>Linkedin</Button>
          <Button variant='contained' color='secondary' startIcon={<GitHubIcon />} href='https://github.com/Walter-Daniel' target='_blank'>GitHub</Button>
          </Grid>
        </Grid>
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={5} display='flex'  justifyContent='center' alignItems='flex-start' flexDirection='column'>
      <div data-aos="zoom-in">
        <figure className='hero-img'>
          <img src={hero} alt="Walter Daniel Carrizo" />
        </figure>
      </div>
      </Grid>
    </Grid>
  )
}
