import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import {FcBusinessman} from "react-icons/fc"
import {RxDotFilled} from "react-icons/rx"
import {FiUserPlus} from "react-icons/fi"
import {FaWaveSquare} from "react-icons/fa"
import { MdEmail } from 'react-icons/md';



function DemoCompo() {
  return (
    <>

    <div  style={{width:"64.9vw",marginLeft:"5.1vw",marginTop:"2vh"}}>
    <Row className="col-md-12">

        <Col className="col-md-9" style={{backgroundColor:"red",display:"flex",justifyContent:"start",alignItems:"center",color:"white"}}>
            <Form.Group  className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox"  />
            </Form.Group>
            <FcBusinessman style={{fontSize:"48px"}}/> 

            <div style={{paddingLeft:"16px",marginTop:"12px"}}> <h6 style={{width:"72px", backgroundColor:"#ffecf0",color:"#c82124",    border: "1px solid #ffd0d6",fontSize:"13px" }}>&nbsp; Overdue &nbsp; </h6>

            <p>Recieved a broken TV #3</p>

            <p><MdEmail/> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
            
            
             </div>

        </Col>


        <Col className="col-md-3"style={{backgroundColor:"green",color:"white"}}>
     
            <p><RxDotFilled/>  Low</p>
            <p style={{lineHeight:"2px"}}> <FiUserPlus/> &nbsp;Escalation</p>
            <p> <FaWaveSquare/> &nbsp;Open</p>

        

        </Col>

    </Row>
    
    </div>

    
    <div  style={{width:"64.9vw",marginLeft:"5.1vw",marginTop:"2vh"}}>
    <Row className="col-md-12">

        <Col className="col-md-9" style={{backgroundColor:"red",display:"flex",justifyContent:"start",alignItems:"center",color:"white"}}>
            <Form.Group  className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox"  />
            </Form.Group>
            <FcBusinessman style={{fontSize:"48px"}}/> 

            <div style={{paddingLeft:"16px",marginTop:"12px"}}> <h6 style={{width:"72px", backgroundColor:"#ffecf0",color:"#c82124",    border: "1px solid #ffd0d6",fontSize:"13px" }}>&nbsp; Overdue &nbsp; </h6>

            <p>Recieved a broken TV #3</p>

            <p><MdEmail/> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
            
            
             </div>

        </Col>


        <Col className="col-md-3"style={{backgroundColor:"green",color:"white"}}>
     
            <p><RxDotFilled/>  Low</p>
            <p style={{lineHeight:"2px"}}> <FiUserPlus/> &nbsp;Escalation</p>
            <p> <FaWaveSquare/> &nbsp;Open</p>

        

        </Col>

    </Row>
    
    </div>

    <div  style={{width:"64.9vw",marginLeft:"5.1vw",marginTop:"2vh"}}>
    <Row className="col-md-12">

        <Col className="col-md-9" style={{backgroundColor:"red",display:"flex",justifyContent:"start",alignItems:"center",color:"white"}}>
            <Form.Group  className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox"  />
            </Form.Group>
            <FcBusinessman style={{fontSize:"48px"}}/> 

            <div style={{paddingLeft:"16px",marginTop:"12px"}}> <h6 style={{width:"72px", backgroundColor:"#ffecf0",color:"#c82124",    border: "1px solid #ffd0d6",fontSize:"13px" }}>&nbsp; Overdue &nbsp; </h6>

            <p>Recieved a broken TV #3</p>

            <p><MdEmail/> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
            
            
             </div>

        </Col>


        <Col className="col-md-3"style={{backgroundColor:"green",color:"white"}}>
     
            <p><RxDotFilled/>  Low</p>
            <p style={{lineHeight:"2px"}}> <FiUserPlus/> &nbsp;Escalation</p>
            <p> <FaWaveSquare/> &nbsp;Open</p>

        

        </Col>

    </Row>
    
    </div>


    
    
    </>
  )
}

export default DemoCompo