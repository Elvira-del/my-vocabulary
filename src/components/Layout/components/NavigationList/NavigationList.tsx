import { FC } from "react";
import { Link } from "react-router";
import { Box, IconButton, ListItem, Stack } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SchoolIcon from "@mui/icons-material/School";

export const NavigationList: FC = () => {
  return (
    <Box component={"nav"}>
      <Stack
        component={"ul"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <ListItem sx={{ padding: 0 }}>
          <IconButton
            component={Link}
            to="/"
            size="large"
            aria-label="Practice"
            color="inherit"
            sx={{ padding: { xs: 4, sm: 2 } }}
          >
            <SchoolIcon />
          </IconButton>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <IconButton
            component={Link}
            to="/vocabulary"
            size="large"
            aria-label="Vocabulary"
            color="inherit"
            sx={{ padding: { xs: 4, sm: 2 } }}
          >
            <BookmarkIcon />
          </IconButton>
        </ListItem>
      </Stack>
    </Box>
  );
};
