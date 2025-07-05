import { FC } from "react";
import { NavLink } from "react-router";
import { Box, IconButton, ListItem, Stack } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SchoolIcon from "@mui/icons-material/School";

const navStackStyles = {
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
  padding: 0,
};

const navLinkStyles = {
  padding: { xs: 4, sm: 2 },
  transition: "0.4s ease-out",
  "&.active": {
    color: "primary.main",
    backgroundColor: "primary.light",
    transition: "0.4s ease-in",
  },
};

export const NavigationList: FC = () => {
  return (
    <Box component={"nav"}>
      <Stack
        component={"ul"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2 }}
        sx={navStackStyles}
      >
        <ListItem sx={{ padding: 0 }}>
          <IconButton
            component={NavLink}
            to="/"
            size="large"
            aria-label="Practice"
            color="inherit"
            sx={navLinkStyles}
          >
            <SchoolIcon />
          </IconButton>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <IconButton
            component={NavLink}
            to="/vocabulary"
            size="large"
            aria-label="Vocabulary"
            color="inherit"
            sx={navLinkStyles}
          >
            <BookmarkIcon />
          </IconButton>
        </ListItem>
      </Stack>
    </Box>
  );
};
