import React from "react";
import { Grid, Button, Typography, TextField } from "@mui/material"
// import { DatePicker } from "@material-ui/lab";
import styled from "styled-components";
import DateSelector from "../../components/DateSelector";
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;


const StyledButton = styled(Button)`
  margin-top: 16px;
`;

function AddStudent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Student Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Surname"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Other Names"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <DateSelector
          text="Date of Birth"
          />
          
        </Grid>
        <Grid item xs={12}>
        <DateSelector
          text="Date of Admission"
          required/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Surname"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Phone"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Address"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Other Names"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Occupation"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Register
          </StyledButton>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default AddStudent;
