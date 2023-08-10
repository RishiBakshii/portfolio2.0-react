import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Box,styled,Typography,Avatar,Stack,Grid} from '@mui/material'
import close from './assets/close.jpg'
import Lottie from 'lottie-react'
import { useEffect} from 'react';
import { TimelineMui } from './components/TimelineMui';
import { ImageListMui } from './components/ImageListMui';
import VanillaTilt from 'vanilla-tilt'
import { ProjectCard } from './components/ProjectCard';
import { AboutCard } from './components/AboutCard';
import todochampion from './assets/projectImages/todochampion.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import goDownMouseWhite from './assets/animations/goDownMouseWhite.json'


const MainSection=styled('main')({
  width:"100vw",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
})

const HomeSection=styled('section')(({theme})=>({
  backgroundColor:theme.palette.primary.main,
  color:theme.palette.text.primary,
  width:"100vw",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexWrap:"wrap",
  height:"90vh",
  padding:"2vw 6vw",
}))


const ContentBox=styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  flex:1,
  padding:"0 3vw"
})


const RightBox=styled(Box)({
  flex:.5,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  padding:'1rem',
  height:"100%",
})

const AboutSection=styled("section")(({theme})=>({
  width:"100%",
  display:'flex',
  justifyContent:'flex-start',
  alignItems:"flex-start",
  backgroundColor:theme.palette.secondary.main,
  color:theme.palette.text.primary,
  flexDirection:"row",
  padding:"2rem 6vw",
  [theme.breakpoints.down("lg")]:{
    flexDirection:"column"
  }
}))

const ProjectSection=styled('section')(({theme})=>({
  width:"100%",
  display:'flex',
  justifyContent:'space-between',
  alignItems:"flex-start",
  backgroundColor:theme.palette.primary.main,
  color:theme.palette.text.primary,
  flexDirection:"column",
  padding:"2rem 8vw",
}))


