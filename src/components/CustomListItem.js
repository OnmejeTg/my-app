import React from "react";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const CustomListItem = ({
  primaryText,
  secondaryText,
  avatarSrc,
  altText,
  msg,
  date,
}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={altText} src={avatarSrc} />
      </ListItemAvatar>
      <ListItemText
        primary={primaryText}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {secondaryText}
            </Typography>
            {` —${msg}`}
            <p><small>Announcement Date: {date}</small></p>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default CustomListItem;
