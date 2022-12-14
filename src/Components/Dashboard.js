import React, { useState } from "react";
import ModalComp from "./ModalCom";
import Button from "react-bootstrap/Button";
import { MdChat } from "react-icons/md"
import Navbar from "./NavBar"
import { FcBusinessman, FcFrame, FcBusinessContact, FcShare, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic } from "react-icons/fc"
import { Link } from "react-router-dom";

function Dashboard() {
 

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const getModalBody = () => {
    return (
      <div>
        <img src="https://indfassetsblue.freshdesk.com/production/a/assets/images/onboarding/industry-onboarding-0b7f007a8d2b6316bd55603b7b2c45da6786933da587251ad16c56cd72870f42.svg"  alt=" " width="95%" />
        <span style={{ fontWeight: "600", fontSize: "16px" }}>
          What industry are you in?
        </span>
        <select
          className="form-control form-control-sm dropdown-small"
          style={{ appearance: "auto" }}
        >
          <option>Small select</option>
          <option>okay select</option>
          <option>large select</option>
          <option>big select</option>
          <option>mid select</option>
        </select>

        <p style={{ marginTop: "2vh" }}>You can change the industry if necessary. We made this assumption based on your email address.</p>
      </div>
    )

  }
  const getModalFooter = () => {
    return (
      <>
        <Button className="btn-personalize" onClick={handleClose}>
          Personalize Now
        </Button >
        <Button className='border border-primary"' variant="light" onClick={handleClose}>
          Skip
        </Button>
      </>
    )
  }

  if (show) {
    return (
      <ModalComp
        showModal={show}
        closeModal={handleClose}
        modalTitle={<h1 className="head-help">Help us personalize Freshdesk &nbsp;  <p className="head-help" style={{ lineHeight: "50px" }}>for you!</p></h1>}
        modalBody={getModalBody()}
        modalFooter={getModalFooter()}
        showBackBtn={false}
        size="md"
        className="popup"
      />
    );
  }
  
  return (
    <div className='big-box d-flex' style={{ height: "200vh", width: "100%" }} >

      <div className='left-box' style={{ width: "5.1vw", backgroundColor: "#183247", height: "200vh" }}>

        <ul className="new-nav" style={{ color: "white", marginLeft: "-1vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10vh", position: "fixed" }}>


          <Link  to={{pathname: '/dashboard/default'}}><li data-placement="right" title="Dashboard" data-toggle="tooltip" className="my-lv" style={{ marginTop: "0vh" }}><FcBusinessman style={{ fontSize: "28px" }} /></li></Link>


          <Link  to={{pathname: '/dashboard/tickets'}}> <li data-placement="right" title="Tickets" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcFrame style={{ fontSize: "28px" }} /></li></Link>

          <li data-placement="right" title="Contact" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcBusinessContact style={{ fontSize: "28px" }} /></li>

          <Link  to={{pathname: '/socialsupport'}}> <li data-placement="right" title="Social" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcShare style={{ fontSize: "28px" }} /></li> </Link>

          <Link  to={{pathname: '/solutions'}}> <li data-placement="right" title="Solutions" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcViewDetails style={{ fontSize: "28px" }} /></li></Link>

          <li data-placement="right" title="Fourms" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcSms style={{ fontSize: "28px" }} /></li>

          <li data-placement="right" title="Analytics" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcPositiveDynamic style={{ fontSize: "28px" }} /></li>

          <li data-placement="right" title="Admin" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcAutomatic style={{ fontSize: "28px" }} /></li>

        </ul>


      </div>


      <div className='right-box' style={{ width: "100vw", backgroundColor: "lightgray", height: "200vh" }}>

        <Navbar />
        <img src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/sample_dashboard-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.jpg"  alt=" " style={
          { width: "99.99%", height: "auto", cursor: "pointer", border: "1.5px solid #ffad1e" }
        } />


        <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>

      </div>

    </div>
  );
}

export default Dashboard;

