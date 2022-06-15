import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { fireBaseAuth, fireBaseDataBase } from "../../fireBase/fireBaseHandler";
import FlightCard from "../../Components/FlightCard";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

function Homepage() {
  const [flightList, setFlightList] = useState([]);
  const [id, setId] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const dataBaseRef = ref(fireBaseDataBase, `flights`);
    onValue(
      dataBaseRef,
      (snapshot) => {
        setFlightList(Object.values(snapshot.val()));
        setId(Object.keys(snapshot.val()));
      },
      { onlyOnce: true }
    );
  }, []);
  const handleNav = () => {};
  return (
    <div className="flights-container">
      <div className="header">
        <p></p>
        <Typography sx={{ textAlign: "center", margin: "50px" }} variant="h4">
          Flight List
        </Typography>
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          onClick={() => nav("/add-flight")}
        >
          Add Flight
        </Button>
      </div>

      <div className="cards-container">
        {flightList.map((flight, index) => {
          return (
            <FlightCard
              onClick={handleNav}
              id = {id[index]}
              key={id[index]}
              flightDetails={flight}
            ></FlightCard>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
