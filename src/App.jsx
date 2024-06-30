import React from 'react';
import Header from "./component/Header.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <Header></Header>
            <Outlet/>
        </>
    );
}

export default App
