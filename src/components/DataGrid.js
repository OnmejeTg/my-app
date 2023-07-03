import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataGridExample = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from API
    fetch("http://127.0.0.1:8000/student/all")
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    { field: "student_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "sex", headerName: "Sex", width: 150 },
    { field: "class", headerName: "class", width: 150 },
    { field: "parent", headerName: "Parent", width: 200 },
    { field: "fee", headerName: "Paid Fee", width: 150 },
  ];

  return (
    <div>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default DataGridExample;
