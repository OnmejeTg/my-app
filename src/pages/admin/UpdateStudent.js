import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentId = queryParams.get("student_id");

  const [student, setStudent] = useState({});
  const [stdClass, setStdClass] = useState([]);
  const [formData, setFormData] = useState({
    surname: "",
    othernames: "",
    sex:"",
    dateofBirth: null,
    dateofAdmission: null,
    selectedClass: "",
    parentSurname: "",
    parentOthernames: "",
    parentPhone: "",
    parentAddress: "",
    parentEmail: "",
    parentOccupation: "",
  });

  useEffect(() => {
    // Fetch class data
    fetch("http://127.0.0.1:8000/setup/get-class")
      .then((response) => response.json())
      .then((data) => setStdClass(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch student data
    fetch(`http://127.0.0.1:8000/student/get-student/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
        setFormData({
          surname: data.surname,
          othernames: data.othernames,
          sex: data.sex,
          dateofBirth: data.date_of_birth,
          dateofAdmission: data.year_of_admission,
          selectedClass: data.class_id.id,
          parentSurname: data.parent_surname,
          parentOthernames: data.parent_othernames,
          parentPhone: data.parent_phone,
          parentAddress: data.parent_address,
          parentEmail: data.parent_email,
          parentOccupation: data.parent_occupation,
        });
      })
      .catch((error) => console.log(error));
  }, [studentId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/student/update-student/${student.id}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        navigate(`/view-student/${student.admission_id}`);
      } else {
        toast.error("Failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed. Please try again.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Student Details
      </Typography>
      <Grid container spacing={2}>
        {[
          { label: "Surname", name: "surname" },
          { label: "Other Names", name: "othernames" },
          { label: "Sex", name: "sex" },
          // Add more fields
        ].map((field) => (
          <Grid item xs={12} key={field.name}>
            <TextField
              label={field.label}
              variant="outlined"
              fullWidth
              value={formData[field.name]}
              name={field.name}
              onChange={handleChange}
              required
            />
          </Grid>
        ))}

        {/* Date of Birth */}
        <Grid item xs={12}>
          <Stack>
            <label htmlFor="text-input">Date of Birth:</label>
            <StyledInput
              type="date"
              value={formData.dateofBirth}
              name="dateofBirth"
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* Date of Admission */}
        <Grid item xs={12}>
          <Stack>
            <label htmlFor="text-input">Date of Admission:</label>
            <StyledInput
              type="date"
              value={formData.dateofAdmission}
              name="dateofAdmission"
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* Class */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.selectedClass}
              name="selectedClass"
              label="Age"
              onChange={handleChange}
            >
              {stdClass?.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* Parent Details */}
        {[
          { label: "Parent Surname", name: "parentSurname" },
          { label: "Parent Other Names", name: "parentOthernames" },
          { label: "Parent Phone", name: "parentPhone" },
          { label: "Parent Address", name: "parentAddress" },
          { label: "Parent Email", name: "parentEmail" },
          { label: "Parent Occupation", name: "parentOccupation" },
        ].map((field) => (
          <Grid item xs={12} key={field.name}>
            <TextField
              label={field.label}
              variant="outlined"
              fullWidth
              value={formData[field.name]}
              name={field.name}
              onChange={handleChange}
              required
            />
          </Grid>
        ))}

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
