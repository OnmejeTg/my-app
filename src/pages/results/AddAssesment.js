import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const assessmentTypes = [
  { value: "ass1", label: "First Assessment" },
  { value: "ass2", label: "Second Assessment" },
  { value: "exam", label: "Exam" },
];

const assessmentURLs = {
  ass1: "http://127.0.0.1:8000/result/add-assessment",
  ass2: "http://127.0.0.1:8000/result/add-second-assessment",
  exam: "http://127.0.0.1:8000/result/add-exam",
};

const AddAssessment = () => {
  const [students, setStudents] = useState([]);
  const [assessmentType, setAssessmentType] = useState("")
  const [selectedStudent, setSelectedStudent] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [score, setScore] = useState("");

// Define a custom hook to fetch data from an API
const useFetch = (url, setData) => {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [url, setData]);
};

// Use the custom hook to fetch data for courses and students
const classId = 1;
useFetch(`http://127.0.0.1:8000/setup/get-class-courses/${classId}`, setCourses);
useFetch(`http://127.0.0.1:8000/student/student-by-class/${classId}`, setStudents);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the URL from the map based on the assessment type
    let url = assessmentURLs[assessmentType];
    // Check if the URL is valid
    if (!url) {
      toast.error("Invalid assessment type.");
      return;
    }
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: score,
        student: selectedStudent,
        course: selectedCourse,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Assessment added!");
       
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed. Please try again.");
        
      });
  
    setSelectedCourse("");
    setScore("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Assessment Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="demo-simple-select-label">
              Assessment Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={assessmentType}
              label="Assessment Type"
              onChange={(event) => setAssessmentType(event.target.value)}
            >
              {assessmentTypes.map((item)=>(
                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
              ))}
      
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Student</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedStudent}
              label="Student"
              onChange={(event) => setSelectedStudent(event.target.value)}
            >
              {students.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.surname} {item.othernames}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="subject-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCourse}
              label="Course"
              onChange={(event) => setSelectedCourse(event.target.value)}
            >
              {courses.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Score"
            value={score}
            variant="outlined"
            onChange={(event) => setScore(event.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Add Score
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default AddAssessment;
