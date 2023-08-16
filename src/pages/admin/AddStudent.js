// import { useState, useEffect } from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Grid,
//   Button,
//   Typography,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Stack,
//   Input,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";
// import styled from "styled-components";

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const StyledButton = styled(Button)`
//   margin-top: 16px;
// `;

// function AddStudent() {
//   const [isButtonDisabled, setButtonDisabled] = useState(false);

//   const [stdClass, setStdClass] = useState([]);
//   const [formData, setFormData] = useState({
//     surname: "",
//     othernames: "",
//     sex:"",
//     dateofBirth: null,
//     dateofAdmission: null,
//     selectedClass: "",
//     parentSurname: "",
//     parent_othernames: "",
//     parentPhone: "",
//     parent_address: "",
//     parentEmail: "",
//     parent_occupation: "",
//     selectedFile: null,
//   });

//   useEffect(() => {
//     // Fetch data from API
//     fetch("http://127.0.0.1:8000/setup/get-class")
//       .then((response) => response.json())
//       .then((data) => setStdClass(data.results))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleChange = (event) => {
//     const {name, value} = event.target;
//     setFormData((prevData)=>({
//       ...prevData, [name]:value
//     }))
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // TODO:set default image
//     const getDefaultImage = () => {
//       // Return your default image here
//       // For example, you can provide a URL or import a default image from your project
//       console.log("../../../public/default.png");
//     };

//     setButtonDisabled(true);

//     setInterval(() => {
//       setButtonDisabled(false);
//     }, 1500);

//     const imageToSend = formData.selectedFile ? formData.selectedFile : getDefaultImage();

//     if (imageToSend) {
//       // console.log(imageToSend);
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//       // formData.append("profile_pics", imageToSend);
//       // formData.append("surname", surname);
//       // formData.append("othernames", othernames);
//       // formData.append("date_of_birth", dateofBirth);
//       // formData.append("year_of_admission", dateofAdmission);
//       // formData.append("parent_surname", parentSurname);
//       // formData.append("parent_othernames", parent_othernames);
//       // formData.append("parent_phone", parentPhone);
//       // formData.append("parent_address", parent_address);
//       // formData.append("parent_email", parentEmail);
//       // formData.append("parent_occupation", parent_occupation);
//       // formData.append("class_id", selectedClass);
//       // formData.append("sex", sex);

//       try {
//         const response = await fetch("http://127.0.0.1:8000/student/add", {
//           method: "POST",
//           // headers: {
//           //   "Content-Type": "multipart/form-data",
//           // },
//           body: formDataToSend,
//         });

//         if (response.ok) {
//           // File submitted successfully
//           toast.success("Student added!");
//           console.log("File submitted");
//         } else {
//           // Handle error response
//           console.error("Error submitting file");
//           toast.error("Failed. Please try again.");
//         }
//       } catch (error) {
//         // Handle network error
//         console.error("Network error:", error);
//         toast.error("Failed. Please try again.");
//       }
//     }

//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Enter Student Details
//       </Typography>
//       <Grid container spacing={2}>
//         {[
//           { name: "surname", label: "Surname" },
//           { name: "othernames", label: "Other Name" },
//         ].map((field) => (
//           <Grid item xs={12}>
//             <TextField
//               label={field.label}
//               value={formData[field.name]}
//               variant="outlined"
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//         ))}

//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Sex</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={formData.sex}
//               label="Age"
//               onChange={handleChange}
//             >
//               <MenuItem value="male">Male</MenuItem>
//               <MenuItem value="female">Female</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <Stack>
//             <DatePicker
//               label="Date of Birth"
//               value={formData.dateofBirth}
//               onChange={(newValue) => {
//                 setDateofBirth(newValue.format("YYYY-MM-DD"));
//               }}
//               format="YYYY-MM-DD"
//             />
//           </Stack>
//         </Grid>
//         <Grid item xs={12}>
//           <Stack>
//             <DatePicker
//               label="Date of Admission"
//               value={formData.dateofAdmission}
//               onChange={(newValue) => {
//                 setDateofAdmission(newValue.format("YYYY-MM-DD"));
//               }}
//               format="YYYY-MM-DD"
//             />
//           </Stack>
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Class</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={formData.selectedClass}
//               label="Age"
//               onChange={handleChange}
//             >
//               {stdClass?.map((item) => (
//                 <MenuItem value={item.id} key={item.id}>
//                   {item.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         {[
//           { name: "parentSurname", label: "Parent Surname" },
//           { name: "parent_othernames", label: "Parent Other Names" },
//           { name: "parentPhone", label: "Parent Phone" },
//           { name: "parent_address", label: "Parent Address" },
//           { name: "parentEmail", label: "Parent Email" },
//           { name: "parent_occupation", label: "Parent Occupation" },
//         ].map((field) => (
//           <Grid item xs={12}>
//             <TextField
//               label={field.name}
//               value={formData[field.name]}
//               variant="outlined"
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//         ))}

