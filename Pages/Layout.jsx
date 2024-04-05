import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../src/Component/Header";
import Footer from "../src/Component/Footer";

const Layout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;