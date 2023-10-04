import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Box,styled,Typography,Avatar,Stack,Grid} from '@mui/material'
import close from './assets/close.jpg'
import Lottie from 'lottie-react'
import { useEffect} from 'react';
import {TimelineComponent} from './components/TimelineMui'
import { ImageListMui } from './components/ImageListMui';
import VanillaTilt from 'vanilla-tilt'
import { ProjectCard } from './components/ProjectCard';
import { AboutCard } from './components/AboutCard';
import Aos from 'aos';
import 'aos/dist/aos.css'
import goDownMouseWhite from './assets/animations/goDownMouseWhite.json'
import logo512 from './assets/logo512.png'
import theme from './theme';
import BasicAccordion from './components/Accordian';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
  },
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
          <Typography data-aos={'fade'} data-aos-delay={1800} gutterBottom variant='h3' fontWeight={300}>Full stack developer/Data Scientist</Typography>
          <Typography data-aos={'fade'} data-aos-delay={2000} variant='h5' mt={3} fontWeight={200}>Developed and Launched my own Social Media</Typography>
          <Typography  variant='h6' fontWeight={900} color={"white"}><a style={{color:"white",textDecoration:"none"}} target='_blank' href='https://stangchat.com'>StangChat - A genz social media platform</a></Typography>
          {/* <Button variant='contained'>Know More</Button> */}
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
                    <TimelineComponent/>
                  </Box>
            </Stack>

            {/* about cards  */}
          <Stack flex={1.4} spacing={2}>
              
            {/* <AboutCard heading={'Introduction'} animation={'fade'} delay={0} content={"Hello, I'm Rishi, a seasoned data scientist and software developer with over 2 years of hands-on experience in the world of data-driven solutions. My journey in this dynamic field has taken me through every stage of the data science lifecycle, from raw data to actionable insights. Let me take you through my diverse skill set and accomplishments"}/>  
            <AboutCard heading={'Data Science Expertise'} animation={'fade'} delay={0} content={"I excel in the meticulous art of data wrangling, transforming raw and messy data into structured gold. My proficiency in data cleaning and pre-processing ensures that every project begins with a solid foundation. Through exploratory data analysis (EDA), I unravel hidden patterns, outliers, and correlations that inform the direction of the project."}/>
            <AboutCard heading={"Feature Engineering and Modeling"} animation={'fade'} delay={0} content={"Crafting meaningful features is my forte. I specialize in innovative feature transformations and extractions that elevate model performance. My statistical modeling skills enable me to build predictive models that capture the essence of the underlying data distribution. I'm no stranger to the intricacies of hyperparameter tuning, ensuring that my models are finely tuned for optimal performance"}/>
            <AboutCard heading={"Project Portfolio"} animation={'fade'} delay={0} content={"I've conceptualized, developed, and deployed a range of end-to-end projects that showcase my capabilities. From a sophisticated movie recommendation system and sentiment analysis tool to practical solutions like laptop price prediction and student performance forecasting, I've turned complex concepts into user-friendly applications."}/>
            <AboutCard heading={"Versatile Software Developer"} animation={'fade'} delay={0} content={"My skills extend beyond data science. I possess a deep understanding of HTML, CSS, and JavaScript, enabling me to craft interactive and visually appealing front-end experiences. My proficiency in React and React Material-UI (MUI) ensures that user interfaces are modern, intuitive, and responsive."}/>
            <AboutCard heading={"Backend Mastery"} animation={'fade'} delay={0} content={"In the backend realm, I'm well-versed in a variety of technologies, including Flask, Django, and Express. I seamlessly integrate these frameworks to bring life to my applications. My expertise extends to databases like MongoDB, MySQL, and PostgreSQL, ensuring that data storage and retrieval are efficient and secure."}/>
            <AboutCard heading={"AI and Deep Learning"} animation={'fade'} delay={0} content={`I've delved into the world of deep learning and neural networks, harnessing the power of AI for complex tasks. My grasp of neural network architectures empowers me to tackle intricate problems, from image recognition to natural language processing. My passion for data-driven insights, combined with my proficiency in software development, has shaped me into a well-rounded professional. I thrive on challenges, relentlessly pursuing excellence in every project I undertake. Whether it's extracting knowledge from data, crafting elegant user interfaces, or implementing robust backend systems, I'm always eager to explore new horizons and create meaningful solutions.`}/>
            <AboutCard heading={"Open For Collaborations"} animation={'fade'} delay={0} content={"Let's collaborate to turn ideas into reality. Feel free to reach out for discussions, collaborations, or just a friendly chat about the ever-evolving landscape of data science and technology. Feel free to personalize and adjust the content according to your actual experiences and preferences."}/> */}


            <AboutCard animation={"fade"} heading={'Introduction'} content={` I'm Rishi Bakshi, a versatile software developer who specializes in crafting full-stack applications, mobile apps, and data-driven solutions. With over 2 years of hands-on experience, I'm deeply passionate about the world of technology. From creating captivating user interfaces to diving into the realms of data science, machine learning, artificial intelligence, and deep learning, I'm dedicated to building innovative solutions that make a difference. My journey is marked by a relentless pursuit of knowledge, coding incessantly, and creating something new every day.`}/>
            <AboutCard heading={'Data Science Expertise'} content={`In the realm of data science, I possess a wide skill set that includes machine learning algorithms, deep learning neural networks, and natural language processing. My expertise in these areas allows me to tackle complex data-driven challenges effectively.`}/>
              {/* <AboutCard heading={'What Makes me versatile'}/> */}
            
            <Box sx={{padding:'2rem 4vw'}} data-aos={'fade-up'}>
              <Typography variant='h2'>What Makes me Versatile</Typography>
            </Box>
            
            <AboutCard heading={"Full Stack Development"} content={`I have a strong command of full-stack development, allowing me to create complex web applications with user-friendly and modern interfaces. My skills cover both the front-end and back-end aspects, ensuring a seamless and interactive user experience.`}/>
            <AboutCard heading={'React Native Proficiency'} content={`I'm well-versed in React Native, enabling me to develop mobile applications that run smoothly on various platforms. This versatility across web and mobile development positions me to tackle a wide range of projects effectively.`}/>
            <Typography data-aos={'fade-down'} paddingTop={3} fontWeight={100} variant='h1'>Take A look at my projects🎉</Typography>
          </Stack>

          
          


      </AboutSection>

        <ProjectSection>

              <Box>
                {/* <Typography gutterBottom mt={15} variant='h2' fontWeight={900} data-aos={'fade'}>My Latest Work</Typography> */}
              </Box>
              <Box justifySelf={'center'} alignSelf={'center'}>
                <Typography gutterBottom mt={25} variant='h1' fontWeight={300} data-aos={'fade-down'}>Full Stack Web applications</Typography>
              </Box>

              <Stack mt={15} width={"100%"} direction={'column'} justifyContent={'space-evenly'} alignItems={'center'}>

                {/* logo area */}
                <Stack justifyContent={'center'} alignItems={'center'} direction={'column'} data-aos={"fade-up"}>
                  <img height={'200px'} src={logo512} alt="stangchat Logo" />
                  <Typography mt={1} fontWeight={300} variant='h4'>StangChat</Typography>
                </Stack>

                {/* content part */}
                <Stack spacing={1} mt={5} bgcolor={theme.palette.primary.main} width={"100%"} justifySelf={'flex-start'} alignSelf={'flex-start'}>
                  {/* <Typography fontWeight={'600'} variant='h4'>What is StangChat?</Typography> */}
                  <BasicAccordion data-aos={"fade-up"} heading={'What is StangChat'} content={`StangChat is an innovative social media platform that I had the privilege to develop and found. It's a comprehensive full-stack web application that leverages Flask for its robust backend and React for an intuitive frontend user experience`}/>
                  


                  <Accordion  sx={{bgcolor:theme.palette.secondary.main,color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{"color":'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5' fontWeight={400}>Authentication</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack variant='h6' fontWeight={400} direction={'column'} spacing={3}>

            <Typography variant='h6'>
                  "StangChat relies on JSON Web Tokens (JWT) for secure user authentication. Here's how it works, with the added role of middleware"
            </Typography>

            <Stack>
              <Typography variant='h6' gutterBottom fontWeight={500}>1. JWT Authentication</Typography>
                <Typography variant='h6' fontWeight={'300'}>
                    Upon login, StangChat generates a JWT token, including user information, and sends it to the user's browser. This token is securely stored in an HTTP-only cookie.
                </Typography>
            </Stack>

            <Stack>
                <Typography variant='h6' gutterBottom fontWeight={500}>2. Middleware Verification:</Typography>
                <Typography variant='h6' fontWeight={'300'}>
                     With each incoming request, a middleware component plays a pivotal role. It intercepts the request before it reaches the endpoint. The middleware checks the token's authenticity using a secret key.
                </Typography>
            </Stack>

            <Stack>
                <Typography variant='h6' gutterBottom fontWeight={500}>3. Token Validation</Typography>
                <Typography variant='h6' fontWeight={'300'}>
                      If the token is valid and hasn't expired, the middleware allows the request to proceed to the endpoint. This means the user is authenticated and can access the requested resource.
                </Typography>
            </Stack>

            <Stack>
                <Typography variant='h6' gutterBottom fontWeight={500}>4. Immediate Redirection:</Typography>
                <Typography variant='h6' fontWeight={'300'}>
                    If the token is invalid or has expired, the middleware promptly redirects the user to the login screen. This ensures that only authenticated users can access StangChat's features, enhancing security.
              </Typography>
            </Stack>

            <Stack>
              <Typography variant='h6' gutterBottom fontWeight={500}>5. Enhanced Security:</Typography> 
              <Typography variant='h6' fontWeight={'300'}>
                The middleware layer adds an extra layer of security, preventing unauthorized access to StangChat's endpoints. It also ensures that users remain protected throughout their session.
              </Typography>
            </Stack>
           
            <Typography variant='h6'>
                In summary, StangChat's authentication process combines JWT tokens, browser cookies, and middleware to provide secure and efficient user authentication. The middleware's role is critical in verifying token authenticity, allowing legitimate users access while swiftly redirecting unauthorized users to the login screen."
            </Typography>

          </Stack>
        </AccordionDetails>
      </Accordion>

      <BasicAccordion heading={'Unlimited Posting'} content={`With StangChat, you can freely express yourself by creating and sharing posts. Whether through captivating stories, memorable photos, or thought-provoking text, your voice knows no limits. Post an unlimited number of videos, photos, and text effortlessly, ensuring your creativity shines through in various engaging formats.`}></BasicAccordion>
      <BasicAccordion heading={'Real-time Post Likes Update'} content={`StangChat offers instant gratification with real-time updates when someone likes your post. This feature not only adds an element of excitement but also fosters a sense of connection with your audience. Plus, the like count increases in real-time as you and others appreciate the post, making the experience even more engaging and dynamic.`}/>
      <BasicAccordion heading={"Who Liked Your Posts"} content={"Transparency is central to StangChat. By simply clicking on the like count, you can easily view the list of users who have appreciated your posts. This not only enables you to connect with your audience but also provides valuable insights into what resonates with them, fostering a more meaningful and interactive experience."}/>
      <BasicAccordion heading={"Commenting on Posts"} content={`StangChat makes it simple to engage in conversations by commenting on posts. Join discussions, interact with others, and be part of a dynamic community where ideas flow, stories are shared, and connections thrive.`}/>
      <BasicAccordion heading={"Comment Likes and Real-time Updates"} content={`Express appreciation for insightful comments with the ability to like them. Real-time updates ensure that you stay in the loop as others appreciate your contributions. You can also see who has liked your comments, enhancing the sense of connection.`}/>    
      <BasicAccordion heading={"Giphy Integration in Comments"} content={`Spice up your conversations with Giphy integration in comments. Add a touch of humor or express your emotions with a wide array of GIFs to choose from.`}/>
      <BasicAccordion heading={'Follow and Unfollow User Functionality'} content={`Tailor your StangChat experience by following users whose content you find interesting or inspiring. The unfollow feature allows you to curate your feed and stay connected with what matters most to you.`}/>
      <BasicAccordion heading={"Explore Page"} content={`Discover new content and expand your horizons with the Explore Page. Here, you can explore a diverse range of public posts, making it easy to find fresh perspectives and engage with a broader community.`}/>
      <BasicAccordion heading={'One-on-One Chat Functionality'} content={`StangChat values personal connections. With one-on-one chat functionality, you can have private conversations with other users, fostering genuine relationships within the community.`}/>
      <BasicAccordion heading={"Smart Chat Sorting"} content={"StangChat enhances your chat experience with intelligent sorting. Chats are ranked based on unread messages, ensuring that the conversations you need to catch up on are always at the top of your chat section. This feature streamlines your interactions and helps you stay organized."}/>
      <BasicAccordion heading={"Deployment on AWS Elastic Beanstalk"} content={"StangChat is hosted on AWS Elastic Beanstalk, a scalable and easy-to-manage Platform as a Service (PaaS) solution. This deployment choice ensures the platform's reliability and scalability, accommodating user growth and maintaining optimal performance."}/>
      <BasicAccordion heading={'CI/CD Pipeline with AWS CodePipeline'} content={"To streamline the development process and ensure consistent quality, I've set up a Continuous Integration and Continuous Deployment (CI/CD) pipeline using AWS CodePipeline, seamlessly integrated with GitHub. This automation framework simplifies code changes, testing, and deployment, reducing manual interventions and minimizing the risk of errors. The integration with GitHub allows for efficient code versioning and management, making it easier to collaborate with other developers and maintain codebase integrity."}/>
      <BasicAccordion heading={'Domain Integration via AWS Route 53'} content={`For a professional online presence, I've connected a custom domain name, acquired from Hostinger, to the StangChat environment using AWS Route 53. This integration not only enhances the platform's branding but also ensures users can easily access the website with a memorable and recognizable web address.`}/>  
      <BasicAccordion heading={"Load Balancer for High Availability"} content={`StangChat benefits from the reliability and high availability provided by AWS Elastic Beanstalk's built-in load balancer. This load balancer distributes incoming traffic across multiple instances of the application, enhancing performance and fault tolerance.`}/>        
      </Stack>

                <Typography mt={5} variant='h6' fontWeight={400}>
        These features collectively create a dynamic, engaging, and user-centric environment on StangChat, where users can freely express themselves, connect with others, and discover content that resonates with their interests. StangChat is more than just a social media platform; it's a vibrant and interactive community that values user experiences and connections."
        </Typography>  

              </Stack>

              <Grid mt={10} container gap={4} justifyContent={'center'} alignContent={'center'}>
                {/* <ProjectCard name={'Todo Champion'} img={todochampion} desc={'TodoChamption is a full stack web application where an user can signup and make their todos and do the CRUD operations. It provides authenticated session with the help of json web tokens.'} deploymentLink={"https://todomern-5kz3.onrender.com/"} githubLink={"https://github.com/RishiBakshii/TodoChampion-Mern"}/> */}
                {/* <ProjectCard name={'Todo Champion'} img={todochampion} desc={'TodoChamption is a full stack web application where an user can signup and make their todos and do the CRUD operations. It provides authenticated session with the help of json web tokens.'} deploymentLink={"https://todomern-5kz3.onrender.com/"} githubLink={"https://github.com/RishiBakshii/TodoChampion-Mern"}/> */}
              </Grid>

              <Box justifySelf={'center'} alignSelf={'center'}>
                <Typography gutterBottom mt={25} variant='h1' fontWeight={300} data-aos={'fade'}>Machine Learning-Driven Solutions</Typography>
              </Box>

              <Grid mt={10} container gap={4} justifyContent={'center'} alignContent={'center'} data-aos={"fade-up"}>
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
