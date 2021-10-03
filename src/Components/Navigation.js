import React from "react";

import {Navbar} from "react-bootstrap";
//import { Container } from "react-bootstrap";
import {Nav} from "react-bootstrap";

import {Form} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
//import WhatshotIcon from '@mui/icons-material/Whatshot';
import "./Components.css"

function Navigation() {
    return (
        <div className="onTop">
        <Navbar className="Navigation d-flex justify-content-between px-5 align-items-center" bg="black" variant={"dark"} expand="lg">
            <div className="frontStyle">
                <Navbar.Brand
                    style={{
                        fontSize: "2em",
                    }}
                >
                    Pottr<ScatterPlotIcon fontSize="small"/>
                </Navbar.Brand>
            </div>
            <div className="searchBar">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outlined"><SearchIcon className="searchIcon"/></Button>
                </Form>
            </div>
            <div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link>
                            <Link  className="wordFront" exact to="/Compete">
                                Compete
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link exact to="/Game">
                                <SportsEsportsIcon className="rightIcon"/>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link exact to="/about">
                                <InfoIcon className="rightIcon"/>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        </div>
    )
}

export default Navigation;