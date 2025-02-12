import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaidIcon from '@mui/icons-material/Paid';
import Link from 'next/link';

const styles = {
  card: {
    margin: '5px',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '10px', 
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '20px',
  },
  backButton: {
    marginRight: '10px',
    backgroundColor: '#d3d3d3',
    color: '#000',
  },
  bookButton: {
    backgroundColor: '#011e48', 
    color: '#fff', 
  },
};

export async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/carlist//${id}`)
    return res.json()
}

export default async function Page({params}) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
    return (
    <div>
        <div>
        <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
      <img src="/slip.jpg" alt="Slip" />
      </Grid>
    </Grid>
    </div>
        <Card sx={styles.card}>
          <CardMedia
            sx={styles.cardMedia}
            image={data.image}
            title={data.brand}
          />
          <CardContent sx={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="div">
              {data.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PersonIcon/> จำนวนที่นั่ง : {data.seats} <br/>
              <DirectionsCarIcon/> ระบบเกียร์ : {data.gear} <br/>
              <PaidIcon/> ราคา : {data.price} บาท/วัน <br/>
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        <div style={styles.buttonContainer}>
            <Link href="/">
                <Button variant="contained" style={styles.backButton}>CONFIRM PAY</Button>
            </Link>
        </div>
    </div>
  )
}
