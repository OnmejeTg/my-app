import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Remarks = () => {
  const [comment, setComment] = useState("");
  const [commentor, setCommentor] = useState("");
  const [rank, setRank] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formDataToSend = {
      comment,
      comment_type: commentor,
      comment_rank: rank,
    };

    try {
      await axios.post("/result/add-comment", formDataToSend);
      // Handle success or display a toast message
      toast.success("Comment uploaded successfully");
    } catch (error) {
      // Handle error or display an error toast
      toast.error("Error uploading comment");
    }
  };

  return (
    <FormContainer onSubmit={handleUpload}>
      <Typography variant="h4" align="center" gutterBottom>
        Add Comment
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Commentor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={commentor}
              label="Commentor"
              onChange={(e) => setCommentor(e.target.value)}
              name="commentor"
            >
              <MenuItem value="head teacher">Principal</MenuItem>
              <MenuItem value="class teacher">Form Master</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Rank"
            placeholder="Rank"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Comment"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? "Processing..." : "Upload"}
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormContainer>
  );
};

export default Remarks;
