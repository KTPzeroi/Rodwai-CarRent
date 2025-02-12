import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaidIcon from '@mui/icons-material/Paid';
import Link from 'next/link';


const styles = {
  container: {
    background: '#f0f0f0', 
    padding: '20px', 
  },
  typo: {
    WebkitTextStroke: '3px rgb(255, 255, 255)',
    color: 'rgb(0, 0, 0)',
    alignItems: 'center',
    margin: '0 3px 0 0', 
    textAlign: 'center'
  },
  button: {
    margin: '20px',
    backgroundColor: '#011e48', 
    color: '#fff', 
  },
  card: {
    margin: '5px'
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
};

export async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/carlist//`)
  return res.json()
}

export default async function Page() {
  const data = await getData()
  console.log(data)
  return (
    <div style={styles.container}>
      <Typography variant='h2' style={styles.typo}>
        SPECIAL OFFER FOR YOU!!
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {data.map((carlist) => (
          <Grid item key={carlist.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card sx={styles.card}>
              <CardMedia
                sx={styles.cardMedia}
                image={carlist.image}
                title={carlist.brand}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {carlist.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <PersonIcon/> {carlist.seats} <br/>
                  <DirectionsCarIcon/>{carlist.gear} <br/>
                  <PaidIcon/>{carlist.price} THB <br/>
                </Typography>
              </CardContent>
              <CardActions>
              <Link href={`/booking/${carlist.id}`}>
                  <Button size="small" sx={styles.button}>Booking</Button>
                </Link>
                <Link href={`/carlist/${carlist.id}`}>
                  <Button size="small" sx={styles.button}>More Info</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
