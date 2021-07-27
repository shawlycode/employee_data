import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditEmployeeInfo from "./EditEmployeeInfo";


const Employee = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Staff Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: "honeydew", borderRadius: "20px"}}>
          <EditEmployeeInfo
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col
        md="4"
        style={{
          marginBottom: "1rem",
          width: "300px",
          borderRadius: "20px",
        }}
      >
        <Card style={{ backgroundColor: "#EDEEF7" }} className="card-1">
          <Card.Body style={{backgroundColor:"#DFD4F1"}}>
            <Card.Title style={{ textAlign: "center" }}>
              Stark Employee
            </Card.Title>
            <Card.Text>
              <p>First Name: {props.userInfo.firstName}</p>
            </Card.Text>
            <Card.Text>
              <p>Last Name: {props.userInfo.lastName}</p>
            </Card.Text>
            <Card.Text>
              <p>Email:{props.userInfo.email}</p>
            </Card.Text>
            <Card.Text>
              <p>Phone Number:{props.userInfo.phoneNumber}</p>
            </Card.Text>
            <Card.Text>
              <p>Home Address:{props.userInfo.homeAddress}</p>
            </Card.Text>
            <Card.Text>
              <p>Job Role:{props.userInfo.jobRole}</p>
            </Card.Text>
            <Card.Text>
              <p>Current Salary:{props.userInfo.currentSalary}</p>
            </Card.Text>
            <Card.Link>
              <Button variant="outline-success" size="md" onClick={handleShow}>
                Edit Info
              </Button>
            </Card.Link>
            <Card.Link>
              <Button variant="outline-danger" size="md" onClick={handleDelete}>
                Delete Info
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Employee;
