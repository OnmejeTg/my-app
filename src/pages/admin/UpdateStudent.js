import { useEffect, useState } from "react";
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
} from "@mui/material";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;
const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const UpdateStudent = () => {
  // const student_id = "CK-23-00001";
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentId = queryParams.get("student_id");

  const [student, setStudent] = useState({});
  const [surname, setSurname] = useState("");
  const [othernames, setOthernames] = useState("");
  const [stdClass, setStdClass] = useState([]);
  const [parentSurname, setParentSurname] = useState("");
  const [parentOthernames, setParentOthernames] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentAddress, setParentAddress] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentOccupation, setParentOccupation] = useState("");
  const [dateofBirth, setDateofBirth] = useState(null);
  const [dateofAdmission, setDateofAdmission] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/setup/get-class")
      .then((response) => response.json())
      .then((data) => setStdClass(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch data from API
    fetch(`http://127.0.0.1:8000/student/get-student/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setSurname(data.surname);
        setDateofBirth(data.date_of_birth);
        setOthernames(data.othernames);
        setParentAddress(data.parent_address);
        setParentEmail(data.parent_email);
        setParentOccupation(data.parent_occupation);
        setParentOthernames(data.parent_othernames);
        setParentPhone(data.parent_phone);
        setParentSurname(data.parent_surname);
        setSelectedClass(data.class_id.id);
        setDateofAdmission(data.year_of_admission);
      })
      .catch((error) => console.log(error));
  }, [studentId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    if (true) {
      const formData = new FormData();
      // formData.append("profile_pics", imageToSend);
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
      // formData.append("sex", sex);

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/student/update-student/${student.id}`,
          {
            method: "PUT",

            body: formData,
          }
        );

        if (response.ok) {
          // File submitted successfully
          toast.success("Updated Successfully!");
          
        } else {
          // Handle error response
          
          toast.error("Failed. Please try again.");
        }
      } catch (error) {
        // Handle network error
        console.error("Network error:", error);
        toast.error("Failed. Please try again.");
      }
    }
  };
  
  console.log(student);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Student Details
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
          <Stack>
            <label htmlFor="text-input">Date of Birth:</label>
            <StyledInput
              type="date"
              value={dateofBirth}
              onChange={(e) => setDateofBirth(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <label htmlFor="text-input">Date of Admission:</label>
            <StyledInput
              type="date"
              value={dateofAdmission}
              onChange={(e) => setDateofAdmission(e.target.value)}
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
            Update
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default UpdateStudent;
