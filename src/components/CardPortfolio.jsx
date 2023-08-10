import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { DropDownPorfolio } from "./DropDownPortfolio";
import LanguageIcon from '@mui/icons-material/Language';

export const CardPortfolio = ({ project }) => {
  return (
    <Card sx={{ marginBottom:'1rem' }} className="card-portfolio">
      <Box className='card-container'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight:'bold' }}>
            {project.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {project.description}
          </Typography>
          <Typography variant='h6' sx={{ marginTop:'1rem', fontSize:'1.1rem', fontWeight:'bold' }}>Tecnologías:</Typography>
          <Typography variant="body2" color="text.secondary">
            {project.tecnology}
          </Typography>
        </CardContent>
        <CardActions sx={{marginLeft:'7px'}}>
          <Stack spacing={2} direction='row'>
            <Button variant="contained" href={project.path} startIcon={<LanguageIcon />} target="_blank">Demo</Button>
            <DropDownPorfolio githubBack={project.githubBack} githubFront={project.github}  />
          </Stack>
        </CardActions>
      </Box>
      <figure className="card-figure">
        <img src={project.img} alt="" />
      </figure>
    </Card>
  );
};
