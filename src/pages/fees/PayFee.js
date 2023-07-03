import { useState } from "react";
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
  Stack,
} from "@mui/material";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;
const PayFee = () => {
  const [studentId, setStudentId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here

    setStudentId("");
    setAmount("");
    setDescription("");
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
            value={studentId}
            variant="outlined"
            onChange={(event) => {
              setStudentId(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Amount"
            value={amount}
            variant="outlined"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="sex-label">Description</InputLabel>
            <Select
              labelId="sex-label"
              id="sex"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            >
              <MenuItem value="sch fee">School fee</MenuItem>
              <MenuItem value="pta">PTA levy</MenuItem>
              <MenuItem value="sports">Sport levy</MenuItem>
              <MenuItem value="ict">ICT fee</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>

        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Pay
          </StyledButton>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default PayFee;
