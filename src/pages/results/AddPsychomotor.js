import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

const ratings = [
  { id: "1", value: "Very Poor" },
  { id: "2", value: "Poor" },
  { id: "3", value: "Fair" },
  { id: "4", value: "Good" },
  { id: "5", value: "Very Good" },
];

const AddPsychomotor = () => {
  const [students, setStudents] = useState([]);
  const [psychomotor, setPsychomotor] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedPsychomotor, setSelectedPsychomotor] = useState("");
  const [rating, setRating] = useState("");

  const useFetch = (url, setData) => {
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }, [url, setData]);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/result/list-psychomotor")
      .then((response) => response.json())
      .then((data) => setPsychomotor(data.results))
      .catch((error) => console.log(error));
  }, [setPsychomotor]);

  // Use the custom hook to fetch data for courses and students
  const classId = 1;
  useFetch(
    `http://127.0.0.1:8000/student/student-by-class/${classId}`,
    setStudents
  );
  const data = {
    rating: rating,
    student: selectedStudent,
    psycho_affective: selectedPsychomotor
  };
  console.log(selectedPsychomotor)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/result/add-psychomotor", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("SKill Added Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed. Please try again.");
      });
    setSelectedPsychomotor("");
    setRating("");
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Psychomotor Details
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
              {students.length > 1 ? (
                students.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.admission_id}: {item.surname} {item.othernames}
                  </MenuItem>
                ))
              ) : (
                <MenuItem>No student to display</MenuItem>
              )}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="demo-simple-select-label">
              Psychomotor Skill
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedPsychomotor}
              label="Psychomotor Skill"
              onChange={(event) => setSelectedPsychomotor(event.target.value)}
            >
              {psychomotor.length > 1 ? (
                psychomotor.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem> No Psychomotor Skill</MenuItem>
              )}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rating}
              label="Rating"
              onChange={(event) => setRating(event.target.value)}
            >
              {ratings.length > 1 ? (
                ratings.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.value}
                  </MenuItem>
                ))
              ) : (
                <MenuItem>No Rating</MenuItem>
              )}
            </Select>
          </StyledFormControl>
        </Grid>

        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="primary">
            Add Rating
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default AddPsychomotor;
