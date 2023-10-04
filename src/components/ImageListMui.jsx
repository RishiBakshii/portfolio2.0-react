import React, { useEffect } from 'react'
import {Typography,ImageList,ImageListItem} from '@mui/material'
import Lottie from 'lottie-react'
import goDownWhite from '../assets/animations/goDownWhite.json'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import 'aos/dist/aos.css'


export const ImageListMui = () => {

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 20,
        speed: 200,
        glare: true,
        'max-glare': 0.2,
      });

      Aos.init({duration:300,delay:1})
},[])


  return (
    <ImageList variant="quilted"  gap={10}>
          
    <ImageListItem  data-aos={'fade'} data-aos-delay={800} sx={{backgroundColor:"",padding:"1rem",transform: "perspective(1000px) rotateX(358deg) rotateY(346deg) scale3d(1, 1, 1)",textAlign:"left"}}>
      <Typography variant='h5'>
        Launched my Own social Media "StangChat" builded from scratch
      {/* The passion i feel for making data driven applications, extracting hidden insights from data through detailed analysis that solves a buisness problem is exactly what i live for */}
      </Typography>
    </ImageListItem>

    <ImageListItem   data-aos={'fade'} data-aos-delay={4000} sx={{padding:"1rem"}}>
      <Typography variant='body1'>
      As being a self learner exploring new topics everyday and the thought of gaining expertise in the field of data science is the reason
      </Typography>
    </ImageListItem>

   

    <ImageListItem  data-aos={'fade'} data-aos-delay={100}  sx={{padding:"1rem",transform: "perspective(1000px) rotateX(-11.56deg) rotateY(-16.65deg) scale3d(1, 1, 1)"}}>
      <Typography variant='body1'>
      In-depth Knowledge of Machine learning algorithms , Data Cleaning, Data Visualization, Feature Engineering, Predictive Modeling and Statistical Analysis. "Currently Exploring More about Deep learning and various neural networks."
      </Typography>
    </ImageListItem>

    <ImageListItem  data-aos={'fade'} data-aos-delay={100}  sx={{padding:"1rem",transform: "perspective(1000px) rotateX(-11.56deg) rotateY(-16.65deg) scale3d(1, 1, 1)"}}>
      <Typography variant='h4' fontWeight={500}>
        Learning React-Native Currently
      </Typography>
    </ImageListItem>
    
    <ImageListItem  data-aos={'fade'} data-aos-delay={200}  sx={{backgroundColor:"",padding:"1rem",transform:"perspective(1000px) rotateX(11.56deg) rotateY(16.65deg) scale3d(1, 1, 1)"}}>
      {/* <Typography variant='body1'>
        A MERN STACK DEVELOPER with expericnece in building full stack apps.I know React, MongoDB, Express, Node, MATERIAL UI
      </Typography> */}
      <Typography variant='body1' sx={{boxShadow:"0 0 1rem 1px white"}} borderRadius={'.4rem'} p={2}>
        Developed a full stack social media application with authentication , comments , posting , likes and chat features.
        Backend is written on flask and react is used as a frontend framework
      </Typography>
    </ImageListItem>


    {/* animation */}
    <ImageListItem sx={{padding:"1rem"}} data-aos={"fade"} data-aos-delay={2000}>
      <Typography>
        <Lottie animationData={goDownWhite}></Lottie>
      </Typography>
    </ImageListItem>

</ImageList>
  )
}
