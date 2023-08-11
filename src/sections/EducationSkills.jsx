import { Grid } from '@mui/material'
import { SkillSection } from './Skills';
import { Education } from './Education';

export const EducationSkills = () => {
  
  return (
    <Grid container sx={{ minHeight:'100vh' }} direction='row' justifyContent='center'>
      <Grid item xs={12} md={6} >
        <Education />
      </Grid>
      <Grid item xs={12} md={6} id='skills'>
        <SkillSection /> 
      </Grid>
    </Grid>
  )
}
