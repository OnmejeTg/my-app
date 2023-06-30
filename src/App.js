import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import DateSelector from "./components/DateSelector";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import StudentWrapper from "./pages/students/StudentWrapper";
import AddStudent from "./pages/students/AddStudent";
import UploadStudents from "./pages/students/UploadStudents";
import ActiveStudent from "./pages/students/ActiveStudents";
import Student from "./pages/students/Student";
import DashBoard from "./pages/DashBoard";
import PayFee from "./pages/fees/PayFee";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route exact path="" element={<StudentWrapper />}>
            <Route exact path="" element={<DashBoard />} />
            <Route exact path="active" element={<ActiveStudent />} />
            <Route exact path="add" element={<AddStudent />} />
            <Route exact path="upload" element={<UploadStudents />} />
            <Route exact path="student" element={<Student />} />
            <Route exact path="pay-fee" element={<PayFee/>} />
          </Route>
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
