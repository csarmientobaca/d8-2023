import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png"



function NavTop() {
    return (
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
            <Navbar.Brand href="#">
                <Image src={logo} style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">TV Shows</Nav.Link>
                    <Nav.Link href="#">Movies</Nav.Link>
                    <Nav.Link href="#">Recently Added</Nav.Link>
                    <Nav.Link href="#">My List</Nav.Link>
                </Nav>
                <FaSearch className="icons" />
                <div id="kids">KID</div>
                <FaBell className="icons" />
                <FaUser className="icons" />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavTop;