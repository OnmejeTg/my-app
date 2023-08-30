import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

const DataGridExample = () => {
  const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   // Fetch data from API
  //   fetch("http://127.0.0.1:8000/student/all")
  //     .then((response) => response.json())
  //     .then((data) => setRows(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(()=>{
    axios.get("/student/all")
    .then((response)=>setRows(response.data))
    .catch((error)=>console.log(error))
  }, [])


  // console.log(rows)
  const columns = [
    {
      field: "student_id",
      headerName: "ID",
      width: 150,
      renderCell: (params) => (
        <Link to={`/view-student/${params.value}`}>{params.value}</Link>
      ),
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "sex", headerName: "Sex", width: 150 },
    { field: "class", headerName: "Class", width: 150 },
    { field: "parent", headerName: "Parent", width: 200 },
    { field: "fee", headerName: "School Fee", width: 150 },
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
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      )}
    </div>
  );
};

export default DataGridExample;
