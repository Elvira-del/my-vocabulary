import { FC, SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel } from "../TabPanel/TabPanel";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export const TabsList: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs onChange={handleChange} value={value} aria-label="tabs">
          <Tab label="Unlearned" {...a11yProps(0)} />
          <Tab label="Learned" {...a11yProps(1)} />
          <Tab label="Favorite" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Unlearned words
      </TabPanel>
      <TabPanel value={value} index={1}>
        Learned words
      </TabPanel>
      <TabPanel value={value} index={2}>
        Favorite words
      </TabPanel>
    </Box>
  );
};
