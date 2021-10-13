import React from "react";
import hero from "./hero.png";
import "./Home.css";
import { Button, Container, Row, Col } from "react-bootstrap";

export function Home() {
  return (
    <Container className="p-4">
      <Row className="flex-md-row-reverse align-items-center g-5 py-5">
        <Col xs={10} sm={8} md={6}>
          <img
            className="img-fluid Home-hero"
            alt="Firefox browser"
            src={hero}
          />
        </Col>
        <Col md={6}>
          <h1>Get the browser that protects what’s important</h1>
          <p className="lead mb-4">
            No shady privacy policies or back doors for advertisers. Just a
            lightning fast browser that doesn’t sell you out.
          </p>
          <p>
            <Button size="lg">Download Firefox</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
