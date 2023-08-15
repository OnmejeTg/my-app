import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const AnnouncementGrid = () => {
  const [rows, setRows] = useState({});

  const getAnnouncements = async () => {
    try {
      const response = await axios.get("/setup/list-create-announcement");
      setRows(response.data.results);
    } catch (error) {
      console.error("Error fetching announcement:", error);
      // Handle the error, e.g., set an error state or show a message to the user.
    }
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: (params) => (
        <Link to={`/view-annoucement/${params.row.id}`}>{params.row.id}</Link>
      ),
    },
    { field: "subject", headerName: "Subject", width: 400 },
    { field: "body", headerName: "Message", width: 500 },
  ];

  return (
    <div>
      {rows.length < 1 ? (
        <div>No Announcement Found</div>
      ) : (
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            // slots={{
            //   toolbar: GridToolbar,
            // }}
          />
        </div>
      )}
    </div>
  );
};

export default AnnouncementGrid;
