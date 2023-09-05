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
  Input,
} from "@mui/material";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    surname: "",
    othernames: "",
    sex: "",
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
    axios
      .get("/setup/get-class")
      .then((response) => setStdClass(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch student data
    axios
      .get(`/student/get-student/${studentId}`)
      .then((response) => {
        setStudent(response.data);
        setFormData({
          surname: response.data.surname,
          othernames: response.data.othernames,
          sex: response.data.sex,
          dateofBirth: response.data.date_of_birth,
          dateofAdmission: response.data.year_of_admission,
          selectedClass: response.data.class_id.id,
          parentSurname: response.data.parent_surname,
          parentOthernames: response.data.parent_othernames,
          parentPhone: response.data.parent_phone,
          parentAddress: response.data.parent_address,
          parentEmail: response.data.parent_email,
          parentOccupation: response.data.parent_occupation,
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
      const response = await axios.put(
        `/student/update-student/${student.id}`,
        formDataToSend
      );

      if (response.status === 200) {
        navigate(`/view-student/${student.admission_id}`);
      } else {
        toast.error("Failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed. Please try again.");
    }
  };

  useEffect(() => {
    if (selectedFile !== null) {
      try {
        const response =  axios.put(
          `/student/update-student/${student.id}`, {}
          
        );
  
        if (response.status === 200) {
          navigate(`/view-student/${student.admission_id}`);
        } else {
          toast.error("Failed. Please try again.");
        }
      } catch (error) {
        console.error("Network error:", error);
        toast.error("Failed. Please try again.");
      }
      console.log(selectedFile);
    }
  }, [selectedFile]);

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
            Update
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default UpdateStudent;
