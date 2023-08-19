import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StaffData = () => {
  const [rows, setRows] = React.useState([]);
  //   const [staff, setStaff] = useState([])

  const getStaff = async () => {
    try {
      const response = await axios.get("/sch-staff/all");
      setRows(response.data.data);
      console.log(rows);
      toast.success("Message sent");

      // Reset form fields and enable the button
      // setSubject("");
      // setMsg("");
      // setButtonDisabled(false);
    } catch (error) {
      toast.error("Mesage not sent");
      // console.error("Error submitting form:", error);
      // setButtonDisabled(false);
    }
  };

  React.useEffect(() => {
    // Fetch data from API
    getStaff();
  }, []);
  // console.log(rows)
  const columns = [
    {
      field: "student_id",
      headerName: "ID",
      width: 150,
      renderCell: (params) => (
        <Link to={`/view-student/${params.row.staff_id}`}>
          {params.row.staff_id}
        </Link>
      ),
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.surname || ""} ${params.row.othernames || ""}`,
    },
    { field: "sex", headerName: "Sex", width: 150 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "designation", headerName: "Designation", width: 150 },
  ];

  return (
    <div>
      {rows.length < 1 ? (
        <div> No Active Student</div>
      ) : (
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StaffData;
