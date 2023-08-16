import { useState } from "react";
import styled from "styled-components";
import { Grid, Button, Typography, TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const ContactAdmin = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    setTimeout(() => {
      // Enable the button after the action is complete
      setButtonDisabled(false);
      setSubject("");
      setMsg("");
    }, 1000);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Admin
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Subject"
            value={subject}
            variant="outlined"
            onChange={(event) => {
              setSubject(event.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            value={msg}
            onChange={(event) => {
              setMsg(event.target.value);
            }}
            required
            multiline // This allows the field to have multiple lines
            rows={8} // Set the number of rows
          />
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "send"}
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactAdmin;
