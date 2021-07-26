import React from "react";
import { Container, Row } from "react-bootstrap";
import Employee from "./Employee";

const EmployeesData = (props) => {
  return (
    <Container>
      <Row>
        {props.userData.map((user) => {
          return (
            <Employee
              userInfo={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default EmployeesData;
