import { Typography } from "@mui/material";
import PreviewSecAssGrid from "../../components/PreviewSecAssGrid";

const PreviewSecAssessment = () => {
  return (
    <div className="container-fluid">
    <div className="card shadow mb-4">
      <div className="card-body">
        <Typography variant="h4" align="center" gutterBottom>
          Preview Second Assessment
        </Typography>
        <PreviewSecAssGrid />
      </div>
    </div>
  </div>
  )
}

export default PreviewSecAssessment
