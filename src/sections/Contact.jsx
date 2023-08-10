import { Grid, Typography, useTheme, Button, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const Contact = () => {
  const theme = useTheme();
  return (
    <Grid container marginTop='8rem' sx={{ minHeight:'30vh' }} direction='row' alignItems='center'>
      <Grid item>
        <Typography variant='h3' color={theme.palette.primary.main} sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold', paddingBottom:'1rem'}}>
          contacto
        </Typography>
        <Typography>Puedes contactarme a través de mi linkedin o email  <ArrowDownwardIcon /></Typography>
        <Stack direction='row' spacing={2}>
        <Typography>Email: walterdcarrizo.19@gmail.com</Typography>
        <Button variant='contained' color='secondary' startIcon={<LinkedInIcon />} href='https://www.linkedin.com/in/walter-daniel-carrizo/' target='_blank'>Linkedin</Button>
        </Stack>
      </Grid>
    </Grid>
  )
}
