import { FC, useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigationList } from "../NavigationList/NavigationList";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton
          size="large"
          aria-label="Open menu"
          color="inherit"
          sx={[isOpen && { display: "none" }]}
        >
          <MenuIcon onClick={handleOpenDrawer} />
        </IconButton>
      </Box>
      <Drawer open={isOpen} onClose={handleCloseDrawer} anchor="right">
        <NavigationList />
      </Drawer>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <NavigationList />
      </Box>
    </>
  );
};
