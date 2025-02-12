import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import Link from 'next/link';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 20px',
    position: 'relative',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
  },
  typo: {
    WebkitTextStroke: '3px rgb(255, 255, 255)',
    color: 'rgb(0, 0, 0)',
    alignItems: 'left',
    margin: '0 3px 0 0',
    textAlign: 'center',
    fontFamily: 'Jersey 15, sans-serif',
  },
  button: {
    margin: '20px',
    backgroundColor: '#011e48',
  },
};

export default function Page() {
  return (
    <div style={styles.container}>
      <video autoPlay loop muted style={styles.video}>
        <source src="bmw.mp4" type="video/mp4" />
      </video>
      <Typography variant='h1' style={styles.typo}>
        RENT <br/>
        FROM <br/>
        YOUR STYLE
      </Typography>
      <Link href="/carlist">
        <Button variant="contained" color="primary" style={styles.button}>Explore Now</Button>
      </Link>
    </div>
  );
}
