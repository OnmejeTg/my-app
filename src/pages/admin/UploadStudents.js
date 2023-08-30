import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, Typography, Input } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const UploadStudents = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false)

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const handleUpload = (event) => {
    event.preventDefault();
    // Handle form submission here
    // console.log(selectedFile);
    setButtonDisabled(true)
    setInterval(() => {
      setButtonDisabled(false)
    }, 1500);

    if (selectedFile) {
      const formData = new FormData();
      formData.append('excel_file', selectedFile);

      const headers = {
        'Accept': 'application/json',
      };

      axios.post('/student/upload', formData, { headers })
        .then(response => {
          if (response.status === 201) {
            return response.data;
          } else {
            throw new Error('Upload failed');
          }
        })
        .then(data => {
          if (data.status === 'success') {
            toast.success(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          toast.error(`${error.message}`);
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
          <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>
            {isButtonDisabled ? "Processing..." :"Upload" }
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default UploadStudents;
