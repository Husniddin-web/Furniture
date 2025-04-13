import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutWrapper, MainWrapper } from "./layout.style";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <div>
        <Navbar />
        <MainWrapper>{children}</MainWrapper>
      </div>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
