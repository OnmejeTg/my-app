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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const API_BASE_URL = "http://127.0.0.1:8000/fee";
const FETCH_FEES_URL = `${API_BASE_URL}/get-fees`;
const PAY_FEE_URL = `${API_BASE_URL}/pay`;

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
    fetch(FETCH_FEES_URL)
      .then((response) => response.json())
      .then((data) => setPortalFees(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonDisabled(true);

    try {
      const response = await fetch(PAY_FEE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fee_type: description,
          student,
        }),
      });

      if (response.status === 400) {
        throw new Error("Payment failed, try again");
      }

      const data = await response.json();
      toast.success("Payment successful!");
      setTimeout(() => {
        navigate("/outstanding-fee");
      }, 1000);
    } catch (error) {
      toast.error(`${error.message}`);
      // console.log(error);
      setStudent("");
      setDescription("");
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
