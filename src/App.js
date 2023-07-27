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
import PreviewAssessment from "./pages/results/PreviewAssessment";
import PreviewExam from "./pages/results/PreviewExam";
import PreviewSecAssessment from "./pages/results/PreviewSecAssessment";
import ComputeResult from "./pages/results/Compute";
import AddPsychomotor from "./pages/results/AddPsychomotor";
import UpdateStudent from "./pages/students/UpdateStudent";

function App() {
  const currentUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more properties as needed
  };
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
            <Route exact path="update-student" element={<UpdateStudent currentUserData={currentUserData}/>} />
            {/* this route is to view an individual student */}
            <Route exact path="view-student/:id" element={<Student />} />
            {/* fee routes */}
            <Route exact path="pay-fee" element={<PayFee />} />
            <Route exact path="outstanding-fee" element={<OutstandingFees />} />
            {/* result routes */}
            <Route exact path="add-assessment" element={<AddAssesment />} />
            <Route exact path="add-psychomotor" element={<AddPsychomotor/>} />
            <Route exact path="upload-scores" element={<UploadAssessment />} />
            <Route
              exact
              path="view-first-assessment"
              element={<PreviewAssessment />}
            />
            <Route
              exact
              path="view-sec-assessment"
              element={<PreviewSecAssessment/>}
            />
            <Route exact path="view-exam" element={<PreviewExam />} />
            <Route exact path="compute-scores" element={<ComputeResult/>} />
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
