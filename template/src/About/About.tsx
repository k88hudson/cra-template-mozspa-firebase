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
import { useAuth } from "../utils/firebase-utils";
import { where } from "@firebase/firestore";

export function About() {
  const { uid } = useAuth() || {};
  const { data } = CatStore.useQuery([uid], {
    skipIf: !uid,
    query: [where("uid", "==", uid)],
  });
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
        <Col>{uid && <AddForm uid={uid} />}</Col>
      </Row>
    </Container>
  );
}

export function AddForm({ uid }: { uid: string }) {
  const [data, setData] = useState<Omit<Cat, "uid">>({
    name: "",
    color: "",
  });
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add a cat</Card.Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (!uid) {
              return;
            }
            CatStore.add({ ...data, uid });
            setData({ name: "", color: "" });
          }}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={data.name}
              placeholder="Mr Giggles"
              required
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formColor">
            <Form.Label>Color</Form.Label>
            <Form.Control
              as="select"
              required
              aria-label="Default select example"
              value={data.color}
              onChange={(e) => setData({ ...data, color: e.target.value })}
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
  );
}
