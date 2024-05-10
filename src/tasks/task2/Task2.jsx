import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Task2() {
  return (
    <div style={{width:"40vw"}}>
      <Card sx={{ minWidth: 275 }}></Card>
      <Card sx={{ minWidth: 275 }}></Card>
      <Card sx={{ minWidth: 275 }}></Card>
      <Card sx={{ minWidth: 275 }}></Card>
      <Button></Button>
      <Card  sx={{ display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography>Sum</Typography>
        <Typography>0</Typography>
      </Card>
    </div>
  );
}

export default Task2;
