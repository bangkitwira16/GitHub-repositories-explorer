import React from "react";
import { Accordion as AccordionComponent } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IAccordion } from "../models/component/Accordion";

const Accordion = (props: IAccordion) => {
  const changeAccordion = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    props.change(isExpanded, props.reposUrl);
  };

  return (
    <AccordionComponent
      className="mb-2"
      expanded={props.expanded}
      onChange={changeAccordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </AccordionComponent>
  );
};

export default Accordion;
