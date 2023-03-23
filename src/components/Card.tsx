import React from "react";
import { Card as CardComponent } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { ICard } from "../models/component/Card";

const Card = (props: ICard) => {
  return (
    <CardComponent className="mb-4" sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="flex items-center justify-between">
          <Typography
            className="font-bold text-lg"
            color="text.secondary"
            gutterBottom
          >
           {props.title}
          </Typography>
          <div className="flex space-x-2 items-center">
            <Typography
              className="font-bold text-lg mb-0"
              color="text.secondary"
              gutterBottom
            >
              {props.star}
            </Typography>
            <StarIcon />
          </div>
        </div>
        <Typography          
          color="text.secondary"
          gutterBottom
        >
          {props.description}
        </Typography>
      </CardContent>
    </CardComponent>
  );
};

export default Card;
