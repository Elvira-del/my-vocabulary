import { FC, ReactNode } from "react";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import MoreIcon from "@mui/icons-material/MoreVert";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ justifyContent: "right" }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="Favorite words"
                color="inherit"
              >
                <StarIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label="Vocabulary" color="inherit">
                <BookmarkIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="Show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};
