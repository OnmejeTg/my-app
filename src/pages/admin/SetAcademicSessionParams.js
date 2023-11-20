import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 1200px;
  margin: 0 auto;
`;

const SetAcademicSessionParams = () => {
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [numOfDays, setNumOfDays] = useState("");
  const [resumptionDate, setResumptionDate] = useState("");
  const [nextTermBegins, setNextTermBegins] = useState("");
  const [nextTermFee, setNextTermFee] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const [activeSession, setActiveSession] = useState("")

  useEffect(() => {
    try {
      axios.get("setup/portal-params")
        .then(res => setActiveSession(res.data.results[0]))
        setSession(activeSession.session)
        setTerm(activeSession.term)
        setNumOfDays(activeSession.num_of_days)
        setResumptionDate(activeSession.resumption_date)
        setNextTermBegins(activeSession.next_term_begins)
        setNextTermFee(activeSession.next_term_sch_fee)
      console.log(activeSession)
    } catch (error) {
      toast.error(error.message);

    }
  }, [])



  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`setup/update-portal-params/${activeSession.id}`, {
        session: session,
        term: term,
        num_of_days: numOfDays,
        resumption_date: resumptionDate,
        next_term_begins: nextTermBegins,
        next_term_sch_fee: nextTermFee,
      });
      toast.success("Success");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleUpload}>
        <Typography variant="h4" align="center" gutterBottom>
          Edit Session Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={true}>
            <TextField
              label="Session"
              placeholder="Session"
              value={session}
              onChange={(e) => setSession(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={true}>
            <TextField
              label="Term"
              placeholder="Term"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={true}>
            <TextField
              label="Num of Days"
              placeholder="Num of Days"
              value={numOfDays}
              onChange={(e) => setNumOfDays(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={true}>
            <TextField
              label="Resumption Date"
              placeholder="YYYY-MM-DD"
              value={resumptionDate}
              onChange={(e) => setResumptionDate(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={true}>
            <TextField
              label="Next Term Begins"
              placeholder="YYYY-MM-DD"
              value={nextTermBegins}
              onChange={(e) => setNextTermBegins(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={true}>
            <TextField
              label="Next Term Fee"
              placeholder="Next Term Fee"
              value={nextTermFee}
              onChange={(e) => setNextTermFee(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={true}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? "Processing..." : "Update"}
            </Button>
          </Grid>
        </Grid>
        <ToastContainer />
      </FormContainer>

      <div className="container mt-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Active Session
            </h6>
          </div>
          <div className="card-body">
            {/* Add a table inside the card body */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Session</TableCell>
                    <TableCell>Term</TableCell>
                    <TableCell>Resumption Date</TableCell>
                    <TableCell>Number of Days</TableCell>
                    <TableCell>Next Term Fee</TableCell>
                    <TableCell>Next Term Begins</TableCell>
                    <TableCell>Status</TableCell>
                    {/* Add more headers as needed */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>{activeSession.session}</TableCell>
                    <TableCell>{activeSession.term}</TableCell>
                    <TableCell>{activeSession.resumption_date}</TableCell>
                    <TableCell>{activeSession.num_of_days}</TableCell>
                    <TableCell>{activeSession.next_term_sch_fee}</TableCell>
                    <TableCell>{activeSession.next_term_begins}</TableCell>
                    <TableCell>{activeSession.status}</TableCell>
                    {/* Add more rows with data as needed */}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <Grid item xs={true}>
            <Button
              type=""
              variant="contained"
              color="primary"
              disabled={isButtonDisabled}
            >
              Add New Session
            </Button>
          </Grid>
      </div>
      
    </ >

  );
};

export default SetAcademicSessionParams;
