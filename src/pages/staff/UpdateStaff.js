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
import { data } from "jquery";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;


const UpdateStaffDash = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const staffId = queryParams.get("staff_id");

  const [surname, setSurname] = useState({});
  const [otherNames, setOtherNames] = useState("");
  const [sex, setSex] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [designation, setDesignation] = useState("");
  const [appType, setAppType] = useState("");
  const [gradeInCharge, setgradeInCharge] = useState("");


  
  useEffect(() => {
    // Fetch data from API
    axios.get(`http://127.0.0.1:8000/sch-staff/staff/${staffId}`)
      .then((response) => response.data)
      .then((data) => {
  
        setSurname(data.surname);
        setSex(data.sex);
        setOtherNames(data.othernames);
        setPhoneNumber(data.phone);
        setQualification(data.qualification);
        setDiscipline(data.discipline);
        setDesignation(data.designation);
        setAppType(data.appointment_type);
        setEmail(data.email);
        setgradeInCharge(data.grade_in_charge);
        
      })
      .catch((error) => console.log(error));
  }, [staffId]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    

    if (true) {
      const formData = new FormData();
      // formData.append("profile_pics", imageToSend);
      formData.append("surname", surname);
      formData.append("othernames", otherNames);
      formData.append("sex", sex);
      formData.append("qualification", qualification);
      formData.append("discipline", discipline);
      formData.append("designation", designation);
      formData.append("appointment_type", appType);
      formData.append("grade_in_charge", gradeInCharge);
   

      try {
        const response = await axios.put(
          `/sch-staff/staff/${staffId}`,
          formData
        );
      
        if (response.status === 200) {
          // File submitted successfully
          // toast.success("Updated Successfully!");
          navigate(`/view-staff/${staffId}`);
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
        Edit Staff Details
      </Typography>
      {/* <b>Note:To edit other details please contact admin</b> */}
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Surname"
            variant="outlined"
            fullWidth
            value={surname}
            onChange={(event) => {
              setSurname(event.target.value);
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Other Name"
            variant="outlined"
            fullWidth
            value={otherNames}
            onChange={(event) => {
              setOtherNames(event.target.value);
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Sex"
            variant="outlined"
            fullWidth
            value={sex}
            onChange={(event) => {
              setSex(event.target.value);
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            // required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Qualification"
            variant="outlined"
            fullWidth
            value={qualification}
            onChange={(event) => {
              setQualification(event.target.value);
            }}
            // required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Discipline"
            variant="outlined"
            fullWidth
            value={discipline}
            onChange={(event) => {
              setDiscipline(event.target.value);
            }}
            // required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Designation"
            variant="outlined"
            fullWidth
            value={designation}
            onChange={(event) => {
              setDesignation(event.target.value);
            }}
            // required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Application Type"
            variant="outlined"
            fullWidth
            value={appType}
            onChange={(event) => {
              setAppType(event.target.value);
            }}
            // required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Class"
            variant="outlined"
            fullWidth
            value={gradeInCharge}
            onChange={(event) => {
              setgradeInCharge(event.target.value);
            }}
            // required
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

export default UpdateStaffDash;
