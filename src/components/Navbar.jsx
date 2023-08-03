import React from 'react'
import {AppBar, Toolbar,styled,Typography,Stack,Button} from "@mui/material"


const CustomToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around",
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
  return (
    <AppBar position='sticky' sx={{backgroundColor:"black"}}>
        <CustomToolbar>
            <Typography variant='h5' fontWeight={800}>RishiBakshi</Typography>
            <Stack direction={'row'} spacing={7}>
            <NavLinks variant='p'>Home</NavLinks>
            <NavLinks variant='p'>About</NavLinks>
            <NavLinks variant='p'>Projects</NavLinks>
            <NavLinks variant='p'>Contact</NavLinks>
            </Stack>
        </CustomToolbar>
    </AppBar>
  )
}
