import  { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import axios from "../api/axios";
const DefaultersGrid = () => {
  const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   // Fetch data from API
  //   fetch("http://127.0.0.1:8000/fee/fee-defaulters")
  //     .then((response) => response.json())
  //     .then((data) => setRows(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(()=>{
    axios.get("/fee/fee-defaulters")
    .then((response)=>setRows(response.data))
    .catch((error)=>console.log(error))
  }, [])

  const handleRowClick = (params) => {
    const studentId = params.row.student_id;
    // console.log("Clicked student_id:", studentId);
    // Perform additional actions with the student_id
  };

  const columns = [
    { field: "student_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "sex", headerName: "Sex", width: 100 },
    { field: "class", headerName: "class", width: 100 },
    { field: "parent", headerName: "Parent", width: 180 },
    { field: "parent_phone", headerName: "Parent Contact", width: 140 },
    {
      field: "fee",
      headerName: "Pay Fee",
      width: 150,
      renderCell: (params) => (
        <Link
          onClick={() => handleRowClick(params)}
          to={`/pay-fee?student_id=${params.row.student_id}`}
        >
          {"Pay"}
        </Link>
      ),
    },
  ];

  return (
    <div>
      {rows.length < 1 ? (
        <div>No fee defaulter found</div>
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

export default DefaultersGrid;
