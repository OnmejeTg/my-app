import { Typography } from "@mui/material";
import PreviewScoresGrid from "../../components/PreviewScoresGrid";

const PreviewAssessment = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Preview First Assessment
          </Typography>
          <PreviewScoresGrid />
        </div>
      </div>
    </div>
  )
}

export default PreviewAssessment
