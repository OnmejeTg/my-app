import { useState } from "react";
import { Button, Input } from "@mui/material";

const UploadStudents = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Perform upload logic with the selectedFile
    console.log(selectedFile);
  };

  return (
    <div class="container-fluid">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-7">
              <div class="p-5">
                <h1 class="h4 text-gray-900 mb-4">Upload Students file</h1>
                <form action="">
                  <div class="form-group row">
                    <div class="col-lg-6">
                      <Input
                        onChange={handleFileChange}
                        type="file"
                        className="custom-input form-control form-control-user"
                      ></Input>
                      <small>accepted formats: xlsx, xls, odf</small>
                    </div>
                  </div>

                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleUpload}
                  >
                    Upload
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadStudents;
