import React, { useState } from "react";
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
  const [surname, setSurname] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [sex, setSex] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [designation, setDesignation] = useState("");
  const [appType, setAppType] = useState("");
  const [appDate, setAppDate] = useState(null);
  const [gradeInCharge, setGradeInCharge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitted:", {
      surname,
      otherNames,
      dateOfBirth,
      sex,
      phoneNumber,
      address,
      email,
    });

    // Clear form fields
    setSurname("");
    setOtherNames("");
    setDateOfBirth(null);
    setSex("");
    setPhoneNumber("");
    setAddress("");
    setEmail("");
    setAppDate(null)
    setQualification("")
    setDiscipline("")
    setAppType("")
    setDesignation("")
    setGradeInCharge("")
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
            value={surname}
            onChange={(event) => {
              setSurname(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="other-names"
            label="Other Names"
            value={otherNames}
            onChange={(event) => {
              setOtherNames(event.target.value);
            }}
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
            <InputLabel id="sex-label">Sex</InputLabel>
            <Select
              labelId="sex-label"
              id="sex"
              value={sex}
              onChange={(event) => {
                setSex(event.target.value);
              }}
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
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="address"
            label="Address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="email"
            label="Email (optional)"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="qualification-label">
              Highest Qaulification
            </InputLabel>
            <Select
              labelId="qualification-label"
              id="qualification"
              value={qualification}
              onChange={(event) => {
                setQualification(event.target.value);
              }}
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
            value={discipline}
            onChange={(event) => {
              setDiscipline(event.target.value);
            }}
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
            <InputLabel id="appType-label">Appointment Type</InputLabel>
            <Select
              labelId="appType-label"
              id="appType"
              value={appType}
              onChange={(event) => {
                setAppType(event.target.value);
              }}
            >
              <MenuItem value="permanent">Permanent</MenuItem>
              <MenuItem value="temporal">Temporal</MenuItem>
              <MenuItem value="nysc">NYSC</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="designation-label">Designation</InputLabel>
            <Select
              labelId="designation-label"
              id="designation"
              value={designation}
              onChange={(event) => {
                setDesignation(event.target.value);
              }}
            >
              <MenuItem value="teaching">Teaching staff</MenuItem>
              <MenuItem value="admin">Admin staff</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="grade-label">Grade in Charge</InputLabel>
            <Select
              labelId="grade-label"
              id="grade"
              value={gradeInCharge}
              onChange={(event) => {
                setGradeInCharge(event.target.value);
              }}
            >
              <MenuItem value="jss1">Junior Sec 1</MenuItem>
              <MenuItem value="jss2">Junior Sec 1</MenuItem>
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
