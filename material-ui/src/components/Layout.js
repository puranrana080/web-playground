import React from "react";
import { styled } from "@mui/material/styles";
import { Drawer, Typography, Box } from "@mui/material";

const drawerWidth = 240;

const PageST = styled("div")({
  backgroundColor: "#f9f9f9",
  width: "100%",
});

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}

      {/* Side drawbar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <div>
          <Typography variant="h5">Ninja Notes</Typography>
        </div>
      </Drawer>

      <PageST>{children}</PageST>
    </Box>
  );
};

export default Layout;
