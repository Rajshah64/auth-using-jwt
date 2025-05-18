import { Container, Col, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";

const LandingPage = () => {
  return (
    <Container>
        <Row>
            <Col className="text-center">
              <h1>React Authentication </h1>

              <section id="navigation">
                    <a href="/">Home</a>
                    <a href="/student-dashboard">Student Dashboard</a>
                  <a href="/teacher-dashboard">Teacher Dashboard</a>
              </section>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <Register />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <Login/>
            </Col>
        </Row>
    </Container>
  )
}

export default LandingPage