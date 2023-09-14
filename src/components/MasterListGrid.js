import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AuthContext from "../utils/AuthProvider";
import axios from "../api/axios";

const MasterListGrid = () => {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState([]);

  
  
  useEffect(() => {
    axios.post(
      "/result/master-sheet",
      {
        class_id: 1,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        responseType: "blob",
      }
      
    )
    .then(response => {
      
      const blob = new Blob([response.data]); // Use response.data to get the blob
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `result.json`;
      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      // toast.success("Successful!");
    })
    .then((blob) =>{
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.download = `result.json`;
      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      // toast.success("Successful!");

    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  }, []);

  // Extract unique subjects
//   const subjects = Array.from(
//     new Set(data.flatMap((item) => item.data.map((entry) => entry.subject)))
//   );

const columns = [
    { field: "studentId", headerName: "Student ID", width: 130 },
    { field: "subject", headerName: "Subject", width: 150 },
    { field: "firstCA", headerName: "First CA", width: 110 },
    { field: "secondCA", headerName: "Second CA", width: 120 },
    { field: "exam", headerName: "Exam", width: 90 },
  ];
  console.log(data)
  const rows = data.map((item) => {
    const row = { id: item.ID };
    item.data.forEach((entry) => {
      row[entry.subject.toLowerCase()] = entry.score;
    });
    return row;
  });



  return (
    <div style={{ height: "100%", width: "100%" }}>
      {rows.length < 1 ? (
        <div>No Exam Record</div>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      )}
    </div>
  );
};
export default MasterListGrid;
