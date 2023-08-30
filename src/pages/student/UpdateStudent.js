import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Grid,
  Button,
  Typography,
  TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Stack,
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


const UpdateStudentDash = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentId = queryParams.get("student_id");

  const [student, setStudent] = useState({});
  const [surname, setSurname] = useState("");
  const [othernames, setOthernames] = useState("");
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
    axios.get(`http://127.0.0.1:8000/student/get-student/${studentId}`)
      .then((response) => response.data)
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
        const response = await axios.put(
          `/student/update-student/${student.id}`,
          formData
        );
      
        if (response.status === 200) {
          // File submitted successfully
          // toast.success("Updated Successfully!");
          navigate('/student/dashboard');
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
  
  // console.log(student);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Your Details
      </Typography>
      <b>Note:To edit other details please contact admin</b>
      <br></br>
      <Grid container spacing={2}>
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

export default UpdateStudentDash;
