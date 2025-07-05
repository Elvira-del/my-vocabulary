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
  padding: { xs: 2, sm: 1 },
  transition: "0.4s ease-out",
  "&.active": {
    color: "primary.main",
    backgroundColor: "primary.light",
    transition: "0.4s ease-in",
  },
};

const navItems = [
  { label: "practice page", to: "/", icon: <SchoolIcon /> },
  { label: "vocabulary page", to: "/vocabulary", icon: <BookmarkIcon /> },
];

export const NavigationList: FC = () => {
  return (
    <Box component={"nav"}>
      <Stack
        component={"ul"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2 }}
        sx={navStackStyles}
      >
        {navItems.map(({ label, to, icon }) => (
          <ListItem key={label} sx={{ padding: 0 }}>
            <IconButton
              component={NavLink}
              to={to}
              size="large"
              aria-label={label}
              color="inherit"
              sx={navLinkStyles}
            >
              {icon}
            </IconButton>
          </ListItem>
        ))}
      </Stack>
    </Box>
  );
};
