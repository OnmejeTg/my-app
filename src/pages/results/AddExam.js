import React, { useState, useEffect } from "react";
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

const AddExam = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    // Fetch data from API
    const classId = 1;

    fetch(`http://127.0.0.1:8000/setup/get-class-courses/${classId}`)
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch data from API
    const classId = 1;

    fetch(`http://127.0.0.1:8000/student/student-by-class/${classId}`)
      .then((response) => response.json())
      .then((data) => setStudents(data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    event.preventDefault();
    fetch("http://127.0.0.1:8000/result/add-exam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "score": score,
        "student": selectedStudent,
        "course": selectedCourse
      }),
    })
    // console.log("Submitted:", selectedStudent, selectedCourse, score);

    // Clear form fields
    setSelectedStudent("");
    setSelectedCourse("");
    setScore("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Exam Details
      </Typography>
      <Grid container spacing={2}>
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
    </FormContainer>
  );
};

export default AddExam;
