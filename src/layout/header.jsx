import React, { Component, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavigationBar from "./NavigationBar";

// import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactSession } from 'react-client-session';

function Header({ pathname }) {
    const navigate = useNavigate();
    return (
        <header>
            <NavigationBar></NavigationBar>
        </header>
    );
}


export default Header;