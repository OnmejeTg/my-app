import { useState } from "react";
import styled from "styled-components";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;


const ComingSoon = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
       Coming soon...
      </Typography>
    </div>
  )
}

export default ComingSoon
