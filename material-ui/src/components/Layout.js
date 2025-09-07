import React from "react";
import { styled } from "@mui/material/styles";

const PageST = styled("div")({
  backgroundColor: "#f9f9f9",
  width: "100%",
});

const Layout = ({ children }) => {
  return (
    <div>
      {/* App Bar */}

      {/* Side drawbar */}

      <PageST>{children}</PageST>
    </div>
  );
};

export default Layout;
