import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, Typography, Input, InputLabel } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const UploadAssessment = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("scores", selectedFile);

      const headers = new Headers();
      headers.append("Accept", "application/json");

      fetch("http://127.0.0.1:8000/result/upload-scores", {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Response:", data);
          toast.success("Upload Successful.");
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Upload failed.");
        });
      setSelectedFile(null);
    }
  };

  return (
    <FormContainer onSubmit={handleUpload}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Scores
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel htmlFor="file-input">Select score file</InputLabel>
          <Input
            fullWidth
            variant="outlined"
            type="file"
            id="file-input"
            onChange={(event) => setSelectedFile(event.target.files[0])}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Upload
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default UploadAssessment;
