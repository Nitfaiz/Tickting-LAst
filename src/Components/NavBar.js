import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import {BsBell,BsFileSpreadsheetFill} from "react-icons/bs"
import{FaMediumM } from "react-icons/fa"
import {GoHome} from "react-icons/go"
import Dropdown from 'react-bootstrap/Dropdown';
import {MdOutlineContactSupport} from "react-icons/md"
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    
    <Navbar sticky="top"  collapseOnSelect expand="lg"  variant="light" style={{backgroundColor:"hsla(155, 83%, 24%, 1)",height:"70px"}}>
    
        <Navbar.Brand  href="#home" style={{marginLeft:"1vw",color:"white"}}>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto" style={{marginLeft:"10vw"}}>&nbsp;
             <Nav.Link href="#features"><span style={{color:"orange"}}>your trial ends in 21 days</span></Nav.Link>
             <Link  to={{pathname: '/recomandedfeatures'}}><Button variant='light' className='recom' style={{marginLeft:"16px",marginRight:"2px"}}>Recommended features
             </Button> </Link>

             <Link  to={{pathname: '/getstarted'}}><Button variant='light' className='get-started-respo' style={{marginRight:"2px",marginLeft:"20px"}}>Get started</Button></Link>

            <Dropdown >
                 <Dropdown.Toggle className='new-respo' variant="light" id="dropdown-basic" style={{marginLeft:"16px"}} >New
                 </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

    <div className='header-right d-flex align-items-center ' style={{color:"white"}} >

    <input type="search"  placeholder= ' &nbsp;search' className='search-input'/> 
            &nbsp;
            &nbsp;
            
            <BsBell style={{fontSize:"23px"}}/>
            &nbsp;
            &nbsp;
            <MdOutlineContactSupport style={{fontSize:"26px"}}/>
            &nbsp;
            &nbsp;
            <BsFileSpreadsheetFill style={{fontSize:"21px"}}/>
            &nbsp;
            &nbsp;
            <GoHome style={{fontSize:"23px"}}/>
            &nbsp;
            &nbsp;
            <FaMediumM style={{fontSize:"23px"}}/>
            &nbsp;
            </div>
          </Nav>
          
        </Navbar.Collapse>
   
    </Navbar>
  );
}

export default CollapsibleExample;