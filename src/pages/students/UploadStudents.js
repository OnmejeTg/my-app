import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, Typography, Input } from "@mui/material";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const UploadStudents = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const handleUpload = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(selectedFile);

    if (selectedFile) {
      const formData = new FormData();
      formData.append("excel_file", selectedFile);

      const headers = new Headers();
      headers.append('Accept', 'application/json');

      fetch("http://127.0.0.1:8000/student/upload", {
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
        Upload Students
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
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
  );
};

export default UploadStudents;
