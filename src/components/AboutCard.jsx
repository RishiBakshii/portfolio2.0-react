import React, { useEffect } from "react";

import { Box, styled,Typography } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css'

const CustomComponent = styled(Box)({
  padding: "2.2rem",
  backgroundColor: "black",
  color: "white",
  borderRadius: ".8rem",
});

export const AboutCard = ({ heading, content,animation,delay}) => {

    useEffect(()=>{      
          Aos.init({duration:800})
      },[])

  return (
    <CustomComponent data-aos={animation} data-aos-delay={delay}>
      <Typography gutterBottom variant="h3">
        {heading}
      </Typography>
      <Typography lineHeight={"1.8rem"} fontSize={"1.2rem"} variant="body1">
        {content}
      </Typography>
    </CustomComponent>
  );
};
