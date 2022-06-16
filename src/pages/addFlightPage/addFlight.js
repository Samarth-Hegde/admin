import React, { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { ref, push } from "firebase/database";
import { fireBaseDataBase } from "../../fireBase/fireBaseHandler";
import "./addFlight.css";
import { useNavigate } from "react-router-dom";

function AddFlight() {
  const nav = useNavigate();
  const [flightDetails, setFlightDetails] = useState({
    airline: null,
    date: null,
    depTime: null,
    arrTime: null,
    brdPoint: null,
    destination: null,
    cost: null,
  });

  const [airline, setAirline] = useState(false);
  const [date, setDate] = useState(false);
  const [depTime, setDepTime] = useState(false);
  const [arrTime, setArrTime] = useState(false);
  const [brdPoint, setBrdPoint] = useState(false);
  const [destination, setDestination] = useState(false);
  const [cost, setCost] = useState(false);
  const [timeValidator, setTimeValidator] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFlightDetails({ ...flightDetails, [name]: value });
  };

  const handleClick = async () => {
    console.log(timeValidator);
    if (validate_from()) {
      const databaseRef = ref(fireBaseDataBase, `flights`);
      await push(databaseRef, { ...flightDetails, occupancy: 10 });
      let navigator = window.confirm(
        "Flight Added do you want to add another flight?"
      );
      if (!navigator) {
        nav("/");
      }
    }
  };

  const validate_from = () => {
    let flag = true;
    if (!flightDetails.airline) {
      setAirline("Choose an airline");
      flag = false;
    } else {
      setAirline(true);
    }
    if (!flightDetails.date) {
      setDate("Choose a date");
      flag = false;
    } else {
      setDate(true);
    }
    if (!flightDetails.depTime) {
      setDepTime("Choose the departure time");
      flag = false;
    } else {
      setDepTime(true);
    }
    if (!flightDetails.arrTime) {
      setArrTime("Choose the arrival time");
    } else {
      setArrTime(true);
    }
    if (flightDetails.arrTime > flightDetails.depTime) {
      setTimeValidator("Arrival Time should be lesser than departure time");
      flag = false;
    } else {
      setTimeValidator(true);
    }
    if (!flightDetails.brdPoint) {
      setBrdPoint("Enter the boarding point");
      flag = false;
    } else {
      setBrdPoint(true);
    }
    if (!flightDetails.destination) {
      setDestination("Enter the destination");
      flag = false;
    } else {
      setDestination(true);
    }
    if (!flightDetails.cost) {
      setCost("Enter the cost");
      flag = false;
    } else {
      setCost(true);
    }
    if (flag === true) {
      return true;
    }
  };
  return (
    <div className="wrapper">
      <div className="header">
        <p></p>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: 3, color: "white" }}
        >
          Add Flight
        </Typography>
        <Button onClick={() => nav("/")} variant="contained">
          Home
        </Button>
      </div>

      <div className="addFlight-container">
        <div className="dropdown">
          <InputLabel id="demo-simple-select-label">Airline</InputLabel>
          {airline && <p>{airline}</p>}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Airline"
            name="airline"
            value={flightDetails.airline}
            onChange={handleChange}
            sx={{ width: 600, margin: "auto ", marginBottom: 5 }}
          >
            <MenuItem value={"Qatar Airways"}>Qatar Airways</MenuItem>
            <MenuItem value={"Singapore Airlines"}>Singapore Airlines</MenuItem>
            <MenuItem value={"Emirates"}>Emirates</MenuItem>
            <MenuItem value={"Japan Airlines"}>Japan Airlines</MenuItem>
            <MenuItem value={"IndiGo"}>IndiGo</MenuItem>
            <MenuItem value={"Air India"}>Air India</MenuItem>
            <MenuItem value={"SpiceJet"}>SpiceJet</MenuItem>
            <MenuItem value={"Go First"}>Go First</MenuItem>
          </Select>
        </div>
        <div className="flights-form">
          <div className="flights-form-element">
            <InputLabel sx={{ marginBottom: 1 }} id="demo-simple-select-label">
              Date
            </InputLabel>
            {date && <p>{date}</p>}
            <TextField
              value={flightDetails.date}
              InputProps={{
                inputProps: {
                  min: new Date().toISOString().slice(0, 10),
                },
              }}
              id="outlined-basic"
              variant="outlined"
              type="date"
              name="date"
              sx={{ marginBottom: 5, width: 300 }}
              onChange={handleChange}
            />
          </div>
          <div className="flights-form-element">
            <InputLabel sx={{ marginBottom: 1 }} id="demo-simple-select-label">
              Departure Time
            </InputLabel>
            {depTime && <p>{depTime}</p>}
            {timeValidator && <p>{timeValidator}</p>}
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="time"
              name="depTime"
              value={flightDetails.depTime}
              sx={{ marginBottom: 5, width: 300 }}
              onChange={handleChange}
            />
          </div>
          <div className="flights-form-element">
            <InputLabel sx={{ marginBottom: 1 }} id="demo-simple-select-label">
              Arrival time
            </InputLabel>
            {arrTime && <p>{arrTime}</p>}
            {timeValidator && <p>{timeValidator}</p>}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="arrTime"
              value={flightDetails.arrTime}
              type="time"
              sx={{ marginBottom: 5, width: 300 }}
              onChange={handleChange}
            />
          </div>
          <div className="flights-form-element">
            <InputLabel sx={{ marginBottom: 1 }} id="demo-simple-select-label">
              Boarding Point
            </InputLabel>
            {brdPoint && <p>{brdPoint}</p>}
            <TextField
              id="outlined-basic"
              label="Boarding Point"
              value={flightDetails.brdPoint}
              variant="outlined"
              name="brdPoint"
              sx={{ marginBottom: 5, width: 300 }}
              onChange={handleChange}
            />
          </div>
          <div className="flights-form-element">
            <InputLabel sx={{ marginBottom: 1 }} id="demo-simple-select-label">
              Destination
            </InputLabel>
            {destination && <p>{destination}</p>}
            <TextField
              id="outlined-basic"
              label="Destination"
              variant="outlined"
              value={flightDetails.destination}
              name="destination"
              sx={{ marginBottom: 5, width: 300 }}
              onChange={handleChange}
            />
          </div>
          <div className="flights-form-element">
            <InputLabel sx={{ marginBottom: 1 }} id="demo-simple-select-label">
              Cost
            </InputLabel>
            {cost && <p>{cost}</p>}
            <TextField
              type="number"
              id="outlined-basic"
              label="Cost"
              variant="outlined"
              value={flightDetails.cost}
              name="cost"
              sx={{ marginBottom: 5, width: 300 }}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          sx={{ marginBottom: 2 }}
          onClick={handleClick}
          variant="contained"
        >
          Add Flight
        </Button>
      </div>
    </div>
  );
}

export default AddFlight;
