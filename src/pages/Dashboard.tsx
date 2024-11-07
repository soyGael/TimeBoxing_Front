import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const Dashboard: React.FC = () => {
  return (
      <>
      <Sidebar/>
      <Container fluid>
        <Row className="mx-1">
          <Col md={1}></Col>
          <Col md={9}>
            <h1 className="my-4">Dashboard de Actividades</h1>
            <Row>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Actividad 1</Card.Title>
                    <Card.Text>Descripción de la actividad 1.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Actividad 2</Card.Title>
                    <Card.Text>Descripción de la actividad 2.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Actividad 3</Card.Title>
                    <Card.Text>Descripción de la actividad 3.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
