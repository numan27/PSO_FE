import React from 'react'
import { Container, Row, Col, Table, Form, Button, Dropdown } from "react-bootstrap";
import AppLayout from '../../components/Layout/AppLayout';
import { CgAsterisk } from 'react-icons/cg';
import { BsChevronDown } from 'react-icons/bs';


const ApplicantDetails = () => {
    return (
        <AppLayout>
            <Container fluid className="px-sm-5 mb-5 px-3 applicant_details">
                <Row>
                    <Col xl={6} lg={8} md={8} sm={10} className='mx-auto'>
                        <div className='my-5'>
                            <h1 className='fw-bold'>Applicant’s Details</h1>
                        </div>
                        <Row className='d-flex justify-content-between'>
                            <Col md={5}>
                                <Table className='table_1' bordered>
                                    <thead>
                                        <tr>
                                            <th className=''>Name</th>
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
                                            <th className=''>Aks Shajra</th>
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
                            <div className='d-flex flex-lg-row flex-column justify-content-end'>
                                <Button variant="danger" size="lg" className="rounded-0 fw-semibold py-2 py-sm-3 px-0 px-md-5">Objection / Refer back</Button>
                                <Button size="lg" className="rounded-0 fw-semibold py-2 py-sm-3 px-5 bg_primary mx-lg-5 mx-0 my-lg-0 my-3 ">Verify</Button>
                                <Button variant="warning" size="lg" className="rounded-0 fw-semibold py-2 py-sm-3 px-5">Register</Button>
                            </div>
                            <div className='d-flex flex-wrap justify-content-between mt-4 mb-5 checkBox_wrapper'>
                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>DPO</Form.Label>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Group className='d-flex align-items-center'>
                                        <Form.Check aria-label="option 1" />
                                        <Form.Label className='mb-0 ms-2'>ACs</Form.Label>
                                    </Form.Group>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <BsChevronDown className='text-black ms-1' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Group className='d-flex align-items-center'>
                                        <Form.Check aria-label="option 1" />
                                        <Form.Label className='mb-0 ms-2'>CO MCs</Form.Label>
                                    </Form.Group>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <BsChevronDown className='text-black ms-1' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>XEN Highway</Form.Label>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>PTCL</Form.Label>
                                </Form.Group>

                                <Form.Group className='d-flex align-items-center mt-2'>
                                    <Form.Check aria-label="option 1" />
                                    <Form.Label className='mb-0 ms-2'>SNGPL</Form.Label>
                                </Form.Group>

                            </div>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </AppLayout>
    )
}

export default ApplicantDetails