import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker } from "@mui/x-date-pickers";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import axios from "../../api/axios";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 16px; /* Adjust the desired spacing value */
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;


const AddStaff = () => {
  const [grade, setGrade] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [appDate, setAppDate] = useState(null);
  const [formData, setFormData] = useState({
    surname: "",
    othernames: "",
    sex: "",
    address: "",
    phone: "",
    qualification: "",
    discipline: "",
    appointment_type: "",
    designation: "",
    gradeInCharge: "",
    email: "",
  });

  useEffect(() => {
    // Fetch data from API
    axios
      .get("/setup/get-class")
      .then((response) => setGrade(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
console.log(formData.grade)
    try {
      await axios.post("sch-staff/add", {
        dob: formData.dateOfBirth ? formData.dateOfBirth.format("DD") : null,
        mob: formData.dateOfBirth ? formData.dateOfBirth.format("MM") : null,
        yob: formData.dateOfBirth ? formData.dateOfBirth.format("YYYY") : null,
        grade_in_charge: formData.grade ? formData.grade: null,
        appointment_date: formData.appDate ? formData.appDate.format("DD/MM/YYYY") : null,
        ...formData,
      });
      console.log(formData)
      toast.success("Staff Added");
    } catch (error) {
      console.log(error);
    }
    setFormData({
      ...formData,
      surname: "",
      othernames: "",
      sex: "",
      address: "",
      phone: "",
      qualification: "",
      discipline: "",
      appointment_type: "",
      designation: "",
      gradeInCharge: "",
      email: "",
    });
    setDateOfBirth(null);
    setAppDate(null);
    setGrade(null);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Staff
      </Typography>
      <Grid container spacing={2}>
        {[
          { label: "Surname", name: "surname" },
          { label: "Other Names", name: "othernames" },
          { label: "Sex", name: "sex", type: "select", values: ["male", "female"] },
          { label: "Phone Number", name: "phone" },
          { label: "Address", name: "address" },
          { label: "Email (optional)", name: "email" },
          { label: "Highest Qualification", name: "qualification", type: "select", values: ["Masters", "Degree", "Hnd", "ND", "NCE"] },
          { label: "Discipline", name: "discipline" },
          { label: "Date of Birth", name: "dateOfBirth", type: "datePicker" },
          { label: "Date of Appointment", name: "appDate", type: "datePicker" },
          { label: "Appointment Type", name: "appointment_type", type: "select", values: ["permanent", "temporal", "NYSC"] },
          { label: "Designation", name: "designation", type: "select", values: ["Teaching staff", "Admin staff"] },
          // { label: "Grade in Charge", name: "grade", type: "select", values: grade.map((item) => item.name) },
        ].map((item, index) => (
          <Grid item xs={12} key={index}>
            {item.type === "select" ? (
              <StyledFormControl>
                <InputLabel id={item.name}>{item.label}</InputLabel>
                <Select
                  label={item.label}
                  id={item.name}
                  name={item.name}
                  value={formData[item.name]}
                  onChange={handleInputChange}
                >
                  {item.values.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            ) : item.type === "datePicker" ? (
              <Stack>
                <DatePicker
                  label={item.label}
                  value={formData[item.name]}
                  onChange={(newValue) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      [item.name]: newValue,
                    }));
                  }}
                  format="DD/MM/YYYY"
                />
              </Stack>
            ) : (
              <StyledTextField
                id={item.name}
                label={item.label}
                name={item.name}
                value={formData[item.name]}
                onChange={handleInputChange}
                fullWidth
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.grade}
              label="Class"
              // onChange={handleInputChange}

              onChange={(newValue) => {
                setFormData((prevData) => ({
                  ...prevData,
                  [formData.name]: newValue,
                }));
              }}
              name="grade"
            >
              {grade?.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Staff
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default AddStaff;