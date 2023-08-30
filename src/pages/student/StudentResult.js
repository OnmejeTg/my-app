import { useState, useContext } from "react";
import styled from "styled-components";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../utils/AuthProvider";
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

const StudentResult = () => {
  const { auth } = useContext(AuthContext);
  //   const [student, setStudent] = useState("");
  const [paymentRef, setPaymentRef] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const student = auth.user.user_info.admission_id;
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    setTimeout(() => {
      // Enable the button after the action is complete
      setButtonDisabled(false);
    }, 1500);
    const url = "/result/print-result";
    axios
      .post(
        url,
        {
          student_id: student,
          payment_ref: paymentRef,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 400) {
          throw new Error("Invalid Payment Ref, try again");
        } else if (response.status === 404) {
          throw new Error("Student not found, try again");
        } else {
          return response.blob();
        }
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = `${student}_result.pdf`;
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);
        toast.success("Successful!");

        setPaymentRef("");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        // console.log(error.message);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Print Result
      </Typography>
      <div className="mb-4">
        <b>INSTRUCTIONS:</b>
        <br />
        Enter the payment ref of your most recent school payment to download
        result
        <br />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Payment Ref"
            value={paymentRef}
            variant="outlined"
            onChange={(event) => {
              setPaymentRef(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "Submit"}
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default StudentResult;
