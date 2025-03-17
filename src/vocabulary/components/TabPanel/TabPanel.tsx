import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

type TabPanelProps = {
  value: number;
  index: number;
  children: ReactNode;
};

export const TabPanel: FC<TabPanelProps> = ({
  value,
  index,
  children,
  ...rest
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...rest}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
