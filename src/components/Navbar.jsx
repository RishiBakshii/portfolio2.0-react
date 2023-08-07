import React, { useState } from 'react'
import {AppBar, Toolbar,styled,Typography,Stack,Button,useMediaQuery,Box} from "@mui/material"
import theme from '../theme'
import MenuIcon from '@mui/icons-material/Menu';

const CustomToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:'space-around',
  alignItems:"center",
  padding:"2rem",
  height:"6rem",
  flexWrap:"wrap"
})

const NavLinks=styled(Typography)({
  cursor:"pointer",
  fontWeight:"500",
  fontSize:"1.1rem"
})

export const Navbar = () => {
  
  const [isOpen,setIsOpen]=useState(false)
  const notLargeScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  
  return (
    <AppBar position='sticky' sx={{backgroundColor:"black"}}>
        <CustomToolbar>
            <Typography variant='h5' fontWeight={800}>RishiBakshi</Typography>


            <Stack direction={'row'} spacing={7}>

            {notLargeScreen?(
              
              <>
              <Button color='buttonColors' onClick={()=>setIsOpen(!isOpen)}>
                    <MenuIcon sx={{zIndex:"1"}} fontSize='large'></MenuIcon>
              </Button>
              {
                isOpen?(
                  <Stack position={'fixed'} bgcolor={theme.palette.secondary.main} right={0} top={'5rem'} padding={'1rem'} width={"60vw"} justifyContent={'flex-start'} alignItems={"center"} height={"100vh"}>
                  <Stack mt={10} fontSize={"2rem"} justifyContent={'center'} alignItems={'flex-start'} fontWeight={100}>

                  
                  <Typography mt={"4rem"} variant='h5'>Home</Typography>
                  <Typography mt={"4rem"} variant='h5'>About</Typography>
                  <Typography mt={"4rem"} variant='h5'>Projects</Typography>
                  <Typography  mt={"4rem"}variant='h5'>Contact</Typography>
                  </Stack>
            </Stack>
                ):("")

              }
              
              </>
            ):(
            <>
            <NavLinks>Home</NavLinks>
            <NavLinks>About</NavLinks>
            <NavLinks>Projects</NavLinks>
            <NavLinks>Contact</NavLinks>
            </>

            )}
            
            </Stack>
        </CustomToolbar>
    </AppBar>
  )
}
