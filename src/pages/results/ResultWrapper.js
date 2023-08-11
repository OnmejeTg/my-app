import { useEffect, useState, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../utils/AuthProvider";
const ResultWarraper = () => {
  const {auth}  = useContext(AuthContext)
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  const toggleSideBar = () => {
    let toggleClass = document.querySelector("body");
    let toggleTop = document.querySelector(".sidebar");
    toggleClass.classList.toggle("sidebar-toggled");
    toggleTop.classList.toggle("toggled");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div id="page-top">
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <NavLink
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="index.html"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              Star Kids <sup>2</sup>
            </div>
          </NavLink>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          {/* <li className="nav-item ">
            <NavLink className="nav-link" to="">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseStudent"
              aria-expanded="true"
              aria-controls="collapseStudent"
            >
              <i className="fas fa-user-graduate"></i>
              <span>Students</span>
            </a>
            <div
              id="collapseStudent"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <NavLink className="collapse-item" to="/active-students" end>
                  Active student
                </NavLink>
                <NavLink className="collapse-item" to="/add-student">
                  Add student
                </NavLink>
                <NavLink className="collapse-item" to="/upload-students">
                  Upload students
                </NavLink>
              </div>
            </div>
          </li> */}
          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsFee"
              aria-expanded="true"
              aria-controls="collapsFee"
            >
              <i className="fas fa-dollar-sign"></i>
              <span>Fee</span>
            </a>
            <div
              id="collapsFee"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <NavLink className="collapse-item" to="/pay-fee">
                  Pay fee
                </NavLink>
                <NavLink className="collapse-item" to="/outstanding-fee" end>
                  Outstanding
                </NavLink>
              </div>
            </div>
          </li> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapaseResult"
              aria-expanded="true"
              aria-controls="collapaseResult"
            >
              <i className="fas fa-award"></i>
              <span>Result</span>
            </a>
            <div
              id="collapaseResult"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <NavLink className="collapse-item" to="add-assessment">
                  Add assessment
                </NavLink>
                <NavLink className="collapse-item" to="add-psychomotor">
                  Add Psychomotor
                </NavLink>
                <NavLink
                  className="collapse-item"
                  to="view-first-assessment"
                  end
                >
                  View First Assessment
                </NavLink>
                <NavLink
                  className="collapse-item"
                  to="view-sec-assessment"
                  end
                >
                  View Second Assessment
                </NavLink>
                <NavLink className="collapse-item" to="view-exam" end>
                  View Exam
                </NavLink>
                <NavLink className="collapse-item" to="upload-scores" end>
                  Upload Scores
                </NavLink>
                {/* <NavLink className="collapse-item" to="/compute-scores" end>
                  Compute
                </NavLink>
                <NavLink className="collapse-item" to="/print-result" end>
                  Print result
                </NavLink> */}
              </div>
            </div>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseStaff"
              aria-expanded="true"
              aria-controls="collapseStaff"
            >
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Staff</span>
            </a>
            <div
              id="collapseStaff"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <NavLink className="collapse-item" to="/view-staff">
                  View Staff
                </NavLink>
                <NavLink className="collapse-item" to="/add-staff" end>
                  Add Staff
                </NavLink>
              </div>
            </div>
          </li> */}

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
              onClick={toggleSideBar}
              // onClick={handleToggle}
            ></button>
          </div>
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
                // onClick={handleToggle}
                onClick={toggleSideBar}
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* <!-- Topbar Search --> */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                     Welcome {auth.user.user_info.surname} {auth.user.user_info.othernames}
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="../../assets/img/undraw_profile.svg"
                    />
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <Outlet />
          </div>
          <div
            className="modal fade"
            id="logoutModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={logout}
                    type="button"
                    data-dismiss="modal"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
    </div>
  );
};

export default ResultWarraper;
