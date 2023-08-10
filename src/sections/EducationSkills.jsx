import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { SkillSection } from './Skills';
import { Education } from './Education';

export const EducationSkills = () => {
  const theme = useTheme();
  return (
    <Grid container sx={{ minHeight:'100vh' }} direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={12} md={6} >
        <Education />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant='h3' color={theme.palette.primary.main}  sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold', alignSelf:'initial', justifySelf:'flex-start'}}>Habilidades</Typography>
        <SkillSection /> 
      </Grid>
    </Grid>
  )
}
