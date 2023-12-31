import React from "react";
import { Typography } from "@mui/material";
import DefaultersGrid from "../../components/DefaultersGrid";

const OutstandingFees = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Outstanding Fees
          </Typography>
          <DefaultersGrid />
        </div>
      </div>
    </div>
  );
};

export default OutstandingFees;
