import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [studentClass, setStudentClass] = useState("");
  const [fee, setFee] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/student/get-student/${id}`
        );
        const data = await response.json();
        setStudent(data);
        setStudentClass(data.class_id.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentData();
  }, [id]);

  useEffect(() => {
    // Fetch data from API
    // const classId = 1;

    fetch(`http://127.0.0.1:8000/fee/fee-check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => setFee(data[0]))
      .catch((error) => console.log(error));
  }, [id]);
  // console.log(fee);
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Student Details</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h5 className="font-weight-bold m-0">Student Information</h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle"
                    src={student.profile_pics}
                    alt="default"
                    height="150px"
                  />
                  <h3 className="font-weight-bold mt-3">
                    {`${student.surname} ${student.othernames}`}
                  </h3>
                </div>
                <div className="ml-5">
                  <hr />
                  <h6 className="font-weight-bold">
                    ID:{" "}
                    <span className="font-weight-lighter ml-2">
                      
                      <Link to={`/update-student?student_id=${student.admission_id}`}>
                        {student.admission_id}
                      </Link>
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Class:{" "}
                    <span className="font-weight-lighter ml-2">
                      {studentClass}
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Sex:{" "}
                    <span className="font-weight-lighter ml-2">
                      {student.sex}
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Date of Birth:{" "}
                    <span className="font-weight-lighter ml-2">
                      {student.date_of_birth}
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Date of Admission:{" "}
                    <span className="font-weight-lighter ml-2">
                      {student.year_of_admission}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h5 className="font-weight-bold m-0">Parent Information</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="font-weight-bold">
                      Name:{" "}
                      <span className="font-weight-lighter ml-2">
                        {`${student.parent_surname} ${student.parent_othernames}`}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Phone:{" "}
                      <span className="font-weight-lighter ml-2">
                        {student.parent_phone}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Email:{" "}
                      <span className="font-weight-lighter ml-2">
                        {student.parent_email}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Address:{" "}
                      <span className="font-weight-lighter ml-2">
                        {student.parent_address}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Occupation:{" "}
                      <span className="font-weight-lighter ml-2">
                        {student.parent_occupation}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Religion:{" "}
                      <span className="font-weight-lighter ml-2"></span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h5 className="font-weight-bold m-0">Fees</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="font-weight-bold">
                      First Term:{" "}
                      <span className="font-weight-lighter ml-2">
                        {fee ? `Paid ${fee.fee_type.amount} || Ref: ${fee.payment_ref}` : "Not paid"}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Second Term:{" "}
                      <span className="font-weight-lighter ml-2">Not paid</span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Third Term:{" "}
                      <span className="font-weight-lighter ml-2">Not paid</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
