import MasterListGrid from '../../components/MasterListGrid'
import { Typography } from "@mui/material";

const ViewMasterList = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Preview First Assessment
          </Typography>
          <MasterListGrid/>
        </div>
      </div>
    </div>
  )
}

export default ViewMasterList
