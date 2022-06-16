import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./FlightCard.css";
import { useNavigate } from "react-router-dom";

function FlightCard(props) {
  const nav = useNavigate();
  return (
    <Card sx={{ maxWidth: "100vw", margin: 5 }}>
      <CardContent>
        <Typography
          sx={{ color: "#0b8f2c" }}
          gutterBottom
          variant="h3"
          component="div"
        >
          {props.flightDetails.airline}
        </Typography>
        <div className="sec">
          <Typography sx={{ color: "rebeccapurple" }} variant="h5">
            Date :
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.flightDetails.date}
          </Typography>
        </div>
        <div className="sec">
          <Typography sx={{ color: "rebeccapurple" }} variant="h5">
            Arrival :
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.flightDetails.arrTime}
          </Typography>
        </div>
        <div className="sec">
          <Typography sx={{ color: "rebeccapurple" }} variant="h5">
            Departure :
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.flightDetails.depTime}
          </Typography>
        </div>
        <div className="sec">
          <Typography sx={{ color: "rebeccapurple" }} variant="h5">
            Boarding Point :
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.flightDetails.brdPoint}
          </Typography>
        </div>
        <div className="sec">
          <Typography sx={{ color: "rebeccapurple" }} variant="h5">
            Destination :
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.flightDetails.destination}
          </Typography>
        </div>
        <div className="sec">
          <Typography sx={{ color: "rebeccapurple" }} variant="h5">
            Cost :
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ₹ {props.flightDetails.cost}
          </Typography>
        </div>
        <Button
          onClick={() => nav(`view-bookings/${props.id}`)}
          variant="contained"
        >
          View passenger list
        </Button>
      </CardContent>
    </Card>
  );
}

export default FlightCard;
