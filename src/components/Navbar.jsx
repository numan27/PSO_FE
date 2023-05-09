import { Col, Container, Row, Form, Button } from "react-bootstrap";
import IMAGES from "../assets/images";

function Navbar({ showTrackApplication }) {
    return (
        <div className="bg_primary text-white header">
            <Container fluid className="px-xl-5 px-3">
                <Row className="py-sm-4 py-3 d-flex justify-content-between">
                    <Col xl={6}>
                        <div className="d-flex mb-xl-0 mb-3 align-items-center justify-content-xl-start justify-content-center logoWrapper py-2">
                            <img src={IMAGES.LOGO} width="120" className="me-3 logo" alt="logo" />
                            <div className="">
                                <h6 className="fw-light fs-5 mb-1 mobileText_p">Petrol Pumps</h6>
                                <h2 className="fw-semibold mb-0 mobileText_h">Registration Portral</h2>
                                <h6 className="fw-light fs-5 mb-0 mobileText_p">District Administration Bahawalpur</h6>
                            </div>
                        </div>
                    </Col>

                    {showTrackApplication && (
                        <Col xl={6} className="d-flex align-items-end justify-content-xl-end justify-content-center ps-xl-5">
                            <div className="d-flex flex-sm-row flex-column align-items-center justify-content-end mobile_width w-100 ps-xl-5">
                                <div className="me-3">
                                    <h4 className="fw-normal fs-5 mb-2 mb-sm-0 mt-sm-0 mobileText_p text-nowrap">Track your application</h4>
                                </div>
                                <Form.Group className="inputField me-sm-3 mb-3 mb-sm-0 mx-0 w-100" controlId="basic">
                                    <Form.Control className="w-100" type="number" placeholder="CNIC #" />
                                </Form.Group>
                                <Button className="px-4" variant="outline-light">Track</Button>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
