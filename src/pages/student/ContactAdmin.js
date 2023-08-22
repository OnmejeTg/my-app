import { useState, useContext } from "react";
import styled from "styled-components";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";
import AuthContext from "../../utils/AuthProvider";

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
  const { auth } = useContext(AuthContext);
  const { admission_id } = auth.user.user_info;
  
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    try {
      const response = await axios.post("/AdminUser/create-complain", {
        title: subject,
        body: msg,
        sender: admission_id,
      });
     toast.success("Message sent")

      // Reset form fields and enable the button
      setSubject("");
      setMsg("");
      setButtonDisabled(false);
    } catch (error) {
      toast.error("Mesage not sent")
      // console.error("Error submitting form:", error);
      setButtonDisabled(false);
    }
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Admin
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Subject"
            value={subject}
            variant="outlined"
            onChange={(event) => setSubject(event.target.value)}
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
            onChange={(event) => setMsg(event.target.value)}
            required
            multiline
            rows={8}
          />
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "Send"}
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactAdmin;
