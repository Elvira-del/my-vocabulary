import { FC, SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { VocabularyElem } from "src/store/store";
import { TabPanel } from "../TabPanel/TabPanel";
import { VocabularyList } from "../VocabularyList/VocabularyList";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

type TabsListProps = {
  data: VocabularyElem[];
};

export const TabsList: FC<TabsListProps> = ({ data }) => {
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
        <VocabularyList data={data.filter(({ unlearned }) => !!unlearned)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VocabularyList data={data.filter(({ learned }) => !!learned)} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VocabularyList data={data.filter(({ favorite }) => !!favorite)} />
      </TabPanel>
    </Box>
  );
};
