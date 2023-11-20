import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Grid, Typography, Input, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Signature = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [grade, setGrade] = useState("");
  const [stdClass, setStdClass] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [classID, setClassID] = useState("");

  useEffect( () => {
    // Fetch class data
    axios
      .get("/setup/get-class")
      .then((response) => setStdClass(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClassChange = (event) => {
    setClassID(event.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    // const formDataToSend = new FormData();
    // formDataToSend.append("signature", selectedFile);
    // formDataToSend.append("grade", classID);

    const formDataToSend = new FormData();
    formDataToSend.append('signature', selectedFile)
    formDataToSend.append('grade', classID)

    try {
      await axios.post("setup/upload-signature", formDataToSend);
      // Handle success or display a toast message
      toast.success("Signature uploaded successfully");
    } catch (error) {
      // Handle error or display an error toast
      toast.error("Error uploading signature");
    }
  };

  return (
    <FormContainer onSubmit={handleUpload}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Signature
      </Typography>
      <Grid container spacing={2}>
        
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="class-select-label">Class</InputLabel>
            <Select
              labelId="class-select-label"
              value={classID}
              name="class_id"
              label="Class"
              onChange={handleClassChange}
            >
              {stdClass?.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Input
            type="file"
            fullWidth
            accept=".jpg, .png, .jpeg, JPEG"
            onChange={handleFileChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>
            {isButtonDisabled ? "Processing..." : "Upload"}
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default Signature;
