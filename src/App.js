import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import StudentWrapper from "./pages/students/StudentWrapper";
import AddStudent from "./pages/students/AddStudent";
import UploadStudents from "./pages/students/UploadStudents";
import ActiveStudent from "./pages/students/ActiveStudents";
import Student from "./pages/students/Student";
import DashBoard from "./pages/DashBoard";
import PayFee from "./pages/fees/PayFee";
import OutstandingFees from "./pages/fees/OutstandingFees";
import AddAssesment from "./pages/results/AddAssesment";
import UploadAssessment from "./pages/results/UploadAssessment";
import ViewStaff from "./pages/staff/ViewStaff";
import AddStaff from "./pages/staff/AddStaff";
import AddExam from "./pages/results/AddExam";
import PreviewAssessment from "./pages/results/PreviewAssessment";
import PreviewExam from "./pages/results/PreviewExam";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route exact path="" element={<StudentWrapper />}>
            {/* DashBoard */}
            <Route exact path="" element={<DashBoard />} />
            {/* student routes */}
            <Route exact path="active-students" element={<ActiveStudent />} />
            <Route exact path="add-student" element={<AddStudent />} />
            <Route exact path="upload-students" element={<UploadStudents />} />
            {/* this route is to view an individual student */}
            <Route exact path="view-student/:id" element={<Student />} />
            {/* fee routes */}
            <Route exact path="pay-fee" element={<PayFee />} />
            <Route exact path="outstanding-fee" element={<OutstandingFees />} />
            {/* result routes */}
            <Route exact path="add-assessment" element={<AddAssesment />} />
            <Route exact path="add-exam" element={<AddExam />} />
            <Route exact path="upload-scores" element={<UploadAssessment />} />
            <Route
              exact
              path="view-assessment"
              element={<PreviewAssessment />}
            />
            <Route exact path="view-exam" element={<PreviewExam />} />
            {/* staff routes */}
            <Route exact path="view-staff" element={<ViewStaff />} />
            <Route exact path="add-staff" element={<AddStaff />} />
          </Route>
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
