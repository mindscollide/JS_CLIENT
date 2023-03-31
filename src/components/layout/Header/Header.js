import { Container, Row, Col, Nav } from "react-bootstrap";
import { Button } from "../../../components/elements";
import Navbar from "react-bootstrap/Navbar";
import { ListUl } from "react-bootstrap-icons";
import styles from "./Header.module.css";
import JsLogo from "../../../assets/images/js-logo.png";

const Header = () => {
  return (
    <Container fluid className={styles["container-header"]}>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img src={JsLogo} width={220} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                {" "}
                <Button
                  text="RFQ"
                  icon={<ListUl />}
                  className={styles["rfq-button"]}
                />
              </Nav.Link>
              <Nav.Link>
                <Button
                  text="Calculator"
                  className={styles["caluclator-button"]}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header;
