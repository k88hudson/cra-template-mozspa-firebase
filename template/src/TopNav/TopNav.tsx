import React from "react";
import "./TopNav.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, NavLinkProps } from "react-router-dom";
import { signIn, signOut, useAuth } from "../utils/firebase-utils";

interface TopNavProps {
  links: Array<NavLinkProps & { label: string }>;
}

export function TopNav({ links }: TopNavProps) {
  const user = useAuth();
  return (
    <Navbar className="navbar-moz" expand="lg">
      <Container>
        <Navbar.Brand>Mozilla SPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map(({ label, ...linkProps }, i) => (
              <NavLink
                key={label + i}
                className="nav-link"
                activeClassName="active"
                {...linkProps}
              >
                {label}
              </NavLink>
            ))}
          </Nav>
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
