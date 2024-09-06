import { Button, Menu, MenuItem, Stack } from '@mui/material';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';



export const DropDownPorfolio = ({ githubFront, githubBack }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
        color='secondary'
        startIcon={<GitHubIcon />}
      >
        Repositorio
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {(githubFront && githubBack) && (
          <Stack direction='column' width='7.8rem'>
            <Button variant='secondary' href={githubFront} target='_blank' sx={{ width: '100%' }}>Frontend</Button>
            <Button variant='secondary' href={githubBack} target='_blank' sx={{ width: '100%' }}>Backend</Button>
          </Stack>
        )}
        {(!githubBack && githubFront) && (
          <Button variant='secondary' href={githubFront} target='_blank' sx={{ width: '7.8rem' }}>Frontend</Button>
        )}
        {(!githubFront && githubBack) && (
          <Button variant='secondary' href={githubBack} target='_blank' sx={{ width: '7.8rem' }}>Backend</Button>
        )}
      </Menu>
    </div>
  );
}
