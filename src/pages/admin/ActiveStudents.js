import { Typography } from "@mui/material";
import DataGrid from "../../components/DataGrid";

const ActiveStudents = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Active Students
          </Typography>
          <DataGrid />
        </div>
      </div>
    </div>
  );
};

export default ActiveStudents;
