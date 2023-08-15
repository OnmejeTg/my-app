import React from "react";
import { Typography } from "@mui/material";
import AnnouncementGrid from "../../components/AnnoucementGrid";

const AllAnnouncement = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Annoucmements
          </Typography>
          <AnnouncementGrid />
        </div>
      </div>
    </div>
  );
};

export default AllAnnouncement;
