import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/img/logo.jpg";
import { Facebook, Github, Linkedin } from "react-bootstrap-icons";
import FooterBanner from "./FooterBanner";

const Footer = () => {
  return (
    <section className="footer" id="footers">
      <Container>
        <Row>
          <FooterBanner />
          <Col className="text-center text-sm-start" xs={12} md={6}>
            <img src={img}></img>
          </Col>
          <Col className="text-center text-sm-end" xs={12} md={6}>
            <div className="social-icon">
              <a href="#">
                <Linkedin size={20} color="white" />
              </a>
              <a href="#">
                <Facebook size={20} color="white" />
              </a>
              <a href="#">
                <Github size={20} color="white" />
              </a>
            </div>
            <p>Copyright 2025.All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
