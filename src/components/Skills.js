import { Container } from "react-bootstrap";
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
              <Carousel></Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills;
