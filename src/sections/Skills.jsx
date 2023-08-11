import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { skillsData } from '../helpers/skillsData'

export const SkillSection = () => {
  const theme = useTheme();
  return (
    <Grid container direction='row'>
      <Grid item display='flex' flexDirection='column' justifyContent='center' height='100vh'>
      <Typography
          variant="h2"
          color={theme.palette.primary.main}
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Habilidades
        </Typography>
      {
        skillsData.map((skill) => (
          <Card sx={{ width:'100%', margin:'1rem 0' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textTransform='capitalize' sx={{ fontWeight:'bold' }}>
                {skill.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {skill.skills}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
      </Grid>
    </Grid>
  )
}
