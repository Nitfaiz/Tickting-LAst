import React from "react";
import Button from "react-bootstrap/Button";
import { MdChat } from "react-icons/md"
import { FcBusinessman, FcFrame,  FcBusinessContact, FcShare, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic } from "react-icons/fc"
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBell, BsFileSpreadsheetFill} from "react-icons/bs"
import { FaMediumM} from "react-icons/fa"
import { GoHome } from "react-icons/go"
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineContactSupport } from "react-icons/md"
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

function Recomamendent() {



  
    return (
        <div className='big-box d-flex' style={{ height: "100vh", width: "100%" }} >

            <div className='left-box' style={{ width: "5.1vw", backgroundColor: "#183247", height: "150vh" }}>

                <ul className="new-nav" style={{ color: "white", marginLeft: "-1vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10vh", position: "fixed" }}>


                    <Link to={{ pathname: '/dashboard/default' }}><li data-placement="right" title="Dashboard" data-toggle="tooltip" className="my-lv" style={{ marginTop: "0vh" }}><FcBusinessman style={{ fontSize: "28px" }} /></li></Link>


                    <Link  to={{pathname: '/dashboard/tickets'}}> <li data-placement="right" title="Tickets" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcFrame style={{ fontSize: "28px" }} /></li></Link>

                    <li data-placement="right" title="Contact" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcBusinessContact style={{ fontSize: "28px" }} /></li>

                    <Link  to={{pathname: '/socialsupport'}}> <li data-placement="right" title="Social" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcShare style={{ fontSize: "28px" }} /></li> </Link>

                    <Link  to={{pathname: '/solutions'}}> <li data-placement="right" title="Solutions" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcViewDetails style={{ fontSize: "28px" }} /></li></Link>

                    <li data-placement="right" title="Fourms" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcSms style={{ fontSize: "28px" }} /></li>

                    <li data-placement="right" title="Analytics" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcPositiveDynamic style={{ fontSize: "28px" }} /></li>

                    <li data-placement="right" title="Admin" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcAutomatic style={{ fontSize: "28px" }} /></li>

                </ul>


            </div>


            <div className='right-box' style={{ width: "100vw", backgroundColor: "lightgray", height: "110vh" }}>

                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "hsla(155, 83%, 24%, 1)", height: "70px" }}>

                    <Navbar.Brand href="#home" style={{ marginLeft: "1vw", color: "white" }}><span style={{ fontSize: "17px" }}>Rec features </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto" style={{ marginLeft: "10vw" }}>

                            &nbsp;

                            <Nav.Link href="#features"><span style={{ color: "orange" }}>your trial ends in 21 days</span></Nav.Link>

                             <Link to={{ pathname: '/recomandedfeatures' }}><Button  variant='light' className='recom' style={{ marginLeft: "16px", marginRight: "2px" }}>Recommended features
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

                                <input type="search" placeholder=' &nbsp;search' className='search-input' />
                                &nbsp;
                                &nbsp;

                                <BsBell style={{ fontSize: "23px" }} />
                                &nbsp;
                                &nbsp;
                                <MdOutlineContactSupport style={{ fontSize: "26px" }} />
                                &nbsp;
                                &nbsp;
                                <BsFileSpreadsheetFill style={{ fontSize: "21px" }} />
                                &nbsp;
                                &nbsp;
                                <GoHome style={{ fontSize: "23px" }} />
                                &nbsp;
                                &nbsp;
                                <FaMediumM style={{ fontSize: "23px" }} />
                                &nbsp;
                            </div>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

                <div style={{  width:"93vw", backgroundColor: "white", padding: "5vw" }}>

                    <div style={{ display: "flex",flexDirection:"column" }}>
                        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#12344d" }}>Recommended features</h2>

                        <pre>Current Plan: Enterprise</pre>


                        <div style={{ display: "flex", flexDirection: "row",justifyContent:"flex-end" }}>
                            <h5>Explore features by plans</h5> &nbsp;&nbsp;&nbsp;
                            <Button className='get-started-respo' style={{ marginRight: "2px", marginLeft: "20px", backgroundColor: "#12344d" }}>Subscribe now</Button>
                        </div>
                    </div>

                    <div style={{marginTop: "5vh" }}>

                        <Row className="col-md-12" style={{ margin: "0.5vw", marginTop: "2vh"  }}>

                            <Col className="col-md-4" id="one-card" style={{ marginTop: "2vh" }} >

                                <Card>
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/customer-fields-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"14px",color:"green",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Resolve faster&nbsp;</Card.Title>
                                        <Card.Title>Customer Fields</Card.Title>

                                        <Card.Text style={{color:"black"}}>
                                        Capture customer information and history to give agents context and customers a break from repeating themselves
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-4" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/business-hours-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>

                                    <Card.Title style={{fontSize:"14px",color:"black",backgroundColor:"lightgray",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Handle more tickets &nbsp;</Card.Title>
                                        <Card.Title>Business Hours</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Define working hours and holidays to set expectations with customers
                                        Define working hours and  
                                       
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="col-md-4" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/ticket-fields-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"14px",color:"green",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Resolve  faster &nbsp; </Card.Title>
                                        <Card.Title>Ticket Fields </Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Customize your ticket type to categorize, prioritize, and route tickets efficiently.
                                        prioritize, and route tickets efficiently.
                                       
                                        
                                      
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col className="col-md-4" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/email-notifications-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                    <Card.Title style={{fontSize:"14px",color:"green",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Resolve  faster &nbsp; </Card.Title>
                                        <Card.Title>Email Notifications</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Keep agents and customers apprised on updates to new and older tickets.
                                        Keep agents and customers 
                                        
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-4" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/automations-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                    <Card.Title style={{fontSize:"14px",color:"black",backgroundColor:"lightgray",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Handle more tickets &nbsp;</Card.Title>
                                        <Card.Title>Automations</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Eliminate repetitive tasks such as categorization and routing by creating
                                        Keep agents 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>




                            <Col className="col-md-4" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/canned-responses-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"14px",color:"blue",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Repond  faster &nbsp; </Card.Title>
                                        <Card.Title>Canned Responses</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Pre-create replies to quickly insert them in responses to customers
                                        Keep agents and customers 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>



                </div>





                <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>

            </div>


        </div>
    );
}

export default Recomamendent;
