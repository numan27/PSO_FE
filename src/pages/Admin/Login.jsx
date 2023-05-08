import { startTransition } from "react";
import AppLayout from '../../components/Layout/AppLayout'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PATH from "../../utils/path";


const Login = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      startTransition(() => {
        navigate(path);
      });
    }

    return (
        <AppLayout>
            <Container>
                <Row className="h_screen d-flex justify-content-center align-items-center">
                    <Col md={8} lg={5} xs={12}>
                        <Card className="loginPage border-0 px-2 px-sm-5 pb-4 pt-2">
                            <Card.Body>
                                <div className="mb-3 mt-md-2">
                                    <h2 className="fw-bold mb-4 text-uppercase text-center text_secondary">LOGIN</h2>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                                <Form.Control type="text" className='py-3 rounded-0' placeholder="Enter User Id" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-4"
                                                controlId="formBasicPassword">
                                                <Form.Control type="password" className='py-3 rounded-0' placeholder="Enter Password" />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button onClick={() => handleNavigate(PATH.STATS)} className='bg_primary_2 block_btn py-sm-3 py-2 border-0 rounded-0' type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </AppLayout>
    )
}

export default Login