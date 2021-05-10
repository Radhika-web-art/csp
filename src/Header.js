import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './module.css';
import { Button } from "react-bootstrap";
import './body.css';
import {
  Box,
  Container,
  Row,
  Column,
  HeaderLink,
  Heading,
  Heading1,
} from "./Headerstyles.js";

const Header = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
          <img className="s6" src={`${process.env.PUBLIC_URL}/csp logo.png`} alt="pic"/>
          </Column>
          <Column>
          <HeaderLink>CSP</HeaderLink>
          </Column>
          <Column>
            <HeaderLink href="#">Home</HeaderLink>
          </Column>
          <Column>
          <HeaderLink href="#">Who We Are</HeaderLink>
          </Column>
          <Column>
          <HeaderLink href="#">Mentorship</HeaderLink>
          </Column>
          <Column>
          <HeaderLink href="#">Donors</HeaderLink> 
          </Column>

          <Button className="button1" variant="default"
          style={{ color: "#172755", background: "#f8f9ff" }}>
            Contact Us
           </Button>
           <Button className="button2" variant="default"
          style={{ color: "#172755", background: "#f8f9ff" }}>
            Login
           </Button>
        </Row>
      </Container>
      <Heading>CAREER SAATHI PROGRAM</Heading>
      <Heading1>Career Acceleration Platform For World-Beating Yet UnderPrivileged Students</Heading1>
         <Button
          variant="default"
          style={{ color: "#F8F9FF", background: "#EF2A82" }}>
          Donate Now
        </Button>
    </Box>
  );
};


export default Header;


