import { Col, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const FooterBanner = () => {
  return (
    <Col lg={12} className="d-none d-lg-block">
      <div className="footer-bx">
        <Row className="align-items-center justify-content-between">
          <Col sm={6}>
            <h3>Discover projects & Contact me!</h3>
          </Col>
          <Col sm={6} className="text-center text-md-end">
            <HashLink to="#projects">
              <button>
                <span>Projects</span>
              </button>
            </HashLink>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
export default FooterBanner;