function App() {
  // const notLargeDevice=useMediaQuery((theme)=>theme.breakpoints.down('lg'))

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.1,
      });

    Aos.init({duration:800})
},[])
  return (
    <>
    <Navbar/>

    <MainSection>

      <HomeSection>

        <ContentBox>
          <Avatar data-aos={'fade'} data-aos-delay={500}  alt="RishiBakshi-photo" src={`${close}`} sx={{ height:"10rem",width:"10rem",marginBottom:"2rem",boxShadow:"0 0 1rem 1px white"}}/>
          <Box textAlign={"center"}>
          <Typography data-aos={'fade'} data-aos-delay={1000} variant='h2'  fontWeight={900}>Hello I'm RishiBakshi</Typography>
          <Typography data-aos={'fade'} data-aos-delay={1800} gutterBottom variant='h3' fontWeight={300}>A Full stack developer/Data Scientist</Typography>
          </Box>                
          <Box sx={{display:{xl:"none"}}}>

          <Lottie data-aos={'fade'} data-aos-delay={3000} animationData={goDownMouseWhite}></Lottie>
          </Box>
        </ContentBox>


        <RightBox sx={{display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"}}}>
            <ImageListMui/>
        </RightBox>

      </HomeSection>

      <AboutSection>
            
            {/* heading */}
            <Stack flex={1}   justifyContent={'center'} alignItems={"center"}>

                <Typography data-aos={'fade'} gutterBottom mt={15} variant='h3' fontWeight={900}>Know About Me</Typography>

                  <Box data-aos='flip-left'> 
                    <TimelineMui/>
                  </Box>


            </Stack>

            {/* about cards  */}
          <Stack flex={1.4} spacing={2}>
              
            <AboutCard heading={'Introduction'} animation={'fade'} delay={0} content={"Hello, I'm Rishi, a seasoned data scientist and software developer with over 2 years of hands-on experience in the world of data-driven solutions. My journey in this dynamic field has taken me through every stage of the data science lifecycle, from raw data to actionable insights. Let me take you through my diverse skill set and accomplishments"}/>  
            <AboutCard heading={'Data Science Expertise'} animation={'fade'} delay={0} content={"I excel in the meticulous art of data wrangling, transforming raw and messy data into structured gold. My proficiency in data cleaning and pre-processing ensures that every project begins with a solid foundation. Through exploratory data analysis (EDA), I unravel hidden patterns, outliers, and correlations that inform the direction of the project."}/>
            <AboutCard heading={"Feature Engineering and Modeling"} animation={'fade'} delay={0} content={"Crafting meaningful features is my forte. I specialize in innovative feature transformations and extractions that elevate model performance. My statistical modeling skills enable me to build predictive models that capture the essence of the underlying data distribution. I'm no stranger to the intricacies of hyperparameter tuning, ensuring that my models are finely tuned for optimal performance"}/>
            <AboutCard heading={"Project Portfolio"} animation={'fade'} delay={0} content={"I've conceptualized, developed, and deployed a range of end-to-end projects that showcase my capabilities. From a sophisticated movie recommendation system and sentiment analysis tool to practical solutions like laptop price prediction and student performance forecasting, I've turned complex concepts into user-friendly applications."}/>
            <AboutCard heading={"Versatile Software Developer"} animation={'fade'} delay={0} content={"My skills extend beyond data science. I possess a deep understanding of HTML, CSS, and JavaScript, enabling me to craft interactive and visually appealing front-end experiences. My proficiency in React and React Material-UI (MUI) ensures that user interfaces are modern, intuitive, and responsive."}/>
            <AboutCard heading={"Backend Mastery"} animation={'fade'} delay={0} content={"In the backend realm, I'm well-versed in a variety of technologies, including Flask, Django, and Express. I seamlessly integrate these frameworks to bring life to my applications. My expertise extends to databases like MongoDB, MySQL, and PostgreSQL, ensuring that data storage and retrieval are efficient and secure."}/>
            <AboutCard heading={"AI and Deep Learning"} animation={'fade'} delay={0} content={`I've delved into the world of deep learning and neural networks, harnessing the power of AI for complex tasks. My grasp of neural network architectures empowers me to tackle intricate problems, from image recognition to natural language processing. My passion for data-driven insights, combined with my proficiency in software development, has shaped me into a well-rounded professional. I thrive on challenges, relentlessly pursuing excellence in every project I undertake. Whether it's extracting knowledge from data, crafting elegant user interfaces, or implementing robust backend systems, I'm always eager to explore new horizons and create meaningful solutions.`}/>
            <AboutCard heading={"Open For Collaborations"} animation={'fade'} delay={0} content={"Let's collaborate to turn ideas into reality. Feel free to reach out for discussions, collaborations, or just a friendly chat about the ever-evolving landscape of data science and technology. Feel free to personalize and adjust the content according to your actual experiences and preferences."}/>


            <Typography data-aos={'fade'} paddingTop={3} fontWeight={400} variant='h1'>Take A look at my projects🎉</Typography>
          </Stack>

          
          


      </AboutSection>

        <ProjectSection>

              <Box>

              <Typography gutterBottom mt={15} variant='h3' fontWeight={900} data-aos={'fade'}>My Latest Work - Mern Apps</Typography>
              </Box>

              <Grid mt={10} container gap={4} justifyContent={'center'} alignContent={'center'}>
                <ProjectCard name={'Todo Champion'} img={todochampion} desc={'TodoChamption is a full stack web application where an user can signup and make their todos and do the CRUD operations. It provides authenticated session with the help of json web tokens.'} deploymentLink={"https://todomern-5kz3.onrender.com/"} githubLink={"https://github.com/RishiBakshii/TodoChampion-Mern"}/>
              </Grid>

              <Box>

              <Typography gutterBottom mt={15} variant='h3' fontWeight={900} data-aos={'fade'}>Data Driven Apps- ML DL</Typography>
              </Box>

              <Grid mt={10} container gap={4} justifyContent={'center'} alignContent={'center'}>
                <ProjectCard name={"Movie Recommender System"} img={"https://github.com/RishiBakshii/Movie-Recommender-System/blob/main/backend/static/Images/ui%20image%201.png?raw=true"} desc={'Flickfinder -MovieMatch is a movie recommendation webapp where one can choose from a list of 5000 movies and based on selection this will recommend you 5 movies followed by their details and starcast'} githubLink={"https://github.com/RishiBakshii/Movie-Recommender-System"} deploymentLink={'https://github.com/RishiBakshii/Movie-Recommender-System'}/>
                <ProjectCard name={'Bike Price Prediction'} img={"https://rishibakshii.github.io/portfolio/assets/project-Covers/Your%20paragraph%20text%20(2).png"} desc={"A Flask Web application powered by XGBoost that predicts the prices of Bikes at an accuracy of 93%"} githubLink={"https://github.com/RishiBakshii/Bike-Price-Predictor"} deploymentLink={"https://bike-price-predictor.onrender.com/"}/>
                <ProjectCard name={'Laptop Price Predictor'} img={"https://rishibakshii.github.io/portfolio/assets/project-Covers/LAPTOP%20PRICE%20PREDICTOR.png"} desc={"A Flask Powered Web Application which predicts the price of a laptop based on different configurations"} githubLink={"https://github.com/RishiBakshii/Laptop-Price-Predictor"} deploymentLink={"https://laptop-price-predictor-plkk.onrender.com/"}/>
                <ProjectCard name={"Student performance predictor"} img={"https://rishibakshii.github.io/portfolio/assets/project-Covers/StudentExamPerformancePredictor.png"} desc={"Flask Powered web application that follows a formal structure of a data science project with modular programming and pipelines"} githubLink={"https://github.com/RishiBakshii/Student-Exam-Performance-Predictor"} deploymentLink={"https://github.com/RishiBakshii/Student-Exam-Performance-Predictor"}/>
              </Grid>



            

        </ProjectSection>


    </MainSection>
    

    

    <Footer/>
    </>
  );
}

export default App;
