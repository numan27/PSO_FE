import { Col, Container, Row, Form, Button } from "react-bootstrap"
import IMAGES from "../assets/images"

function Navbar() {
    return (
        <div className="bg_primary text-white header">
            <Container fluid className="px-xl-5 px-3">
                <Row className="py-sm-4 py-3">
                    <Col lg={6}>
                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center mb-lg-0 mb-4 logoWrapper">
                            <img src={IMAGES.LOGO} width="124" className="me-sm-3 mx-0 mb-4 mb-sm-0 logo" alt="logo" />
                            <div className="mobileText_align">
                                <h6 className="fw-light fs-5 mb-1 mobileText_p">Petrol Pumps</h6>
                                <h2 className="fw-semibold mb-0 mobileText_h">Registration Portral</h2>
                                <h6 className="fw-light fs-5 mb-0 mobileText_p">District Administration Bahawalpur</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="d-flex align-items-end justify-content-lg-end justify-content-center ps-sm-0">
                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-end mobile_width">
                            <h4 className="fw-normal fs-5 mb-3 mb-sm-0 mobileText_p">Track your application</h4>
                            <Form.Group className="inputField me-sm-3 mb-3 mb-sm-0 mx-0 w-100 " controlId="basic">
                                <Form.Control className="" type="number" placeholder="CNIC #" />
                            </Form.Group>
                            <Button className="px-4" variant="outline-light">Track</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
