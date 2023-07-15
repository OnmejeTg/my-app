import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  Input,
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
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/setup/get-class")
      .then((response) => response.json())
      .then((data) => setStdClass(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
// TODO:set default image
    const getDefaultImage = () => {
      // Return your default image here
      // For example, you can provide a URL or import a default image from your project
      console.log("../../../public/default.png")
    };

    const imageToSend = selectedFile ? selectedFile : getDefaultImage();

    if (imageToSend) {
      console.log(imageToSend);
      const formData = new FormData();
      formData.append("profile_pics", imageToSend);
      formData.append("surname", surname);
      formData.append("othernames", othernames);
      formData.append("date_of_birth", dateofBirth);
      formData.append("year_of_admission", dateofAdmission);
      formData.append("parent_surname", parentSurname);
      formData.append("parent_othernames", parentOthernames);
      formData.append("parent_phone", parentPhone);
      formData.append("parent_address", parentAddress);
      formData.append("parent_email", parentEmail);
      formData.append("parent_occupation", parentOccupation);
      formData.append("class_id", selectedClass);
      formData.append("sex", sex);

      try {
        const response = await fetch("http://127.0.0.1:8000/student/add", {
          method: "POST",
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
          body: formData,
        });

        if (response.ok) {
          // File submitted successfully
          toast.success("Student added!");
          console.log("File submitted");
        } else {
          // Handle error response
          console.error("Error submitting file");
          toast.error("Failed. Please try again.");
        }
      } catch (error) {
        // Handle network error
        console.error("Network error:", error);
        toast.error("Failed. Please try again.");
      }
    }
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
    setSelectedFile(null);
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
          <InputLabel htmlFor="file-input">Select Passport</InputLabel>
          <Input
            fullWidth
            variant="outlined"
            type="file"
            id="file-input"
            onChange={(event) => setSelectedFile(event.target.files[0])}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Register
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
}

export default AddStudent;
