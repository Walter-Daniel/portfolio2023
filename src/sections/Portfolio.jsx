import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { CardPortfolio } from '../components/CardPortfolio'
import { portfolioInfo } from '../helpers/portfolioInfo'
export const Portfolio = () => {
  const theme = useTheme();
  return (
    <Grid container id='portfolio' paddingTop='6rem'>
      <div data-aos="fade-up">
      <Typography variant='h2'color={theme.palette.primary.main} sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'bold', marginBottom:'1rem'}}>Portfolio</Typography>
      </div>
      <Grid item>
        {
          portfolioInfo.map(project =>(<CardPortfolio project={project} key={project.path}/>))
        }
        
      </Grid>
    </Grid>
  )
}
