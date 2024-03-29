import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const View = () => {

  return (
    <div>
        <h1>View Student</h1>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.pngitem.com/pimgs/m/756-7562957_student-icon-png-transparent-png.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          STUDENT PROFILE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name:Diya
          <br />
          Branch:CSE
          <br />
          year:2021
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default View