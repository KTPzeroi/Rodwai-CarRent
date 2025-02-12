import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const styles = {
  container: {
    padding: '20px',
  },
  typo: {
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: '30px',
  },
  image: {
    maxWidth: '50%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default function Page() {
  return (
    <div style={styles.container}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} style={styles.imageContainer}>
          <img src="/me.jpg" alt="me" style={styles.image} />
        </Grid>
      </Grid>

      <Typography variant="h4" style={styles.typo}>
        รหัสนักศึกษา: 6505403
        <br />
        ชื่อ-สกุล: กฤตพัฒน์ อ้นสุวรรณ
        <br />
        วิชา: CSC350 SEC 01
      </Typography>
    </div>
  );
}
