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
  }, []);

  return (
    <div>
      <div className="header">
        <p></p>
        <Typography sx={{ margin: 5, textAlign: "center" }} variant="h4">
          Bookings
        </Typography>
        <Button variant="contained" onClick={() => nav("/")}>
          Home
        </Button>
      </div>

      {users.map((user, index) => {
        return <UserCard key={index} user={user}></UserCard>;
      })}
    </div>
  );
}

export default ViewBookings;
