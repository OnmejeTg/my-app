import { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
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

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

function AddStudent() {
  const [sex, setSex] = useState("");
  const [surname, setSurname] = useState("");
  const [othernames, setOthernames] = useState("");
  const [stdClass, setStdClass] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [parentSurname, setParentSurname] = useState("");
  const [parentOthernames, setParentOthernames] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentAddress, setParentAddress] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentOccupation, setParentOccupation] = useState("");
  const [dateofBirth, setDateofBirth] = useState(null);
  const [dateofAdmission, setDateofAdmission] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/setup/get-class")
      .then((response) => response.json())
      .then((data) => setStdClass(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here

    fetch("http://127.0.0.1:8000/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        surname: surname,
        othernames: othernames,
        date_of_birth: dateofBirth,
        year_of_admission: dateofAdmission,
        parent_surname: parentSurname,
        parent_othernames: parentOthernames,
        parent_phone: parentPhone,
        parent_address: parentAddress,
        parent_email: parentEmail,
        parent_occupation: parentOccupation,
        class_id: selectedClass,
        sex: sex,
      }),
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

    
    // clear form
    setSex("");
    setSurname("");
    setOthernames("");
    setParentSurname("");
    setParentOthernames("");
    setParentPhone("");
    setParentAddress("");
    setParentEmail("");
    setParentOccupation("");
    setDateofBirth(null);
    setDateofAdmission(null);
    setSelectedClass("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Student Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Surname"
            value={surname}
            variant="outlined"
            onChange={(event) => {
              setSurname(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Other Names"
            variant="outlined"
            fullWidth
            value={othernames}
            onChange={(event) => {
              setOthernames(event.target.value);
            }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sex</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="Age"
              onChange={(event) => {
                setSex(event.target.value);
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <DatePicker
              label="Date of Birth"
              value={dateofBirth}
              onChange={(newValue) => {
                setDateofBirth(newValue.format("YYYY-MM-DD"));
              }}
              format="YYYY-MM-DD"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <DatePicker
              label="Date of Admission"
              value={dateofAdmission}
              onChange={(newValue) => {
                setDateofAdmission(newValue.format("YYYY-MM-DD"));
              }}
              format="YYYY-MM-DD"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedClass}
              label="Age"
              onChange={(event) => {
                setSelectedClass(event.target.value);
              }}
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
          <TextField
            label="Parent Surname"
            variant="outlined"
            fullWidth
            value={parentSurname}
            onChange={(event) => {
              setParentSurname(event.target.value);
            }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Other Names"
            variant="outlined"
            fullWidth
            value={parentOthernames}
            onChange={(event) => {
              setParentOthernames(event.target.value);
            }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Phone"
            variant="outlined"
            fullWidth
            value={parentPhone}
            onChange={(event) => {
              setParentPhone(event.target.value);
            }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Address"
            variant="outlined"
            fullWidth
            value={parentAddress}
            onChange={(event) => {
              setParentAddress(event.target.value);
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Parent Email"
            type="email"
            variant="outlined"
            fullWidth
            value={parentEmail}
            onChange={(event) => {
              setParentEmail(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Parent Occupation"
            variant="outlined"
            fullWidth
            value={parentOccupation}
            onChange={(event) => {
              setParentOccupation(event.target.value);
            }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Register
          </StyledButton>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default AddStudent;
