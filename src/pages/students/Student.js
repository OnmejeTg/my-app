import React from 'react'

const Student = () => {
    const imgUrl = "../../assets/img/default.jpg"
  return (
<div>
    <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student Details</h1>
      </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h5 class="font-weight-bold m-0">Student Information</h5>
                </div>
                <div class="card-body">
                    <div class="text-center">
                      <img class="rounded-circle" src={imgUrl} alt="default image" height="150px" />
                      <h3 class="font-weight-bold mt-3">John Doe</h3>
                     
                    </div>
                    <div class="ml-5">
                        <hr/>
                        <h6 class="font-weight-bold" >ID: <span class="font-weight-lighter ml-2" >123/SK/HGT</span></h6>
                        <h6 class="font-weight-bold" >Class: <span class="font-weight-lighter ml-2" >JSS 2</span></h6>
                        <h6 class="font-weight-bold" >Sex: <span class="font-weight-lighter ml-2" >Male</span></h6>
                        <h6 class="font-weight-bold" >Date of Birth: <span class="font-weight-lighter ml-2" >09/06/2005</span></h6>
                        <h6 class="font-weight-bold" >Date of Admission: <span class="font-weight-lighter ml-2" >09/06/2020</span></h6>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card shadow mb-4">
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h5 class="font-weight-bold m-0">Parent Information</h5>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div class="card-body">  
                            <h6 class="font-weight-bold" >Name: <span class="font-weight-lighter ml-2" >James Doe</span></h6>
                            <h6 class="font-weight-bold" >Phone: <span class="font-weight-lighter ml-2" >090787654543</span></h6>
                            <h6 class="font-weight-bold" >Email: <span class="font-weight-lighter ml-2" >james123@gmail.com</span></h6>
                            <h6 class="font-weight-bold" >Address: <span class="font-weight-lighter ml-2" >New Heaven</span></h6>
                            <h6 class="font-weight-bold" >Occupation: <span class="font-weight-lighter ml-2" >Developer</span></h6> 
                            <h6 class="font-weight-bold" >Religion: <span class="font-weight-lighter ml-2" >Christianity</span></h6>   
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card shadow mb-4">
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h5 class="font-weight-bold m-0">Fees</h5>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div class="card-body">
                            <h6 class="font-weight-bold" >First Term: <span class="font-weight-lighter ml-2" >Paid</span></h6>
                            <h6 class="font-weight-bold" >Second Term: <span class="font-weight-lighter ml-2" >Outstanding</span></h6>
                            <h6 class="font-weight-bold" >Third Term: <span class="font-weight-lighter ml-2" >Outstanding</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  </div>
  )
}

export default Student
