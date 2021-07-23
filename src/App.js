import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddEmployee from './Components/AddEmployee';
import EmployeesData from './Components/EmployeesData';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <AddEmployee />
          </Row>
        </Container>
        <Container>
          <Row>
            <EmployeesData />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
