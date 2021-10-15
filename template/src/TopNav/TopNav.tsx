import React from "react";
import "./TopNav.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, NavLinkProps } from "react-router-dom";
import { signIn, signOut, useAuth } from "../utils/firebase-utils";

export function TopNav({ children }: { children: React.ReactNodeArray }) {
  const user = useAuth();
  return (
    <Navbar className="navbar-moz" expand="lg">
      <Container>
        <Navbar.Brand>Mozilla ADRs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{children}</Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {user ? (
              <>
                {user.email}{" "}
                <Button variant="outline-secondary" onClick={() => signOut()}>
                  Logout
                </Button>
              </>
            ) : (
              <Button onClick={() => signIn()}>Login</Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function TopNavLink(props: NavLinkProps) {
  return <NavLink className="nav-link" activeClassName="active" {...props} />;
}
