import React, { useEffect } from 'react'
import {Box,styled,Typography,Avatar,ImageList,ImageListItem,Stack} from '@mui/material'
import Lottie from 'lottie-react'
import goDownAnimation from '../assets/animations/goDownAnimation.json'
import goDownWhite from '../assets/animations/goDownWhite.json'
import goDownMouseWhite from '../assets/animations/goDownMouseWhite.json'
import VanillaTilt from 'vanilla-tilt'

const CustomImageListItem=styled(ImageListItem)({
  // fontSize:"1rem",
  // fontWeight:"300",
  // transform: "translate3d(5px, 10px, 19px) rotate3d(1, 1, 1, 10deg)",
  // boxShadow:"0 0 1rem 1px rgba(255 ,255 ,255 ,.4)",
})

export const ImageListMui = () => {

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.7,
      });
},[])
  return (
    <ImageList variant="quilted"  gap={20}>
          
    <CustomImageListItem  sx={{backgroundColor:"",padding:"1rem",transform: "perspective(1000px) rotateX(-11.56deg) rotateY(16.65deg) scale3d(1, 1, 1)"}}>
      <div>
      The passion i feel for making data driven applications, extracting hidden insights from data through detailed analysis that solves a buisness problem is exactly what i live for
      </div>
    </CustomImageListItem>

    <CustomImageListItem sx={{padding:"1rem"}}>
      <div>
      As being a self learner exploring new topics everyday and the thought of gaining expertise in the field of data science is the reason
      </div>
    </CustomImageListItem>

   

    <CustomImageListItem  sx={{padding:"1rem",transform: "perspective(1000px) rotateX(-11.56deg) rotateY(-16.65deg) scale3d(1, 1, 1)"}}>
      <div>
      In-depth Knowledge of Machine learning algorithms , Data Cleaning, Data Visualization, Feature Engineering, Predictive Modeling and Statistical Analysis. "Currently Exploring More about Deep learning and various neural networks."
      </div>
    </CustomImageListItem>
    
    <ImageListItem  sx={{backgroundColor:"",padding:"1rem",transform: "perspective(1000px) rotateX(-11.56deg) rotateY(16.65deg) scale3d(1, 1, 1)"}}>
      <div>
        A MERN STACK DEVELOPER with expericnece in building full stack apps.I know React, MongoDB, Express, Node, MATERIAL UI
      </div>
    </ImageListItem>


    {/* animation */}
    <ImageListItem sx={{padding:"1rem"}}>
      <div>
        <Lottie animationData={goDownWhite}></Lottie>
      </div>
    </ImageListItem>

</ImageList>
  )
}
