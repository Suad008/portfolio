import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Juice Bar",
      description: "Development & Design",
      imgUrl: null,
      url: "#",
    },
    {},
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
            <p>
              Here are some of the key projects I’ve worked on — each one
              showcasing my skills, creativity, and dedication to delivering
              high-quality results. From writing and design to full-scale
              content development, every project reflects my passion for
              impactful work.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
