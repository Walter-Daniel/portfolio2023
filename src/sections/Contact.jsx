import { Grid, Typography, useTheme, Button, Stack, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Contact = () => {
  const theme = useTheme();
  return (
    <Grid container marginTop='8rem' sx={{ minHeight:'30vh' }} direction='row' alignItems='center' id='contact'>
      <Grid item>
        <Typography variant='h3' color={theme.palette.primary.main} sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold', paddingBottom:'1rem'}}>
          contacto
        </Typography>
        <Typography fontWeight='bold' marginBottom='0.5rem'>Puedes contactarme a través de mi linkedin o email  <ArrowDownwardIcon /></Typography>
        <Stack direction='row' spacing={2} sx={{ xs:{ direction:'column' } }}>
          <Box display='flex' justifyContent='center' alignItems='center' border='1px solid black' borderRadius='10px' padding='0.5rem'>
          <AlternateEmailIcon sx={{ backgroundColor:'black', borderRadius:'50%', padding:'5px', color:'white', marginRight:'0.5rem' }}/> 
          <Typography> Email: walterdcarrizo.19@gmail.com</Typography>
          </Box>
        <Button variant='contained' color='secondary' startIcon={<LinkedInIcon />} href='https://www.linkedin.com/in/walter-daniel-carrizo/' target='_blank'>Linkedin</Button>
        </Stack>
      </Grid>
    </Grid>
  )
}
