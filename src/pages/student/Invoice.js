import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../utils/AuthProvider";
import axios from "../../api/axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const Invoice = () => {
  const { auth } = useContext(AuthContext);
  const [fee, setFee] = useState({});
  //   const [rows, setRows] = React.useState([]);

  const id = auth.user.user_info.admission_id;
  const getFees = async () => {
    try {
      const response = await axios.post(
        "/fee/fee-check",
        {
          student: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFee(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFees();
  }, [id]);

  const columns = [
    { field: "fee_type_name", headerName: "Payment Type", width: 200 },
    { field: "session", headerName: "Session", width: 200 },
    { field: "term", headerName: "Term", width: 200 },
    { field: "fee_type_amount", headerName: "Amount", width: 200 },
    { field: "payment_ref", headerName: "Payment Ref", width: 200 },
  ];

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Fee Invoice
          </Typography>
          {fee.length < 1 ? (
            <div>No fee invoice found</div>
          ) : (
            <div style={{ height: "100%", width: "100%" }}>
              <DataGrid rows={fee} columns={columns} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Invoice;
