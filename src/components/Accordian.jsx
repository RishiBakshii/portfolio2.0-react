import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../theme';

export default function BasicAccordion({heading,content}) {
  return (
    <>
      <Accordion  sx={{bgcolor:theme.palette.secondary.main,color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{"color":'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5' fontWeight={400}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6' fontWeight={400}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}