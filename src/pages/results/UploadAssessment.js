import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Grid, Typography } from "@mui/material"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;


const UploadAssessment = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Perform upload logic with the selectedFile
    console.log(selectedFile);
    
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
            onChange={handleFileChange}
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
