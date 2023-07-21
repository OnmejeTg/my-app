import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

function ComputeResult() {
  const [resCalcTotal, setResCalTotal] = useState("");
  const [resCalResult, setResCalResult] = useState("");
  // You can add your logic for the buttons here
  const handleComputeTotals = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/result/calc-total");
      const data = await response.json();
      setResCalTotal(data);
      console.log(resCalcTotal);
      toast.success("Totals computed successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed, Try again!");
    }
  };

  const handleComputePositions = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/result/calc-result");
      const data = await response.json();
      setResCalResult(data);
      console.log(resCalResult);
      toast.success("Position computed successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed, Try again!");
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" align="center">
        Compute Result
      </Typography>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleComputeTotals}
          style={{ margin: "10px" }}
        >
          Compute Totals
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleComputePositions}
          style={{ margin: "10px" }}
        >
          Compute Positions
        </Button>
      </Grid>
      <Typography
        variant="subtitle1"
        component="strong"
        align="center"
        color="textSecondary"
        style={{ paddingTop: "20px" }}
      >
        <b>INSTRUCTIONS</b>
        <br />
        Only compute results when scores have been vetted and approved<br/>
        After result is computed <b>changes</b> cannot be made.
        <br />
        Compute totals before computing positions
      </Typography>
      <ToastContainer /> 
    </Grid>
  );
}

export default ComputeResult;

