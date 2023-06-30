import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Grid, Typography } from "@mui/material"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 16px; /* Adjust the desired spacing value */
`;

function PayFee() {
  const handleSubmit = event => {
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
          <StyledTextField
            label="Student ID"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            label="Amount"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            label="Description"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Pay Fee
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default PayFee;

