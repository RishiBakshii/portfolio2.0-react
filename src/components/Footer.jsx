import React from 'react'
import { Stack,Button ,Typography} from '@mui/material'
import styled from '@emotion/styled'
import { Instagram,GitHub ,LinkedIn} from '@mui/icons-material'


const CustomFooter=styled('footer')({
  width:"100vw",
  color:"white",
  padding:"2rem 8rem",
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center",
  backgroundColor:"#191919",
  flexWrap:"wrap",

})

export const Footer = () => {
  return (
    <CustomFooter>
      
      <Stack flexWrap={'wrap'} width={"100vw"} justifyContent={"space-around"} alignItems={'flex-start'} direction={'row'}>
      <Stack justifyContent={'center'} spacing={5} alignItems={'flex-start'}>

        <Stack>
            <Typography gutterBottom variant='h6'>Connect With Me</Typography>
            <Button href='https://www.instagram.com/rishibakshii/' target='_blank' sx={{textTransform:"none"}} color='buttonColors' variant='outlined' startIcon={<Instagram/>}>rishibakshi</Button>
            <Button href='https://github.com/RishiBakshii'  target="_blank" sx={{textTransform:"none"}} color='buttonColors' variant='outlined' startIcon={<GitHub/>}>RishiBakshii</Button>
            <Button href='https://www.linkedin.com/in/rishi-bakshi-75b224271/'   target="_blank" sx={{textTransform:"none"}} color='buttonColors' variant='outlined' startIcon={<LinkedIn/>}>rishibakshi</Button>
        </Stack>

        <Stack>
            <Typography gutterBottom variant='h6'>Email</Typography>
            <Typography variant='h6' fontWeight={300}>rishibakshiofficial@gmail.com</Typography>
        </Stack>

      </Stack>
    

      <Stack justifyContent={'space-between'} spacing={5} alignItems={'flex-start'} >
        <Stack>
            <Typography gutterBottom variant='h6'>Technologies Used</Typography>
            <Typography gutterBottom variant='p'>React</Typography>
            <Typography gutterBottom variant='p'>Material UI</Typography>
        </Stack>

        <Stack>
          <Typography variant='p'>Made With heart ❤️ by RishiBakshi</Typography>
        </Stack>
      </Stack>
      </Stack>

    </CustomFooter>
  )
}
