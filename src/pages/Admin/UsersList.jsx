import React from 'react'
import { Container, Table } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai"
import AppLayout from '../../components/Layout/AppLayout'
import { Link } from 'react-router-dom';


const UsersList = () => {
    return (
        <AppLayout>
            <Container fluid className="px-sm-5 px-3">
                <div className='d-flex justify-content-end mt-sm-5 mt-2 mb-3 mx-sm-0 mx-4 mobileText_align'>
                    <a className='' href="">Welcome Deputy Commissioner, Bahawalpur<AiOutlineRight /></a>
                </div>

                <div className='my-5'>
                    <Table striped bordered>
                        <thead className='bg_primary text-white'>
                            <tr>
                                <th className='text-center'>Sr. No.</th>
                                <th>Name</th>
                                <th>District</th>
                                <th>Tehsil</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>1</td>
                                <td>
                                    <Link to="/applicant-details" className='text-decoration-none' onClick={() => {
                                        startTransition(() => {

                                        });
                                    }}> 
                                        Muhammad Jameel
                                    </Link>
                                </td>
                                <td>Bahawalpur</td>
                                <td>Bahawalpur City</td>
                                <td>05/11/2022 13:46</td>
                            </tr>
                            <tr>
                                <td className='text-center'>2</td>
                                <td>Muhammad Kamran</td>
                                <td>Bahawalpur</td>
                                <td>Bahawalpur City</td>
                                <td>24/10/2022 11:31</td>
                            </tr>
                            <tr>
                                <td className='text-center'>3</td>
                                <td>Malik Arif</td>
                                <td>Bahawalpur</td>
                                <td>Hasilpur</td>
                                <td>17/10/2022 11:39</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </Container>
        </AppLayout>
    )
}

export default UsersList