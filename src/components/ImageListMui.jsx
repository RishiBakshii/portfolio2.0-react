import React, { useEffect } from 'react'
import {Box,styled,Typography,Avatar,ImageList,ImageListItem,Stack} from '@mui/material'
import Lottie from 'lottie-react'
import goDownAnimation from '../assets/animations/goDownAnimation.json'
import goDownWhite from '../assets/animations/goDownWhite.json'
import goDownMouseWhite from '../assets/animations/goDownMouseWhite.json'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import 'aos/dist/aos.css'


export const ImageListMui = () => {

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: false,
        'max-glare': 0.7,
      });

      Aos.init({duration:800,delay:400})
},[])
  return (
    <ImageList variant="quilted"  gap={10}>
          
    <ImageListItem data-aos={'fade'} data-aos-delay={800} sx={{backgroundColor:"",padding:"1rem",transform: "perspective(1000px) rotateX(358deg) rotateY(346deg) scale3d(1, 1, 1)",textAlign:"left"}}>
      <Typography variant='body1'>
      The passion i feel for making data driven applications, extracting hidden insights from data through detailed analysis that solves a buisness problem is exactly what i live for
      </Typography>
    </ImageListItem>

    <ImageListItem data-aos={'fade'} data-aos-delay={4000} sx={{padding:"1rem"}}>
      <Typography variant='body1'>
      As being a self learner exploring new topics everyday and the thought of gaining expertise in the field of data science is the reason
      </Typography>
    </ImageListItem>

   

    <ImageListItem data-aos={'fade'} data-aos-delay={100}  sx={{padding:"1rem",transform: "perspective(1000px) rotateX(-11.56deg) rotateY(-16.65deg) scale3d(1, 1, 1)"}}>
      <Typography variant='body1'>
      In-depth Knowledge of Machine learning algorithms , Data Cleaning, Data Visualization, Feature Engineering, Predictive Modeling and Statistical Analysis. "Currently Exploring More about Deep learning and various neural networks."
      </Typography>
    </ImageListItem>
    
    <ImageListItem data-aos={'fade'} data-aos-delay={200}  sx={{backgroundColor:"",padding:"1rem",transform:"perspective(1000px) rotateX(11.56deg) rotateY(16.65deg) scale3d(1, 1, 1)"}}>
      <Typography variant='body1'>
        A MERN STACK DEVELOPER with expericnece in building full stack apps.I know React, MongoDB, Express, Node, MATERIAL UI
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
