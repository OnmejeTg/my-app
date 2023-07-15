import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const PayFee = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentId = queryParams.get("student_id");

  const [student, setStudent] = useState(studentId || "");
  const [portalFees, setPortalFees] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/fee/get-fees")
      .then((response) => response.json())
      .then((data) => setPortalFees(data.results))
      .catch((error) => console.log(error));
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/fee/pay";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fee_type: description,
        student: student,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display success notification
        toast.success("Payment successful!");

        setStudent("");
        setDescription("");
      })
      .catch((error) => {
        // Handle error and display error notification
        toast.error("Payment failed. Please try again.");
        console.log(error);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Student Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Student ID"
            value={student}
            variant="outlined"
            onChange={(event) => {
              setStudent(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Description</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={description}
              label="Description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            >
              {portalFees.length > 0 ? (
                portalFees.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name} ({item.amount})
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---Select Description---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Pay
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer /> 
    </FormContainer>
  );
};

export default PayFee;
