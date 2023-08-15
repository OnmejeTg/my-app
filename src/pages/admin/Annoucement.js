import { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Button, Typography, TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const Annoucement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const getAnnouncement = async () => {
    try {
      const response = await axios.get(
        `/setup/retrieve-update-delete-annoucement/${id}`
      );
      setSubject(response.data.subject);
      setMsg(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnnouncement();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    setTimeout(() => {
      // Enable the button after the action is complete
      setButtonDisabled(false);
    }, 1000);
    try {
      await axios.put(
        `/setup/retrieve-update-delete-annoucement/${id}`,
        JSON.stringify({ subject, body: msg }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      navigate('/all-annoucement')

      toast.success("Annoucmement Posted");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/setup/retrieve-update-delete-annoucement/${id}`, {
        withCredentials: true,
      });
      navigate('/all-annoucement')
      toast.success("Announcement Deleted");
    } catch (error) {
      toast.error("Error deleting announcement");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Create Announcement
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
            type="button" // Use type "button" to prevent form submission
            variant="contained"
            color="error"
            onClick={handleDelete}
            disabled={isButtonDisabled}
            style={{ marginRight: "16px" }} // Add some spacing between the buttons
          >
            Delete
          </StyledButton>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "update"}
          </StyledButton>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default Annoucement;
