import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Box,styled,Typography,Avatar,ImageList,ImageListItem} from '@mui/material'
import photo from './assets/photo.png'
import back from './assets/back.svg'
import maybe from './assets/maybe.jpg'
import close from './assets/close.jpg'
import Lottie from 'lottie-react'
import {motion,useInView,useAnimate} from 'framer-motion'
import { useEffect, useRef } from 'react';
import about from './assets/about.svg'
import goDownAnimation from './assets/animations/goDownAnimation.json'



const MainSection=styled('main')({
  width:"100vw",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
})

const HomeSection=styled('section')({
  backgroundColor:"black",
  color:"white",
  width:"100vw",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexWrap:"wrap",
  height:"52rem",
})


const ContentBox=styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  flex:1
})

const AboutSection=styled("section")({
  width:"100%",
  height:"50rem",
  backgroundImage:`url(${about})`,
  backgroundRepeat:"no-repeat",
  aspectRatio:"900/600",
  backgroundSize:"cover",
  display:'flex',
  justifyContent:"center",
  alignItems:"flex-start"
})

const RightBox=styled(Box)({
  backgroundColor:"black",
  flex:.3,
  height:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  padding:'1rem',
  scrollBehavior:"smooth",
})


function App() {

  const ref=useRef(null);

  const isInView=useInView(ref,{once:true})

  useEffect(()=>{
  },[isInView])

  return (
    <>
    <Navbar/>

    <MainSection>

      <HomeSection>
        <ContentBox>
          <Avatar  alt="RishiBakshi-photo" src={`${close}`} sx={{width:"10rem",height:"10rem",marginBottom:"2rem",boxShadow:"0 0 1rem 1px white"}}/>
          <Typography variant='h2' fontWeight={900}>Hello I'm RishiBakshi</Typography>
          <Typography gutterBottom variant='h2' fontWeight={300}>A Full stack developer/Data Scientist</Typography>


        </ContentBox>

        <RightBox>
          <Box>
            <ImageList variant="quilted"  gap={10}>
          
            <ImageListItem sx={{backgroundColor:"",padding:"1rem"}}>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ullam perferendis voluptate provident quasi nisi est molestias odit fuga, nihil asperiores. Consequuntur ipsum explicabo, similique blanditiis dignissimos voluptas nulla pariatur?
              </div>
            </ImageListItem>
            <ImageListItem sx={{backgroundColor:"",padding:"1rem"}}>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ullam perferendis voluptate provident quasi nisi est molestias odit fuga, nihil asperiores. Consequuntur ipsum explicabo, similique blanditiis dignissimos voluptas nulla pariatur?
              </div>
            </ImageListItem>
            <ImageListItem sx={{backgroundColor:"",padding:"1rem"}}>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ullam perferendis voluptate provident quasi nisi est molestias odit fuga, nihil asperiores. Consequuntur ipsum explicabo, similique blanditiis dignissimos voluptas nulla pariatur?
              </div>
            </ImageListItem>
            <ImageListItem sx={{backgroundColor:"",padding:"1rem"}}>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ullam perferendis voluptate provident quasi nisi est molestias odit fuga, nihil asperiores. Consequuntur ipsum explicabo, similique blanditiis dignissimos voluptas nulla pariatur?
              </div>
            </ImageListItem>
            <ImageListItem sx={{backgroundColor:"",padding:"1rem"}}>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ullam perferendis voluptate provident quasi nisi est molestias odit fuga, nihil asperiores. Consequuntur ipsum explicabo, similique blanditiis dignissimos voluptas nulla pariatur?
              </div>
            </ImageListItem>
            <ImageListItem sx={{backgroundColor:"",padding:"1rem"}}>
              <div>
                <Lottie animationData={goDownAnimation}></Lottie>
              </div>
            </ImageListItem>

        </ImageList>
          </Box>
        




        </RightBox>

      </HomeSection>

      {/* <AboutSection>
        <Typography mt={2} variant='h4' fontWeight={"400"}>Know About me</Typography>
      </AboutSection> */}

    </MainSection>
    

    

    <Footer/>
    </>
  );
}

export default App;
