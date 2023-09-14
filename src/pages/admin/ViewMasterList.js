import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  Grid,
  Button,
  Typography,
  TextField
} from "@mui/material";
import styled from "styled-components";
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const ViewMasterList = () => {
  const [classData, setClassData] = useState([])
  const [selectedClass, setSelectedClass] = useState("")
  const [isButtonDisabled, setButtonDisabled] = useState(false)



const handleSubmit = ()=>{
  setButtonDisabled(true);

  axios.post(
    "/result/master-sheet",
    {
      class_id: 1,
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      responseType: "blob",
    }
    
  )
  .then(response => {
    
    const blob = new Blob([response.data]); // Use response.data to get the blob
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `result.json`;
    document.body.appendChild(link);
    link.click();

    link.parentNode.removeChild(link);
    // toast.success("Successful!");
  })
  .then((blob) =>{
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.download = `result.json`;
    document.body.appendChild(link);
    link.click();

    link.parentNode.removeChild(link);
    // toast.success("Successful!");

  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
  
}
  return (
    <div className="container-fluid">
      <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Student Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Student ID"
            value=""
            variant="outlined"
            onChange={(event) => {
              setSelectedClass(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        

        <Grid item xs={12}>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "Download"}
          </StyledButton>
        </Grid>
      </Grid>
      {/* <ToastContainer /> */}
    </FormContainer>
    </div>
  )
}

export default ViewMasterList
