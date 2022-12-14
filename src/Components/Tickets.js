import React from "react";
import Button from "react-bootstrap/Button";
import { MdChat } from "react-icons/md"
import { FcBusinessman, FcFrame, FcBusinessContact, FcShare, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic } from "react-icons/fc"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBell, BsFileSpreadsheetFill } from "react-icons/bs"
import { FaMediumM } from "react-icons/fa"
import { GoHome } from "react-icons/go"
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineContactSupport } from "react-icons/md"
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import {  Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { RxDotFilled } from "react-icons/rx"
import { FiUserPlus } from "react-icons/fi"
import { FaWaveSquare } from "react-icons/fa"
import { MdEmail } from 'react-icons/md';

function Tickets() {

   

    return (
        <div className='big-box d-flex' style={{ height: "100vh", width: "100%" }} >

            <div className='left-box' style={{ width: "5.1vw", backgroundColor: "#183247", height: "150vh" }}>

                <ul className="new-nav" style={{ color: "white", marginLeft: "-1vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10vh", position: "fixed" }}>


                    <Link to={{ pathname: '/dashboard/default' }}><li data-placement="right" title="Dashboard" data-toggle="tooltip" className="my-lv" style={{ marginTop: "0vh" }}><FcBusinessman style={{ fontSize: "28px" }} /></li></Link>


                    <Link to={{ pathname: '/dashboard/tickets' }}> <li data-placement="right" title="Tickets" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcFrame style={{ fontSize: "28px" }} /></li></Link>

                    <li data-placement="right" title="Contact" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcBusinessContact style={{ fontSize: "28px" }} /></li>

                    <Link to={{ pathname: '/socialsupport' }}> <li data-placement="right" title="Social" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcShare style={{ fontSize: "28px" }} /></li> </Link>

                    <Link to={{ pathname: '/solutions' }}> <li data-placement="right" title="Solutions" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcViewDetails style={{ fontSize: "28px" }} /></li></Link>


                    <li data-placement="right" title="Fourms" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcSms style={{ fontSize: "28px" }} /></li>

                    <li data-placement="right" title="Analytics" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcPositiveDynamic style={{ fontSize: "28px" }} /></li>

                    <li data-placement="right" title="Admin" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcAutomatic style={{ fontSize: "28px" }} /></li>

                </ul>


            </div>


            <div className='right-box' style={{ width: "100vw", backgroundColor: "lightgray", height: "110vh" }}>

                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "hsla(155, 83%, 24%, 1)", height: "70px" }}>

                    <Navbar.Brand href="#home" style={{ marginLeft: "1vw", color: "white" }}><span style={{ fontSize: "17px" }}>All tickets </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto" style={{ marginLeft: "10vw" }}>&nbsp;
                            <Nav.Link href="#features"><span style={{ color: "orange" }}>your trial ends in 21 days</span></Nav.Link>

                            <Link to={{ pathname: '/recomandedfeatures' }}><Button variant='light' className='recom' style={{ marginLeft: "16px", marginRight: "2px" }}>Recommended features
                            </Button></Link>

                            <Link to={{ pathname: '/getstarted' }}><Button variant='light' className='get-started-respo' style={{ marginRight: "2px", marginLeft: "20px" }}>Get started</Button></Link>

                            <Dropdown >
                                <Dropdown.Toggle className='new-respo' variant="light" id="dropdown-basic" style={{ marginLeft: "16px" }} >
                                    New
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className='header-right d-flex align-items-center ' style={{ color: "white" }} >

                                <input type="search" placeholder=' &nbsp;search' className='search-input' /> &nbsp; &nbsp;

                                <BsBell style={{ fontSize: "23px" }} /> &nbsp; &nbsp;
                                <MdOutlineContactSupport style={{ fontSize: "26px" }} />&nbsp; &nbsp;
                                <BsFileSpreadsheetFill style={{ fontSize: "21px" }} />&nbsp; &nbsp;
                                <GoHome style={{ fontSize: "23px" }} />
                                &nbsp;&nbsp;
                                <FaMediumM style={{ fontSize: "23px" }} />
                                &nbsp;
                            </div>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>


                <div className="second-div-sort" style={{ height: "65px", backgroundColor: "white", width: "94vw" }}> &nbsp;
                    < Form.Check type="checkbox" style={{ marginLeft: "8px" }} label="Sort by : Date created" />
                </div>

                <div className="main-div-card">
                    <div style={{ width: "74.9vw", marginLeft: "5.5vw", marginTop: "4vh" }}>
                        <Row className="col-md-12">

                            <Col className="col-md-9" style={{ backgroundColor: "white", display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" />
                                </Form.Group>
                                <FcBusinessman style={{ fontSize: "48px" }} />

                                <div style={{ paddingLeft: "16px", marginTop: "12px" }}> <h6 style={{ width: "72px", backgroundColor: "#ffecf0", color: "#c82124", border: "1px solid #ffd0d6", fontSize: "13px" }}>&nbsp; Overdue &nbsp; </h6>

                                    <p>Recieved a broken TV #3</p>

                                    <p><MdEmail /> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>


                                </div>

                            </Col>


                            <Col className="col-md-3" style={{ backgroundColor: "white" }}>

                                <p><RxDotFilled />  Low</p>
                                <p style={{ lineHeight: "2px" }}> <FiUserPlus /> &nbsp;Escalation</p>
                                <p> <FaWaveSquare /> &nbsp;Open</p>



                            </Col>

                        </Row>


                    </div>


                    <div style={{ width: "74.9vw", marginLeft: "5.5vw", marginTop: "2vh" }}>
                        <Row className="col-md-12">

                            <Col className="col-md-9" style={{ backgroundColor: "white", display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" />
                                </Form.Group>
                                <FcBusinessman style={{ fontSize: "48px" }} />

                                <div style={{ paddingLeft: "16px", marginTop: "12px" }}> <h6 style={{ width: "72px", backgroundColor: "#ffecf0", color: "#c82124", border: "1px solid #ffd0d6", fontSize: "13px" }}>&nbsp; Overdue &nbsp; </h6>
                                    <p>Recieved a broken TV #3</p>
                                    <p><MdEmail /> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
                                </div>
                            </Col>

                            <Col className="col-md-3" style={{ backgroundColor: "white" }}>

                                <p><RxDotFilled />  Low</p>
                                <p style={{ lineHeight: "2px" }}> <FiUserPlus /> &nbsp;Escalation</p>
                                <p> <FaWaveSquare /> &nbsp;Open</p>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ width: "74.9vw", marginLeft: "5.5vw", marginTop: "2vh" }}>
                        <Row className="col-md-12">

                            <Col className="col-md-9" style={{ backgroundColor: "white", display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" />
                                </Form.Group>
                                <FcBusinessman style={{ fontSize: "48px" }} />

                                <div style={{ paddingLeft: "16px", marginTop: "12px" }}> <h6 style={{ width: "72px", backgroundColor: "#ffecf0", color: "#c82124", border: "1px solid #ffd0d6", fontSize: "13px" }}>&nbsp; Overdue &nbsp; </h6>
                                    <p>Recieved a broken TV #3</p>
                                    <p><MdEmail /> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
                                </div>
                            </Col>

                            <Col className="col-md-3" style={{ backgroundColor: "white" }}>

                                <p><RxDotFilled />  Low</p>
                                <p style={{ lineHeight: "2px" }}> <FiUserPlus /> &nbsp;Escalation</p>
                                <p> <FaWaveSquare /> &nbsp;Open</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>
        </div>
    );
}

export default Tickets;
