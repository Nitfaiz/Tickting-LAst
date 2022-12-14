import React  from "react";
import Button from "react-bootstrap/Button";
import { MdChat } from "react-icons/md"
import { FcBusinessman, FcFrame, FcClock, FcBusinessContact, FcShare, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic } from "react-icons/fc"
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBell, BsFileSpreadsheetFill, BsEmojiSmile, BsEmojiAngry} from "react-icons/bs"
import { FaMediumM } from "react-icons/fa"
import { GoHome } from "react-icons/go"
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineContactSupport } from "react-icons/md"
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

function Dashboard() {

    return (
        <div className='big-box d-flex' style={{ height: "100vh", width: "100%" }} >

            <div className='left-box' style={{ width: "5.1vw", backgroundColor: "#183247", height: "150vh" }}>

                <ul className="new-nav" style={{ color: "white", marginLeft: "-1vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10vh", position: "fixed" }}>


                    <Link to={{ pathname: '/dashboard/default' }}><li data-placement="right" title="Dashboard" data-toggle="tooltip" className="my-lv" style={{ marginTop: "0vh" }}><FcBusinessman style={{ fontSize: "28px" }} /></li></Link>


                    <Link  to={{pathname: '/dashboard/tickets'}}> <li data-placement="right" title="Tickets" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcFrame style={{ fontSize: "28px" }} /></li></Link>

                   <li data-placement="right" title="Contact" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcBusinessContact style={{ fontSize: "28px" }} /></li> 

                   <Link  to={{pathname: '/socialsupport'}}> <li data-placement="right" title="Social" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcShare style={{ fontSize: "28px" }} /></li> </Link>

                   <Link  to={{pathname: '/solutions'}}> <li data-placement="right" title="Solutions" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcViewDetails style={{ fontSize: "28px" }} /> </li> </Link>

                    <li data-placement="right" title="Fourms" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcSms style={{ fontSize: "28px" }} /> </li>

                    <li data-placement="right" title="Analytics" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcPositiveDynamic style={{ fontSize: "28px" }} /> </li>

                    <li data-placement="right" title="Admin" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcAutomatic style={{ fontSize: "28px" }} /> </li>

                </ul>


            </div>


            <div className='right-box' style={{ width: "100vw", backgroundColor: "lightgray", height: "110vh" }}>

                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "hsla(155, 83%, 24%, 1)", height: "70px" }}>

                    <Navbar.Brand href="#home" style={{ marginLeft: "1vw", color: "white" }}><span style={{ fontSize: "17px" }}>My Dashboard</span></Navbar.Brand>
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

                <div className='all-group' >


                    <Dropdown style={{ display: "flex", justifyContent: "space-between" }}>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ marginTop: "6px" }} variant="light">
                            All groups
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="light" >
                            <Dropdown.Item href="#/action-1" active>
                                All groups
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Billing</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Customer  Support</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Escalations</Dropdown.Item>

                        </Dropdown.Menu>
                        <Link style={{ marginTop: "6px" }}>Recent activities  </Link>
                    </Dropdown>



                </div>

                <div style={{ backgroundColor: "blue", height: "70px", borderRadius: "10px", margin: "10px", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>

                        <h6 style={{ color: "white", marginTop: "20px" }}>  <FcClock style={{ fontSize: "39px", color: "black", marginLeft: "15px" }} />Check out these recommended features to get the most out of your trial.</h6>
                       
                       <Button variant="primary" size="md">  Recomamendent features </Button>

                    </div>


                </div>

                <Row className="col-md-12" style={{ marginLeft: "2px" }}>

                    <Col className="col-md-2" id="hello-Row" >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "14px" }}>Unresolved</Card.Title>

                                <Card.Text>
                                    <h4>3</h4>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-md-2" id="hello-Row"  >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "14px" }}>Overdue</Card.Title>

                                <Card.Text>
                                    <h4>3</h4>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-md-2" id="hello-Row"  >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "14px" }}>Due today</Card.Title>

                                <Card.Text>
                                    <h4 >0</h4>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-md-2" id="hello-Row"  >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "14px" }}>Open</Card.Title>

                                <Card.Text>
                                    <h4>3</h4>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-md-2" id="hello-Row" >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "14px" }}>On hold</Card.Title>

                                <Card.Text>
                                    <h4 >0</h4>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-md-2" id="hello-Row" >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "14px" }}>Unassigned</Card.Title>

                                <Card.Text>
                                    <h4>3</h4>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>



                </Row>


                <div style={{ backgroundColor: "white", height: "50vh", margin: "2vh" }}>
                    &nbsp;
                    <h6 style={{ marginLeft: "2vw", marginTop: "2vh" }}>Today's trends</h6>
                    <p style={{ marginLeft: "2vw" }}>as of 12th Dec 2022, 10:21 AM</p>

                </div>




                <Row className="col-md-12" style={{ marginLeft: "2px" }}>

                    <Col className="col-md-4" id="hello-Row"  >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}>Unresolved tickets </Card.Title>
                                <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">Across helpdesk </Card.Subtitle>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><pre>Group                              Open</pre> </ListGroup.Item>
                                    <ListGroup.Item><pre >Escalations	                        2</pre></ListGroup.Item>
                                    <ListGroup.Item><pre >Customer Support	                   1</pre></ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>                           </pre></ListGroup.Item>
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-md-4" id="hello-Row"  >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}>Customer satisfaction</Card.Title>
                                <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">Across helpdesk this month</Card.Subtitle>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><pre>Responses received                 positive</pre> </ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>0                            0% <BsEmojiSmile /></pre></ListGroup.Item>
                                    <ListGroup.Item><pre >Neutral	                           Negative</pre></ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>0                            0% <BsEmojiAngry /></pre></ListGroup.Item>
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="col-md-4" id="hello-Row"  >
                        <Card >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}>Forums </Card.Title>
                                <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">Across helpdesk </Card.Subtitle>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><pre>Waiting for approval               </pre> </ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>0                            </pre></ListGroup.Item>
                                    <ListGroup.Item><pre >Spam	                           </pre></ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>0                            </pre></ListGroup.Item>
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className="col-md-4" id="hello-Row"  >
                        <Card border="light" style={{ marginTop: "2vh" }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}> To-do</Card.Title>
                                <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">Across helpdesk this month</Card.Subtitle>

                                <ListGroup variant="flush">
                                    <ListGroup.Item><pre>Responses received                 positive</pre> </ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>0                            0%</pre></ListGroup.Item>
                                    <ListGroup.Item><pre >Neutral	                           Negative</pre></ListGroup.Item>
                                    <ListGroup.Item><pre style={{ fontSize: "17px" }}>0                            0%</pre></ListGroup.Item>
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>

            </div>


        </div>
    );
}

export default Dashboard;
