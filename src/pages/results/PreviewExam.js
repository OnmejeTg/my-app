import { Typography } from "@mui/material";
import PreviewExamGrid from '../../components/PreviewExamGrid'
const PreviewExam = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <Typography variant="h4" align="center" gutterBottom>
            Preview Exam
          </Typography>
          < PreviewExamGrid/>
        </div>
      </div>
    </div>
  )
}

export default PreviewExam
