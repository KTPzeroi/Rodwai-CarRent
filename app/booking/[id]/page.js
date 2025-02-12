import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaidIcon from '@mui/icons-material/Paid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
  button: {
    backgroundColor: '#011e48',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
  },


  input: {
    margin: '10px auto',
    display: 'block',
    width: '80%',
    textAlign: 'center',
  },
  centerAlign: {
    display: 'flex',
    justifyContent: 'center',
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
      <Typography gutterBottom variant="h3" component="div" style={{ textAlign: 'center', WebkitTextStroke: '2px black' }}>
        Please Insert Information
      </Typography>

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
      </Card>
      <Link href="https://maps.app.goo.gl/KxxSeYs57DL9Zq238">
        <h5><Button size="large" style={{ display: 'block', margin: 'auto' }}>จุดรับรถ</Button></h5>
      </Link>

      <div style={styles.input}>
        <TextField label="ชื่อ" variant="outlined" style={{ marginBottom: '20px' , marginRight: '20px'}} />
        <TextField label="นามสกุล" variant="outlined" style={{ marginBottom: '20px' }} /><br/>
        <TextField label="เลขบัตรประชาชน" variant="outlined" style={{width: '550px'}} />
      </div>
      <div style={styles.centerAlign}>
        <FormGroup>
          <FormControlLabel required control={<Checkbox />} label="นัดแล้วห้ามบิด" />
        </FormGroup>
      </div>
      <div style={styles.buttonContainer}>
    <Link href={`/payment/${id}`}>
        <Button variant="contained" style={styles.button}>BOOK NOW</Button>
    </Link>
    </div>
</div>
  )
}
