import { onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref } from "firebase/database";
import "./viewBookings.css";
import { fireBaseDataBase } from "../../fireBase/fireBaseHandler";
import UserCard from "../../Components/UserCard";
import { Button, Typography } from "@mui/material";

function ViewBookings() {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();
  const [airLine,setAirline] = useState();
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    const databaseRef = ref(
      fireBaseDataBase,
      `flights/${params.id}/passengers`
    );
    onValue(databaseRef, (snapshot) => {
      setUsers(Object.values(snapshot.val()));
    });
    const airLineRef = ref(
      fireBaseDataBase,
      `flights/${params.id}/airline`
    );
    onValue(airLineRef, (snapshot) => {
      setAirline(snapshot.val());
    });
  }, []);

  return (
    <div className="view-container">
      <div className="header">
        <p></p>
        <Typography sx={{ margin: 5, textAlign: "center",color: "white" }} variant="h4">
          Bookings for {airLine}
        </Typography>
        <Button variant="contained" onClick={() => nav("/")}>
          Home
        </Button>
      </div>
      <div className="cards">
        {users.map((user, index) => {
          return <UserCard key={index} user={user}></UserCard>;
        })}
      </div>
    </div>
  );
}

export default ViewBookings;
