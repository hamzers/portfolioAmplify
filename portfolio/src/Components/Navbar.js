import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function NavBar() {
  return (
    <div className='Navbar'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: '#003049'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Home
          </IconButton> */}
          {/* <Typography  component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography> */}
          <Button color="inherit" variant='outlined'>Home</Button>
          <Button color='inherit'>About Me</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Work XP</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
