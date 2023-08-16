import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CustomListItem from "../../components/CustomListItem";
import axios from "../../api/axios";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const getAnnouncements = async () => {
    try {
      const response = await axios.get("/setup/list-create-announcement");
      setAnnouncements(response.data.results);
      // console.log(announcements)
    } catch (error) {
      console.error("Error fetching announcement:", error);
      // Handle the error, e.g., set an error state or show a message to the user.
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAnnouncements();
    };
    fetchData();
  }, []);

  return (
    <div className="row container">
      {/* <!-- Area Chart --> */}
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <div className="d-sm-flex align-items-center justify-content-between mb">
              <h1 className="h3 mb-0 text-gray-800">Announcements</h1>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <List
              sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}
            >
              {announcements && announcements.length > 0 && (
                <React.Fragment>
                  {announcements.map((announcement, index) => (
                    <React.Fragment key={index}>
                      <CustomListItem
                        primaryText={announcement.subject}
                        secondaryText="Admin"
                        avatarSrc="/static/images/avatar/1.jpg"
                        altText="A"
                        msg={announcement.body}
                        date={announcement.created_at}
                      />
                      {index < announcements.length - 1 && (
                        <Divider variant="inset" component="li" />
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              )}
            </List>
          </div>
        </div>
      </div>

      {/* <!-- Pie Chart --> */}
      <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <div className="d-sm-flex align-items-center justify-content-between mb">
              <h1 className="h3 mb-0 text-gray-800">Events</h1>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <CustomListItem
                primaryText="2023 GRADUATION CEREMONY"
                secondaryText="Admin"
                avatarSrc="/static/images/avatar/1.jpg"
                altText="Tmy Sharp"
                date="12-12-2023"
                msg="The 2023 graduation will come up on the 6th of August"
              />
              <Divider variant="inset" component="li" />
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
