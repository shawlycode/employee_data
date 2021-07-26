import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";


class EditEmployeeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.userInfo.firstName,
      lastName: props.userInfo.lastName,
      email: props.userInfo.email,
      phoneNumber: props.userInfo.phoneNumber,
      homeADDRESS: props.userInfo.homeAddress,
      jobRole: props.userInfo.jobRole,
      currentSalary: props.userInfo.currentSalary,
      id: props.userInfo.id,
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
    this.props.editUser(this.state);
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
    this.props.closeModal();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control className="inputs"
            type="text"
            placeholder="Enter first name here"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="inputs"
            type="text"
            placeholder="Enter last name here"
            name="lastName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control className="inputs"
            type="email"
            placeholder="enter valid email here"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control className="inputs"
            type="number"
            placeholder="enter number here"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Home Address</Form.Label>
          <Form.Control className="inputs"
            type="text"
            placeholder="enter address here"
            name="homeAddress"
            value={this.state.homeAddress}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Job Role</Form.Label>
          <Form.Control className="inputs"
            type="text"
            placeholder="enter job role here"
            name="jobRole"
            value={this.state.jobRole}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Current Salary</Form.Label>
          <Form.Control className="inputs"
            type="number"
            placeholder="enter salary here"
            name="currentSalary"
            value={this.state.currentSalary}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">
          Save Changes
        </Button>
      </Form>
    );
  }
}

export default EditEmployeeInfo;
