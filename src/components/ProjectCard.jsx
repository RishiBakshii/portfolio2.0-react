import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';

import React from 'react'
import { CloudCircle, GitHub } from '@mui/icons-material';

export const ProjectCard = ({name,img,desc,githubLink,deploymentLink}) => {
  return (
    <Card sx={{maxWidth: 345 ,backgroundColor:"#191919",height:"max-content"}}>

    <CardMedia component="img" alt={`${name} -image`} height="200" image={img}/>

    <CardContent>
      <Typography gutterBottom variant="h5">{name}</Typography>
      <Typography variant="body2" fontWeight={300} mt={3}>{desc}</Typography>
    </CardContent>

    <CardActions>
      <Button size="medium" sx={{color:"white",padding:".7rem",borderRadius:".6rem"}} target='_blank' href={githubLink}><GitHub/></Button>
      <Button size="medium" sx={{color:"white",padding:".7rem",borderRadius:".6rem"}} target='_blank' href={deploymentLink}><LaunchIcon/></Button>
    </CardActions>

  </Card>
  )
}