//         <Grid item xs={12}>
//           <InputLabel htmlFor="file-input">Select Passport</InputLabel>
//           <Input
//             fullWidth
//             variant="outlined"
//             type="file"
//             id="file-input"
//             onChange={(event) => setSelectedFile(event.target.files[0])}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <StyledButton
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={isButtonDisabled}
//           >
//             {isButtonDisabled ? "Processing..." : "Register"}
//           </StyledButton>
//         </Grid>
//       </Grid>
//       <ToastContainer />
//     </FormContainer>
//   );
// }

// export default AddStudent;

import React, { useState, useEffect } from "react";
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
import { DatePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

function AddStudent() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [stdClass, setStdClass] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [dateofBirth, setDateofBirth] = useState(null);
  const [dateofAdmission,setDateofAdmission] = useState(null);

  const initialFormData = {
    surname: "",
    othernames: "",
    sex: "",
    dateofBirth: null,
    dateofAdmission: null,
    class_id: "",
    parent_surname: "",
    parent_othernames: "",
    parent_phone: "",
    parent_address: "",
    parent_email: "",
    parent_occupation: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/setup/get-class")
      .then((response) => response.json())
      .then((data) => setStdClass(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonDisabled(true);

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    if (selectedFile) {
      formDataToSend.append("profile_pics", selectedFile);
    }

    if (dateofBirth){
      formDataToSend.append("date_of_birth", dateofBirth)
    }
    if (dateofAdmission){
      formDataToSend.append("year_of_admission", dateofAdmission)
    }


    try {
      const response = await fetch("http://127.0.0.1:8000/student/add", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Student added!");
        setFormData(initialFormData);
        setSelectedFile(null);
      } else {
        console.error("Error submitting form");
        toast.error("Failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed. Please try again.");
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Enter Student Details
      </Typography>
      <Grid container spacing={2}>
        {[
          { name: "surname", label: "Surname" },
          { name: "othernames", label: "Other Name" },
        ].map((field) => (
          <Grid item xs={12} key={field.name}>
            <TextField
              label={field.label}
              value={formData[field.name]}
              variant="outlined"
              onChange={handleChange}
              fullWidth
              required
              name={field.name}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sex</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.sex}
              label="Sex"
              onChange={handleChange}
              name="sex"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <DatePicker
              label="Date of Birth"
              value={formData.dateofBirth}
              onChange={(newValue) => {
                setDateofBirth(newValue.format("YYYY-MM-DD"));
              }}
              format="YYYY-MM-DD"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <DatePicker
              label="Date of Admission"
              value={formData.dateofAdmission}
              onChange={(newValue) => {
                setDateofAdmission(newValue.format("YYYY-MM-DD"));
              }}
              format="YYYY-MM-DD"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.class_id}
              label="Class"
              onChange={handleChange}
              name="class_id"
            >
              {stdClass?.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {[
          { name: "parent_surname", label: "Parent Surname" },
          { name: "parent_othernames", label: "Parent Other Names" },
          { name: "parent_phone", label: "Parent Phone" },
          { name: "parent_address", label: "Parent Address" },
          { name: "parent_email", label: "Parent Email" },
          { name: "parent_occupation", label: "Parent Occupation" },
        ].map((field) => (
          <Grid item xs={12}>
            <TextField
              label={field.label}
              value={formData[field.name]}
              variant="outlined"
              onChange={handleChange}
              fullWidth
              required
              name={field.name}
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
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "Register"}
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
}

export default AddStudent;
