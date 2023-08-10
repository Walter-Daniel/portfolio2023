import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { skillsData } from '../helpers/skillsData'

export const SkillSection = () => {
  return (
    <>
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
    </>
  )
}
