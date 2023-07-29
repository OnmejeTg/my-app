import { useState } from "react";
import styled from "styled-components";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const PrintResult = () => {
  const [student, setStudent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/result/print-result";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: student,
      }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.download = "result.pdf";
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);

        // Display success notification
        toast.success("Payment successful!");

        setStudent("");
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
          <StyledButton type="submit" variant="contained" color="primary">
            Download
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default PrintResult;
