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
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // เพิ่มเงาให้กับการ์ด
    borderRadius: '10px', // ปรับมุมของการ์ด
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
    justifyContent: 'center', // จัดตำแหน่งปุ่มให้ตรงกลาง
    marginTop: '20px',
  },
  backButton: {
    marginRight: '10px', // ระยะห่างของปุ่ม BACK
    backgroundColor: '#d3d3d3', // สีพื้นหลังปุ่ม BACK
    color: '#000', // สีข้อความบนปุ่ม BACK
  },
  bookButton: {
    backgroundColor: '#011e48', // สีพื้นหลังปุ่ม BOOK
    color: '#fff', // สีข้อความบนปุ่ม BOOK
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
            <Link href="/carlist">
                <Button variant="contained" style={styles.backButton}>BACK</Button>
            </Link>
            <Link href={`/booking/${id}`}>
                <Button variant="contained" style={styles.bookButton}>BOOK</Button>
            </Link>
        </div>
    </div>
  )
}
