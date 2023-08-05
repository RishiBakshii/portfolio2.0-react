import React from 'react'
import { Stack,Box,Button ,Typography} from '@mui/material'
import styled from '@emotion/styled'
import { Instagram,GitHub ,LinkedIn} from '@mui/icons-material'


const CustomFooter=styled('footer')({
  width:"100%",
  color:"white",
  padding:"2rem 8rem",
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center",
  backgroundColor:"#191919",
  flexWrap:"wrap"
})

export const Footer = () => {
  return (
    <CustomFooter>

      <Stack justifyContent={'space-between'} spacing={5} alignItems={'flex-start'}>
        <Stack spacing={.7}>
            <Typography gutterBottom variant='h6'>Connect With Me✅</Typography>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<Instagram/>}>rishibakshi</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<GitHub/>}>RishiBakshii</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<LinkedIn/>}>rishibakshi</Button>
        </Stack>

        <Stack spacing={.7}>
            <Typography gutterBottom variant='h6'>My Socials</Typography>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<Instagram/>}>rishibakshi</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<GitHub/>}>RishiBakshii</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<LinkedIn/>}>rishibakshi</Button>
        </Stack>
      </Stack>
    

      <Stack justifyContent={'space-between'} spacing={5} alignItems={'flex-start'}>
        <Stack spacing={.7}>
            <Typography gutterBottom variant='h6'>My Socials</Typography>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<Instagram/>}>rishibakshi</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<GitHub/>}>RishiBakshii</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<LinkedIn/>}>rishibakshi</Button>
        </Stack>

        <Stack spacing={.7}>
            <Typography gutterBottom variant='h6'>My Socials</Typography>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<Instagram/>}>rishibakshi</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<GitHub/>}>RishiBakshii</Button>
            <Button sx={{textTransform:"none"}} variant='contained' startIcon={<LinkedIn/>}>rishibakshi</Button>
        </Stack>
      </Stack>


    </CustomFooter>
  )
}
