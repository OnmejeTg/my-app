import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const PayFee = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentId = queryParams.get("student_id");

  const [student, setStudent] = useState(studentId || "");
  const [portalFees, setPortalFees] = useState([]);
  const [description, setDescription] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    // Fetch data from API
    axios
      .get(`/fee/get-fees`)
      .then((response) => setPortalFees(response.data.results))
      .catch((error) => console.log(error));
  }, []);

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonDisabled(true);
  
    try {
      const response = await axios.post(
        'fee/pay',
        {
          fee_type: description,
          student,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 400) {
        throw new Error("Payment failed, try again");
      }
  
      toast.success("Payment successful!");
      setTimeout(() => {
        navigate("/outstanding-fee");
      }, 1000);
    } catch (error) {
      toast.error(`${error.message}`);
      // console.log(error);
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
        <Grid item xs={12}>
          <TextField
            label="Student ID"
            value={student}
            variant="outlined"
            onChange={(event) => {
              setStudent(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Description</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={description}
              label="Description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            >
              {portalFees.length > 0 ? (
                portalFees.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name} ({item.amount})
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---Select Description---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "pay"}
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default PayFee;
