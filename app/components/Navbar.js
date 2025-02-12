import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const styles = {
  appBar: {
    backgroundColor: '#011e48' 
  },
  logo: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    borderRadius: '10%'
  }
};

export default function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={styles.appBar}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link href="/">
              <img src="Rodwai.jpg" alt="logo" style={styles.logo} />
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h2>RODWAI</h2>
            </Typography>
            <Link href="/about">
            <Button color="primary"><h2>ABOUT</h2></Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
