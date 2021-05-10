
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Footerstyles.js";
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "left", 
                   marginTop: "-50px" }}>
        CAREER SAATHI PROGRAM
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT US</Heading>
            <FooterLink href="#">Over the last 15 years, Nirmaan Organization has impacted 1+ million beneficiaries</FooterLink>
          </Column>
          <Column>
            <Heading>QUICK LINKS</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Mentorship</FooterLink>
            <FooterLink href="#">Donors</FooterLink>
          </Column>
          <Column>
            <Heading>CONTACT US</Heading>
            <FooterLink href="#">+9000276903</FooterLink>
            <FooterLink href="#">contact@nirmaan.org</FooterLink>
            <FooterLink href="#">H.No. 1-98/9/3,Flat No.401,Plot No.3,Jaihind Enclave,Madhapur,Hyderabad</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

{/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component
{
  render()
  {
    return (
        <div class="jumbotron text-center">
        <p>ABOUT US

Over the last 15 years, Nirmaan Organization has impacted 1+ million beneficiaries through Education, Livelihoods and Social Leadership initiatives across 8 states of India</p>
        <p>Footer</p>
        <p>ABOUT US

Over the last 15 years, Nirmaan Organization has impacted 1+ million beneficiaries through Education, Livelihoods and Social Leadership initiatives across 8 states of India</p>
        <p>Footer</p>
      </div>
    )
  }
}
export default Footer;*/}