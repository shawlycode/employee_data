import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import './Form.css';

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "orlando",
      lastName: "kutina",
      email: "orlando@gmail.com",
      phoneNumber: "0244542627",
      homeAddress: "Atta Mills Street",
      jobRole: "software engineer",
      currentSalary: "$500000",
      id: "bcdsby733",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      // console.log(this.state)
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submited succefully", this.state);
    this.props.addNewData(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      homeAddress: "",
      jobRole: "",
      currentSalary: "",
      id: "",
    });
  };
  render() {
    return (
      <>
      <h3 style={{textAlign:"center"}}>Data management System developed by Maya&Orlando</h3>
      <Form onSubmit={this.handleSubmit} style={{marginLeft:"450px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h5 style={{textAlign:"center"}}>Stark Employee Form</h5>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name here"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="input"
            type="text"
            placeholder="Enter last name here"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter valid email here"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter number here"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Home Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter address here"
            name="homeAddress"
            value={this.state.homeAddress}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Job Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter job role here"
            name="jobRole"
            value={this.state.jobRole}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Current Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter salary here"
            name="currentSalary"
            value={this.state.currentSalary}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" style={{marginLeft:"100px"}}>
          Submit
        </Button>
      </Form>
      </>
    );
  }
}

export default AddEmployee;
