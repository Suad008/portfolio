import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import Carousel from "react-multi-carousel";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Proficient in full-stack web development using modern
                technologies: HTML & CSS for responsive layouts JavaScript for
                dynamic interactions React for building UI components Node.js
                for backend logic and APIs TypeScript for scalable, type-safe
                code Always focused on writing clean, efficient, and
                maintainable code.
              </p>
              <Carousel
                infinite={true}
                className="owl-carousel skill-slider"
                responsive={responsive}
              >
                <div className="item">
                  <CircularProgressbar
                    value={80}
                    text={`80%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={85}
                    text={`85%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>Js</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={80}
                    text={`80%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={85}
                    text={`85%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={90}
                    text={`90%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={85}
                    text={`85%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills;
