import React from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import { CatStore, Cat } from "../firebase";
import { useState } from "react";

export function About() {
  const { data } = CatStore.useQuery();
  const [newCat, setNewCat] = useState<Cat>({ name: "", color: "" });

  return (
    <Container>
      <h1 className="mb-4">About</h1>
      <Row>
        <Col>
          <p>Blah blah blah blah.</p>
          <Table hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, name, color }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{color}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        CatStore.delete(id);
                      }}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Add a cat</Card.Title>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  CatStore.add(newCat);
                  setNewCat({ name: "", color: "" });
                }}
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={newCat.name}
                    placeholder="Mr Giggles"
                    required
                    type="text"
                    onChange={(e) =>
                      setNewCat({ ...newCat, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    aria-label="Default select example"
                    value={newCat.color}
                    onChange={(e) =>
                      setNewCat({ ...newCat, color: e.target.value })
                    }
                  >
                    <option value="" disabled label="Pick a color..." />
                    <option value="orange">Orange</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
