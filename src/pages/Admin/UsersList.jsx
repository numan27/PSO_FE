import React, { useEffect, useState } from 'react'
import { Container, Table } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai"
import AppLayout from '../../components/Layout/AppLayout'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const UsersList = () => {
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];
    const updatedFormDataArray  = [
        ...(Array.isArray(existingFormData) ? existingFormData : [])
      ].map(data => ({
        ...data,
        id: uuidv4()
      }));
      
    setFormDataArray(updatedFormDataArray);
  }, []);

  return (
    <AppLayout>
      <Container fluid className="px-sm-5 px-3">
        <div className='d-flex justify-content-end mt-sm-5 mt-2 mb-3 mx-sm-0 mx-4 mobileText_align'>
          <a className='' href="">Welcome Deputy Commissioner, Bahawalpur<AiOutlineRight /></a>
        </div>

        {formDataArray.length > 0 ? (
          <div className='my-5'>
            <Table responsive striped bordered className='userList'>
              <thead className='bg_primary text-white'>
                <tr>
                  <th className='text-center'>Sr. No.</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Phone Number</th>
                  <th>CNIC</th>
                </tr>
              </thead>
              <tbody>
                {formDataArray.map((data, index) => (
                  <tr key={data.id}>
                    <td className='text-center'>{index + 1}</td>
                    <td>
                      <Link to="/applicant-details" className='text-decoration-none'>
                        {data.name}
                      </Link>
                    </td>
                    <td>{data.fatherName}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.cnic}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div>No data to display</div>
        )}
      </Container>
    </AppLayout>
  )
}

export default UsersList;
