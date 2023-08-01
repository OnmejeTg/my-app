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
import PrintResult from "./pages/results/PrintResult";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const currentUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    // Add more properties as needed
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route
            exact
            path=""
            element={
              <ProtectedRoute>
                <StudentWrapper />
              </ProtectedRoute>
            }
          >
            {/* DashBoard */}
            <Route
              exact
              path="dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            {/* student routes */}
            <Route
              exact
              path="active-students"
              element={
                <ProtectedRoute>
                  <ActiveStudent />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="add-student"
              element={
                <ProtectedRoute>
                  <AddStudent />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="upload-students"
              element={
                <ProtectedRoute>
                  <UploadStudents />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="update-student"
              element={
                <ProtectedRoute>
                  <UpdateStudent currentUserData />
                </ProtectedRoute>
              }
            />
            {/* this route is to view an individual student */}
            <Route
              exact
              path="view-student/:id"
              element={
                <ProtectedRoute>
                  <Student />
                </ProtectedRoute>
              }
            />
            {/* fee routes */}
            <Route exact path="pay-fee" element={<PayFee />} />
            <Route
              exact
              path="outstanding-fee"
              element={
                <ProtectedRoute>
                  <OutstandingFees />
                </ProtectedRoute>
              }
            />
            {/* result routes */}
            <Route
              exact
              path="add-assessment"
              element={
                <ProtectedRoute>
                  <AddAssesment />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="add-psychomotor"
              element={
                <ProtectedRoute>
                  <AddPsychomotor />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="upload-scores"
              element={
                <ProtectedRoute>
                  <UploadAssessment />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="view-first-assessment"
              element={
                <ProtectedRoute>
                  <PreviewAssessment />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="view-sec-assessment"
              element={
                <ProtectedRoute>
                  <PreviewSecAssessment />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="view-exam"
              element={
                <ProtectedRoute>
                  <PreviewExam />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="compute-scores"
              element={
                <ProtectedRoute>
                  <ComputeResult />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="print-result"
              element={
                <ProtectedRoute>
                  <PrintResult />
                </ProtectedRoute>
              }
            />
            {/* staff routes */}
            <Route
              exact
              path="view-staff"
              element={
                <ProtectedRoute>
                  <ViewStaff />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="add-staff"
              element={
                <ProtectedRoute>
                  <AddStaff />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
