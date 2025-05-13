import TrackVisibility from "react-on-screen";
import bannerImg from "../assets/img/banner-img.png";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Web Developer", "Full Stack Dev", "Frontend Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`I'm Suad Asadullayev`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    {" "}
                    I sdjwh f sijfkw f wkfew jfek wkfed wl lflwke wkd kwelfkkwlf
                    lwkeflw lwkmd,l 3eofkle e eklfklmd elfmle, leiro hejosl
                    korla herpje osace heeh ubsjhd hfkdjfhd ed e de ed de de d
                    edwhwhfe eweruifhwegew iweuifhwehfi ewrfiuwfhiuwerhf
                    iuhewfiu heriufeh fiuhreifwefwh eihwuf whf wehiwhfihweiufhi
                    hwduidhwhdwhd ew iudhwieuhwiud ehiudwhdiuh weihd whiu
                    edhuidhiuhwuhdiuhewiuwhu
                  </p>
                  <HashLink to="#connect">
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={bannerImg} alt="Banner Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
