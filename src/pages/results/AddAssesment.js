import React from "react";
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

const AddAssesment = () => {
  const [student, setStudent] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [score, setScore] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitted:", student, course, score);

    // Clear form fields
    setStudent("");
    setCourse("");
    setScore("");
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Student Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="student-label">Student</InputLabel>
            <Select
              labelId="student-label"
              id="student"
              value={student}
              onChange={(event) => {
                setStudent(event.target.value);
              }}
            >
              <MenuItem value="john">John Doe</MenuItem>
              <MenuItem value="mary">Mary Kay</MenuItem>
              <MenuItem value="james">James Katt</MenuItem>
              
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledFormControl>
            <InputLabel id="subject-label">Course</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              value={course}
              onChange={(event) => {
                setCourse(event.target.value);
              }}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="science">Science</MenuItem>
              <MenuItem value="programming">Programming</MenuItem>
              
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Student ID"
            value={score}
            variant="outlined"
            onChange={(event) => {
              setScore(event.target.value);
            }}
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

export default AddAssesment;
