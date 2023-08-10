import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


import AdminProtected from "./utils/AdminProtected";

import AdminWrapper from "./pages/admin/AdminWrapper";
import StudentWrapper from "./pages/admin/StudentWrapper";
import AddStudent from "./pages/admin/AddStudent";
import UploadStudents from "./pages/admin/UploadStudents";
import ActiveStudent from "./pages/admin/ActiveStudents";
import Student from "./pages/admin/Student";
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
import UpdateStudent from "./pages/admin/UpdateStudent";
import PrintResult from "./pages/results/PrintResult";
import Login from "./pages/Login";
import StaffProtected from "./utils/StaffProtected";
import StudentProtected from "./utils/StudentProtected";
import ResultWarraper from "./pages/results/ResultWrapper";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <AdminProtected>
                <AdminWrapper />
              </AdminProtected>
            }
          >
            {/* DashBoard */}
            <Route path="" element={<DashBoard />} />

            {/* Student routes */}
            <Route
              path="active-students"
              element={
                <AdminProtected>
                  <ActiveStudent />
                </AdminProtected>
              }
            />
            <Route
              path="add-student"
              element={
                <AdminProtected>
                  <AddStudent />
                </AdminProtected>
              }
            />
            <Route
              path="upload-students"
              element={
                <AdminProtected>
                  <UploadStudents />
                </AdminProtected>
              }
            />
            <Route
              path="update-student"
              element={
                <AdminProtected>
                  <UpdateStudent />
                </AdminProtected>
              }
            />
            <Route
              path="view-student/:id"
              element={
                <AdminProtected>
                  <Student />
                </AdminProtected>
              }
            />

            {/* Fee routes */}

            <Route
              path="pay-fee"
              element={
                <AdminProtected>
                  <PayFee />
                </AdminProtected>
              }
            />
            <Route
              path="outstanding-fee"
              element={
                <AdminProtected>
                  <OutstandingFees />
                </AdminProtected>
              }
            />

            {/* Staff routes */}
            <Route
              path="view-staff"
              element={
                <AdminProtected>
                  <ViewStaff />
                </AdminProtected>
              }
            />
            <Route
              path="add-staff"
              element={
                <AdminProtected>
                  <AddStaff />
                </AdminProtected>
              }
            />
            {/* Result routes */}
            <Route
              path="add-assessment"
              element={
                <StaffProtected>
                  <AddAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="add-psychomotor"
              element={
                <StaffProtected>
                  <AddPsychomotor />
                </StaffProtected>
              }
            />
            <Route
              path="upload-scores"
              element={
                <StaffProtected>
                  <UploadAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="view-first-assessment"
              element={
                <StaffProtected>
                  <PreviewAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="view-sec-assessment"
              element={
                <StaffProtected>
                  <PreviewSecAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="view-exam"
              element={
                <StaffProtected>
                  <PreviewExam />
                </StaffProtected>
              }
            />
            <Route
              path="compute-scores"
              element={
                <AdminProtected>
                  <ComputeResult />
                </AdminProtected>
              }
            />
            <Route
              path="print-result"
              element={
                <StudentProtected>
                  <PrintResult />
                </StudentProtected>
              }
            />
          </Route>

          {/* Result routes */}
          <Route
            path="result/"
            element={
              <StaffProtected>
                <ResultWarraper />
              </StaffProtected>
            }
          >
            <Route
              path="add-assessment"
              element={
                <StaffProtected>
                  <AddAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="add-psychomotor"
              element={
                <StaffProtected>
                  <AddPsychomotor />
                </StaffProtected>
              }
            />
            <Route
              path="upload-scores"
              element={
                <StaffProtected>
                  <UploadAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="view-first-assessment"
              element={
                <StaffProtected>
                  <PreviewAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="view-sec-assessment"
              element={
                <StaffProtected>
                  <PreviewSecAssessment />
                </StaffProtected>
              }
            />
            <Route
              path="view-exam"
              element={
                <StaffProtected>
                  <PreviewExam />
                </StaffProtected>
              }
            />
            <Route
              path="compute-scores"
              element={
                <AdminProtected>
                  <ComputeResult />
                </AdminProtected>
              }
            />
            <Route
              path="print-result"
              element={
                <StudentProtected>
                  <PrintResult />
                </StudentProtected>
              }
            />
          </Route>
          <Route
            path="student/"
            element={
              <StudentProtected>
                <StudentWrapper />
              </StudentProtected>
            }
          >
            <Route
              path="print-result"
              element={
                <StudentProtected>
                  <PrintResult />
                </StudentProtected>
              }
            />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
