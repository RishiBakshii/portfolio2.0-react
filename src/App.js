import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Box,styled,Typography,Avatar,ImageList,ImageListItem,Stack} from '@mui/material'
import photo from './assets/photo.png'
import back from './assets/back.svg'
import maybe from './assets/maybe.jpg'
import close from './assets/close.jpg'
import Lottie from 'lottie-react'
import {motion,useInView,useAnimate} from 'framer-motion'
import { useEffect, useRef } from 'react';
import about from './assets/about.svg'
import goDownAnimation from './assets/animations/goDownAnimation.json'
import { TimelineMui } from './components/TimelineMui';
import { ImageListMui } from './components/ImageListMui';
import VanillaTilt from 'vanilla-tilt'



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
  padding:"1rem"
})


const ContentBox=styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  flex:1,
  // backgroundColor:"green"
})


const RightBox=styled(Box)({
  flex:.3,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  padding:'1rem',
  height:"100%",
})

const AboutSection=styled("section")({
  width:"100%",
  display:'flex',
  justifyContent:'flex-start',
  alignItems:"flex-start",
  backgroundColor:"#191919",
  color:"white",
  flexDirection:"row",
  padding:"2rem 15vw"
})


const ProjectSection=styled('section')({
  width:"100%",
  display:'flex',
  justifyContent:'flex-start',
  alignItems:"flex-start",
  backgroundColor:"black",
  color:"white",
  flexDirection:"row",
  padding:"2rem 15vw",
  height:"40rem"
})


function App() {

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.1,
      });
},[])
  return (
    <>
    <Navbar/>

    <MainSection>

      <HomeSection>

        <ContentBox>
          <Avatar className='card'  alt="RishiBakshi-photo" src={`${close}`} sx={{width:"10rem",height:"10rem",marginBottom:"2rem",boxShadow:"0 0 1rem 1px white"}}/>
          <Typography  variant='h2' fontWeight={900}>Hello I'm RishiBakshi</Typography>
          <Typography  gutterBottom variant='h2' fontWeight={300}>A Full stack developer/Data Scientist</Typography>                
        </ContentBox>


        <RightBox>
            <ImageListMui/>
        </RightBox>

      </HomeSection>

        <AboutSection>

          <Stack flex={1} justifyContent={'flex-start'} alignItems={"flex-start"}>

          <Typography gutterBottom mt={15} variant='h3' fontWeight={900}>Know About Me</Typography>

          <Box>
            <TimelineMui/>
          </Box>
          </Stack>

          <Stack bgcolor={'#000000'} borderRadius={".8rem"} box flex={1} height={'100%'} padding={4}>

              <Typography lineHeight={'1.8rem'} fontSize={'1.2rem'} variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et quae illo incidunt provident. Et eos recusandae dolore officiis illum fugit accusantium sit at aperiam ab quis corporis ex atque, sint voluptate obcaecati quibusdam rem natus saepe. Quas excepturi odit minus! Esse veniam, laudantium saepe modi et, doloremque enim nemo eaque, mollitia provident adipisci eos officiis consequuntur. Ex illo tempore dignissimos accusantium fugiat ipsum ad in, reprehenderit obcaecati beatae nobis, veniam amet, alias odit. Expedita, porro consequatur at enim dolorem laborum, eligendi quia non dicta incidunt autem dolores itaque ratione, placeat iste consequuntur corporis error iure ducimus minima quos corrupti modi explicabo! Recusandae quam deleniti dolorem assumenda mollitia dicta delectus, minus optio rerum consectetur, labore voluptatibus! Excepturi ipsa assumenda odit quia praesentium voluptatum quaerat optio tenetur! Sit animi ullam expedita ad suscipit voluptatum, aut, aperiam saepe blanditiis sed reprehenderit dolorem eveniet! Debitis tempora eveniet placeat. Fugiat consectetur quas itaque tenetur quaerat similique recusandae natus atque amet error ducimus nam accusamus veritatis rem hic, neque nobis. Illum commodi distinctio quis porro odit qui quidem magni quaerat numquam, aperiam beatae nam autem ea expedita reprehenderit repellendus. Ut, a corporis rem quibusdam laudantium accusamus ipsam corrupti. Tempore blanditiis porro placeat ullam pariatur, error velit amet, beatae eveniet sit architecto ducimus, iusto ad tempora totam debitis nemo consequuntur? Excepturi perspiciatis veritatis obcaecati, exercitationem laboriosam tempore labore, nesciunt quo ullam suscipit animi esse? Eum recusandae sunt ipsam modi earum! Saepe ducimus minus dolor laboriosam, earum dignissimos impedit enim fuga non numquam? Quasi, vero consequatur. Non ipsam temporibus molestias. Optio animi labore, eveniet quas tenetur provident deserunt incidunt earum adipisci quam! Rerum obcaecati consequuntur libero assumenda, a ratione. Officiis magnam aperiam temporibus laudantium nisi exercitationem iste tenetur! Explicabo accusamus esse exercitationem praesentium rerum maiores voluptates deserunt pariatur molestiae ipsum aliquid vel incidunt, sapiente totam soluta ea?</Typography>
          </Stack>

          


        </AboutSection>

        <ProjectSection>
            <Typography gutterBottom mt={15} variant='h3' fontWeight={900}>My Latest Work</Typography>


        </ProjectSection>




{/* 
      <AboutSection>
        <Typography mt={2} variant='h4' fontWeight={"400"}>Know About me</Typography>
      </AboutSection> */}

    </MainSection>
    

    

    <Footer/>
    </>
  );
}

export default App;
