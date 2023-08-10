import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React from 'react'

export const ProjectCard = ({name,img,desc,githubLink,deploymentLink}) => {
  return (
    <Card sx={{maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="200"
      image={img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" target='_blank' href={githubLink}>Github</Button>
      <Button size="small" target='_blank' href={deploymentLink}>View Deployment</Button>
    </CardActions>
  </Card>
  )
}