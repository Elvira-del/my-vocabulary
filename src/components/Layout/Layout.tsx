import { FC, ReactNode } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Navigation } from "./components/Navigation/Navigation";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
                Vocabulary Builder
              </Typography>
            </Box>
            <Navigation />
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};
