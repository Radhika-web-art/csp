import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './module.css';
import './mysa.scss';
import { Button } from "react-bootstrap";
import {
  Box,
  Container,
  Row,
  Column,
  HeaderLink,
  Heading,
} from "./Headerstyles.js";

{/*class Header extends React.Component
{
  render()
  {
    return (
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
          
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Who We Are</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mentorship</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Donorship</a>
        </li>
      </ul>
      <button
          type="button"
          onClick="red"
        >Contact Us</button>
      <button
          type="button"
          onClick="red"
        >Login</button>
     <br/> <p>Career Saathi Program</p>
        <h1 className={styles.aaa}>Career Acceleration Platform
         For World-Beating Yet UnderPrivileged Students</h1>
      <br/><button
          type="button"
          onClick="red"
        >Donate Now</button>
    </nav>
    
     
    )
  }
}  */}
const Header = () => {
  return (
    <Box>
      <Container>
        <Row>
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
          
         
        </Row>
      </Container>
      <h6 style={{ color: "white", 
                   textAlign: "absolute", 
                   marginTop: "-100px" }}>
        CAREER SAATHI PROGRAM
      </h6>
      <h1 style={{ color:"white",
                   textAlign: "left",
                   size:"72px"
      }}>Career Acceleration Platform
         For World-Beating Yet UnderPrivileged Students</h1>
         <Button
          variant="default"
          style={{ color: "#F8F9FF", background: "#EF2A82" }}
        >
          Donate Now
        </Button>
    </Box>
  );
};


export default Header;


