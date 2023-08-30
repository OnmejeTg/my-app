import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import axios from "../../api/axios";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 16px; /* Adjust the desired spacing value */
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const AddStaff = () => {
  const [grade, setGrade] = useState([])
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [appDate, setAppDate] = useState(null);
  const intialFormData = {
    surname:"",
    otherNames:"",
    sex:"",
    phoneNumber:"",
    email:"",
    qualification:"",
    discipline:"",
    designation:"",
    appType:"",
    gradeInCharge:"",
  }

  const [formData, setFormData] = useState(intialFormData)

  useEffect(() => {
    // Fetch data from API
    axios.get("/setup/get-class")
      .then((response) => setGrade(response.data.results))
      .catch((error) => console.log(error));
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData)

    // Clear form fields
   
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Staff
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledTextField
            id="surname"
            label="Surname"
            value={formData.surname}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="other-names"
            label="Other Names"
            value={formData.otherNames}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <DatePicker
              label="Date of Birth"
              value={dateOfBirth}
              onChange={(newValue) => {
                setDateOfBirth(newValue);
              }}
              format="DD/MM/YYYY"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="sex">Sex</InputLabel>
            <Select
              label="sex"
              id="sex"
              value={formData.sex}
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="phone-number"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="email"
            label="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="qualification">
              Highest Qaulification
            </InputLabel>
            <Select
              label="highest qualification"
              id="qualification"
              value={formData.qualification}
              onChange={handleChange}
            >
              <MenuItem value="masters">Masters</MenuItem>
              <MenuItem value="degree">Degree</MenuItem>
              <MenuItem value="hnd">Hnd</MenuItem>
              <MenuItem value="nd">ND</MenuItem>
              <MenuItem value="nce">NCE</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="email"
            label="Discipline"
            value={formData.discipline}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <DatePicker
              label="Date of Appointment"
              value={appDate}
              onChange={(newValue) => {
                setAppDate(newValue);
              }}
              format="DD/MM/YYYY"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="Appointment-Type">Appointment Type</InputLabel>
            <Select
              label="Appointment-Type"
              id="Appointment-Type"
              value={formData.appType}
              onChange={handleChange}
            >
              <MenuItem value="permanent">Permanent</MenuItem>
              <MenuItem value="temporal">Temporal</MenuItem>
              <MenuItem value="nysc">NYSC</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="designation">Designation</InputLabel>
            <Select
              label="designation"
              id="designation"
              value={formData.designation}
              onChange={handleChange}
            >
              <MenuItem value="teaching">Teaching staff</MenuItem>
              <MenuItem value="admin">Admin staff</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="grade-in-charge">Grade in Charge</InputLabel>
            <Select
              label="grade-in-charge"
              id="grade"
              value={formData.gradeInCharge}
              onChange={handleChange}
            >
              {grade?.map((item)=>(
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
              
              {/* <MenuItem value="jss2">Junior Sec 1</MenuItem> */}
            </Select>
          </StyledFormControl>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Staff
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default AddStaff;
