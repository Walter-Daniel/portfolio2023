import { Button, Grid, IconButton, Typography } from '@mui/material'
import hero from '../assets/hero1.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Hero = () => {
  return (
    <Grid container sx={{ height:'100vh' }}>
      <Grid item xs={12} md={6} lg={7} display='flex'  justifyContent='center' alignItems='flex-start' flexDirection='column'>
        <Typography variant='h3' sx={{ textTransform:'uppercase' }}>Desarrollador Web FullStack <span className='hero-text'>MERN</span></Typography>
        <Typography variant='h5'>Hola! Me llamo Walter Daniel Carrizo y soy un apasionado del Desarrollo Web.</Typography>
        <Typography variant='h5'><LocationOnIcon /> Tucumán, Argentina.</Typography>
        
        <Grid container width='100%'>
          <Grid item  paddingTop='0.5rem'>
          <Button variant='contained' color='secondary' startIcon={<LinkedInIcon />} sx={{marginRight:'1rem'}} >Linkedin</Button>
          <Button variant='contained' color='secondary' startIcon={<GitHubIcon />}>GitHub</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={5} display='flex'  justifyContent='center' alignItems='flex-start' flexDirection='column'>
        <figure className='hero-img'>
          <img src={hero} alt="Walter Daniel Carrizo" />
        </figure>
      </Grid>
    </Grid>
  )
}
