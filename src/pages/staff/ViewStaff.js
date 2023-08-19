import StaffData from '../../components/StaffData'
import { Typography } from "@mui/material";

const ViewStaff = () => {
  return (

    <div className="container-fluid">
    <div className="card shadow mb-4">
      <div className="card-body">
        <Typography variant="h4" align="center" gutterBottom>
          Staff List
        </Typography>
        <StaffData/>
      </div>
    </div>
  </div>
  )
}

export default ViewStaff
