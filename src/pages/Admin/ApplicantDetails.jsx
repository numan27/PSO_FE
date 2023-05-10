import { Container, Row, Col, Table, Form, Button, Dropdown } from "react-bootstrap";
import AppLayout from '../../components/Layout/AppLayout';
import { CgAsterisk } from 'react-icons/cg';


const ApplicantDetails = () => {

    return (
        <AppLayout>
            <Container fluid className="px-sm-5 mb-5 px-3 applicant_details">
                <Row>
                    <Col xl={9} lg={11} md={11} sm={11} className='mx-auto'>
                        <div className='my-5'>
                            <h1 className='fw-bold'>Applicant’s Details</h1>
                        </div>
                        <Row className='d-flex justify-content-between'>
                            <Col md={5}>
                                <Table className='' bordered>
                                    <thead>
                                        <tr>
                                            <th className='w-50'>Name</th>
                                            <td>Muhammad Jameel</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>District</th>
                                            <td>Bahawalpur</td>
                                        </tr>
                                        <tr>
                                            <th>Tehsil</th>
                                            <td>Bahawalpur City</td>
                                        </tr>
                                        <tr>
                                            <th>Date & Time</th>
                                            <td>05/11/2022 13:46</td>
                                        </tr>
                                        <tr>
                                            <th>Fard Malkiat</th>
                                            <td>Attached</td>
                                        </tr>
                                        <tr>
                                            <th>CNIC</th>
                                            <td>Attached</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={5}>
                                <Table className='' bordered>
                                    <thead>
                                        <tr>
                                            <th className='w-50'>Aks Shajra</th>
                                            <td>Attached</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Company</th>
                                            <td>Active</td>
                                        </tr>
                                        <tr>
                                            <th>Ogra Status</th>
                                            <td>Active</td>
                                        </tr>
                                        <tr>
                                            <th>Company Layout Plan</th>
                                            <td>Attached</td>
                                        </tr>
                                        <tr>
                                            <th>Company MOU Copy</th>
                                            <td>Attached</td>
                                        </tr>
                                        <tr>
                                            <th>Affidavit</th>
                                            <td>Attached</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fs-4 fw-bold'>Remarks <CgAsterisk className='text-danger' /></Form.Label>
                                    <Form.Control rows={5} as="textarea" className='rounded-0' placeholder="Enter remarks" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </AppLayout>
    )
}

export default ApplicantDetails