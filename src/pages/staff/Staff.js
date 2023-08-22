import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Staff = () => {
  const [staff, setStaff] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/sch-staff/${id}`);
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentData();
  }, [id]);

  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Staff Details</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h5 className="font-weight-bold m-0">Staff Information</h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle"
                    src={staff.profile_pics}
                    alt="default"
                    height="150px"
                  />
                  <h3 className="font-weight-bold mt-3">
                    {`${staff.surname} ${staff.othernames}`}
                  </h3>
                </div>
                <div className="ml-5">
                  <hr />
                  <h6 className="font-weight-bold">
                    ID:{" "}
                    <span className="font-weight-lighter ml-2">
                      <Link to={`/student/update?student_id=${staff.staff_id}`}>
                        {staff.staff_id}
                      </Link>
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Sex:{" "}
                    <span className="font-weight-lighter ml-2">
                      {staff.sex}
                    </span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Phone:{" "}
                    <span className="font-weight-lighter ml-2">
                      {staff.phone}
                    </span>
                  </h6>
                  {staff.email ? (
                    <h6 className="font-weight-bold">
                      Email:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.email}
                      </span>
                    </h6>
                  ) : null}

                  <h6 className="font-weight-bold">
                    Date of Birth:{" "}
                    <span className="font-weight-lighter ml-2">
                      {staff.dob}th-{staff.mob}-{staff.yob}
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
                    <h5 className="font-weight-bold m-0">Academic Details</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="font-weight-bold">
                      Highest Qualification:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.qualification}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Discipline:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.discipline}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h5 className="font-weight-bold m-0">
                      Appointment Details
                    </h5>
                  </div>
                  <div className="card-body">
                    <h6 className="font-weight-bold">
                      Appointment Date:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.appointment_date}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Appointment Type:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.appointment_type}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Designation:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.designation}
                      </span>
                    </h6>
                    <h6 className="font-weight-bold">
                      Class in Charge:{" "}
                      <span className="font-weight-lighter ml-2">
                        {staff.grade_in_charge ? staff.grade_in_charge.name : "N/A"}
                      </span>
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

export default Staff;
