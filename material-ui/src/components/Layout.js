import React from "react";
import { styled } from "@mui/material/styles";
import {
  Drawer,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Tooltip,
  AppBar,
  Toolbar,
} from "@mui/material";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

// const PageST = styled("div")({
//   backgroundColor: "#f9f9f9",
//   width: "100%",
// });
const PageST = styled("main")(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  flexGrow: 1,
  padding: theme.spacing(3),
  minHeight: "100vh",
}));

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar elevation={0} position="fixed" sx={{width:`calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}>
        <Toolbar>
            <Typography sx={{display:'flex',flexGrow:1}}>
            Today is {new Date().toDateString()}
            </Typography>
            <Typography>
                Puran
            </Typography>
        </Toolbar>
      </AppBar>


      {/* Side drawbar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <div>
          <Typography sx={{ p: 3 }} variant="h5">
            Ninja Notes
          </Typography>
        </div>
        {/* list /links */}
        <List>
          {menuItems.map((item) => (
            <Tooltip key={item.text} title={item.text} placement="right" arrow>
              <ListItem
                onClick={() => navigate(item.path)}
                className={location.pathname === item.path ? "active" : ""}
                sx={{
                  cursor: "pointer",
                  "&.active": {
                    backgroundColor: "#d3d3d3",
                    fontWeight: "bold",
                    borderRight: "5px solid red",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>

      <PageST>
        <Toolbar/>
       
        {children}
        </PageST>
    </Box>
  );
};

export default Layout;
