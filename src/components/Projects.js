import { Col, Container, Row } from "react-bootstrap";
import AdminPanelImg from "../assets/img/AdminPanel.png";
import NetflixImg from "../assets/img/Netflix.png";
import NotesAppImg from "../assets/img/NotesApp.png";
import YuzuZenRest from "../assets/img/YuzuZen.png";
import WeatherAppFlut from "../assets/img/WeatherApp.png";
import JuiceBar from "../assets/img/JuiceBar.png";
import JuiceBar2 from "../assets/img/JuiceBar2.png";
import BotImg from "../assets/img/bot.png";
import WeatherAppImg from "../assets/img/bot.png";
import FigmaImg from "../assets/img/Figma.png";
import CalculatorImg from "../assets/img/Calculator.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    {
      title: "Juice Bar",
      description: "Development & Design",
      imgUrl: JuiceBar,
      url: "https://github.com/Suad008/Shop",
    },
    {
      title: "AdminPanel",
      description: "Development",
      imgUrl: AdminPanelImg,
      url: "https://github.com/Suad008/adminpanel",
    },
    {
      title: "WeatherAppMobile",
      description: "Development",
      imgUrl: WeatherAppFlut,
      url: "https://github.com/Suad008/WeatherAppFlut",
    },
    {
      title: "ChatAi",
      description: "Development",
      imgUrl: BotImg,
      url: "https://github.com/Suad008/Chat",
    },
    {
      title: "Juice Bar",
      description: "Development & Design",
      imgUrl: JuiceBar2,
      url: "https://github.com/Suad008/Shop",
    },

    {
      title: "MovieLab",
      description: "Development",
      imgUrl: NetflixImg,
      url: "https://github.com/Suad008/Movie-Lab",
    },
    {
      title: "Notes",
      description: "Development & Design",
      imgUrl: NotesAppImg,
      url: "https://github.com/Suad008/todos-app",
    },

    {
      title: "YuzuZenRest",
      description: "Development & Design",
      imgUrl: YuzuZenRest,
      url: "https://github.com/Suad008/Yuzu-Zen",
    },
    {
      title: "Calculator",
      description: "Development",
      imgUrl: CalculatorImg,
      url: "https://github.com/Suad008/Calculator1",
    },
    {
      title: "WeatherApp",
      description: "Development & Design",
      imgUrl: WeatherAppImg,
      url: "https://github.com/Suad008/WeatherApp",
    },
    {
      title: "Figma",
      description: " Design",
      imgUrl: FigmaImg,
      url: " https://www.figma.com/design/9Ed1xV71pHGYa6ODzysp3E/Untitled?node-id=0-1&t=43ybO8sRMdrE9j7T-1",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                ></div>
              )}
            </TrackVisibility>
            <h2>Projects</h2>
            <p>
              Here are some of the key projects I’ve worked on — each one
              showcasing my skills, creativity, and dedication to delivering
              high-quality results. From writing and design to full-scale
              content development, every project reflects my passion for
              impactful work.
            </p>
            <Row>
              {projects.map((item, index) => (
                <ProjectCard
                  key={index}
                  url={item.url}
                  title={item.title}
                  description={item.description}
                  imgUrl={item.imgUrl}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
