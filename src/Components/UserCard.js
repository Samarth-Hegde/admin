import React from "react";
import "./UserCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./FlightCard.css";
import { useNavigate } from "react-router-dom";

function UserCard(props) {
  const nav = useNavigate();
  return (
    <div>
      <Card sx={{ maxWidth: "100vw" }}>
        <CardContent>
          <Typography
            sx={{ color: "#0b8f2c" }}
            gutterBottom
            variant="h3"
            component="div"
          >
            {props.user.name}
          </Typography>
          <div className="sec">
            <Typography sx={{ color: "rebeccapurple" }} variant="h5">
              Gender :
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {props.user.gender}
            </Typography>
          </div>
          <div className="sec">
            <Typography sx={{ color: "rebeccapurple" }} variant="h5">
              Phone :
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {props.user.phone}
            </Typography>
          </div>
          <div className="sec">
            <Typography sx={{ color: "rebeccapurple" }} variant="h5">
              Email :
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {props.user.email}
            </Typography>
          </div>
          </CardContent>
      </Card>
    </div>
  );
}

export default UserCard;
