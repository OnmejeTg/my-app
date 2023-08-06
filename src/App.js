import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import ProtectedRoute from "./utils/ProtectedRoute";

import StudentWrapper from "./pages/students/StudentWrapper";
import AddStudent from "./pages/students/AddStudent";
import UploadStudents from "./pages/students/UploadStudents";
import ActiveStudent from "./pages/students/ActiveStudents";
import Student from "./pages/students/Student";
import DashBoard from "./pages/DashBoard";
import PayFee from "./pages/fees/PayFee";
import OutstandingFees from "./pages/fees/OutstandingFees";
import AddAssessment from "./pages/results/AddAssessment";
import UploadAssessment from "./pages/results/UploadAssessment";
import ViewStaff from "./pages/staff/ViewStaff";
import AddStaff from "./pages/staff/AddStaff";
import PreviewAssessment from "./pages/results/PreviewAssessment";
import PreviewExam from "./pages/results/PreviewExam";
import PreviewSecAssessment from "./pages/results/PreviewSecAssessment";
import ComputeResult from "./pages/results/Compute";
import AddPsychomotor from "./pages/results/AddPsychomotor";
import UpdateStudent from "./pages/students/UpdateStudent";
import PrintResult from "./pages/results/PrintResult";
import Login from "./pages/Login";

function App() {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <StudentWrapper />
              </ProtectedRoute>
            }
            >
            {/* DashBoard */}
            <Route path="" element={<DashBoard />} />

            {/* Student routes */}
            <Route path="active-students" element={<ActiveStudent />} />
            <Route path="add-student" element={<AddStudent />} />
            <Route path="upload-students" element={<UploadStudents />} />
            <Route
              path="update-student"
              element={<UpdateStudent />}
            />
            <Route path="view-student/:id" element={<Student />} />

            {/* Fee routes */}
            <Route path="pay-fee" element={<PayFee />} />
            <Route path="outstanding-fee" element={<OutstandingFees />} />

            {/* Result routes */}
            <Route path="add-assessment" element={<AddAssessment />} />
            <Route path="add-psychomotor" element={<AddPsychomotor />} />
            <Route path="upload-scores" element={<UploadAssessment />} />
            <Route path="view-first-assessment" element={<PreviewAssessment />} />
            <Route path="view-sec-assessment" element={<PreviewSecAssessment />} />
            <Route path="view-exam" element={<PreviewExam />} />
            <Route path="compute-scores" element={<ComputeResult />} />
            <Route path="print-result" element={<PrintResult />} />

            {/* Staff routes */}
            <Route path="view-staff" element={<ViewStaff />} />
            <Route path="add-staff" element={<AddStaff />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
