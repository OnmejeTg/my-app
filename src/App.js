import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import DateSelector from "./components/DateSelector";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import StudentWrapper from "./pages/students/StudentWrapper";
import AddStudent from "./pages/students/AddStudent";
import UploadStudents from "./pages/students/UploadStudents";
import ActiveStudent from "./pages/students/ActiveStudents";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route exact path="students" element={<StudentWrapper />}>
            <Route exact path="active" element={<ActiveStudent />} />
            <Route exact path="add" element={<AddStudent />} />
            <Route exact path="upload" element={<UploadStudents />} />
          </Route>
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
