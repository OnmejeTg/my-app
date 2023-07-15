import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Grid, Typography } from "@mui/material"

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
    // Handle form submission here
    console.log(selectedFile);

    if (selectedFile) {
      const formData = new FormData();
      formData.append("scores", selectedFile);

      const headers = new Headers();
      headers.append('Accept', 'application/json');

      fetch("http://127.0.0.1:8000/result/upload-scores", {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response:", data);
          // Handle the response data here
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error here
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
          <input
            type="file"
            accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={(event) => setSelectedFile(event.target.files[0])}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Upload
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  )
}

export default UploadAssessment
