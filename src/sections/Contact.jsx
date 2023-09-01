import { Grid, Typography, useTheme, Button, Stack, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Contact = () => {
  const theme = useTheme();
  return (
    <Grid container marginTop='8rem' sx={{ minHeight:'30vh' }} direction='row' alignItems='center' id='contact'>
      <Grid item xs={12}>
      <div data-aos="fade-up">
        <Typography variant='h3' color={theme.palette.primary.main} sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold', paddingBottom:'1rem'}}>
          contacto
        </Typography>
        <Typography fontWeight='bold' marginBottom='0.5rem'>Puedes contactarme a través de mi email o linkedin  <ArrowDownwardIcon /></Typography>
        <Grid container direction='row' width='100%' justifyContent='space-around'>
          <Grid item xs={12} md={6} display='flex' marginBottom='0.5rem'>
            <AlternateEmailIcon sx={{ backgroundColor:'black', borderRadius:'50%', padding:'5px', color:'white', marginRight:'0.5rem' }}/> 
          <Typography> Email: walterdcarrizo.19@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant='contained' color='secondary' startIcon={<LinkedInIcon />} href='https://www.linkedin.com/in/walter-daniel-carrizo/' target='_blank' sx={{ width:{xs:'100%', md:'auto'} }}>Linkedin</Button>
          </Grid>
          
        </Grid>
      </div>
      </Grid>
    </Grid>
  )
}
