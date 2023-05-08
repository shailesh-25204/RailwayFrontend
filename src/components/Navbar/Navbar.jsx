import React from 'react';
import { HStack, Box, Text, Image, Button } from '@chakra-ui/react';
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
      <header className="header">
        <h1 className="logo"><a href="#">JRCTC</a></h1>
          <ul className="main-nav">
              <li>
                <Link to={"/Home"}>
                  Home
                </Link>
              </li>
              <li><Link to={"/bookings"}>
                Bookings
                </Link>
                </li>
              <li><Link to={"/TrainDetails"}>
                Contacts
                </Link>
                </li>
              <li><Link to={"/"}>
                LogOut
                </Link>
                </li>
          </ul>
      </header> 
    );
}

export default Navbar
