import React from "react";
import DateSelector from "../../components/DateSelector";

const AddStudent = () => {
  return (
    <div>
      <div class="container-fluid">
        <div className="">
          <div className="text-center">
            <div class="card shadow mb-4">
              <div class="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div class="row">
                  <div class="col">
                    <div class="p-3">
                      <div class="text-center">
                        <h2 class="h4 text-gray-900 mb-4">
                          Enter Student Details
                        </h2>
                      </div>
                      <form class="user">
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Surname"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleLastName"
                              placeholder="Other Names"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Sex"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleLastName"
                              placeholder="Date of Birth"
                              
                            />
                            
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Year of Admission"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleLastName"
                              placeholder="Class"
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="parent_surname"
                              placeholder="Parent Surname"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="parent_othername"
                              placeholder="Parent Other Names"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="parent_phone"
                              placeholder="Parent Phone"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="parent_address"
                              placeholder="Parent Address"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="email"
                              class="form-control form-control-user"
                              id="parent_email"
                              placeholder="Parent Email"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="parent_occupation"
                              placeholder="Parent Occupation"
                            />
                          </div>
                        </div>
                        <a href="#" class="btn btn-primary btn-user btn-block">
                          Add Student
                        </a>
                      </form>
                    </div>
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

export default AddStudent;
