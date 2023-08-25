import React, { useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AuthContext from "../utils/AuthProvider";

const PreviewSecAssGrid = () => {
  const {auth} = useContext(AuthContext)
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const classId = auth.user.user_info.grade_in_charge.id

    fetch(`http://127.0.0.1:8000/result/view-second-assessment/${classId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  // Extract unique subjects
  const subjects = Array.from(
    new Set(data.flatMap((item) => item.data.map((entry) => entry.subject)))
  );

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    // Create columns for each unique subject
    ...subjects.map((subject) => ({
      field: subject.toLowerCase(),
      headerName: subject,
      width: 150,
    })),
  ];

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
        <div>No Assessment </div>
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

export default PreviewSecAssGrid;
