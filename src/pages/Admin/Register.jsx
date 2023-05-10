import { useState } from "react";
import { Col, Button, Row, Container, Form } from "react-bootstrap";
import { CgAsterisk } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import AppLayout from '../../components/Layout/AppLayout';
import INPUT_FILE_LIST from './InputFileList';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phoneNumber: "",
    cnic: "",
    files: [],
  });
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, index) => {
    const files = [...formData.files];
    files[index] = e.target.files[0];
    setFormData({ ...formData, files });
    setIsFileUploaded(files.every((file) => file && file.type === "application/pdf"));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.fatherName && formData.phoneNumber && formData.cnic && isFileUploaded) {
      const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];
      const updatedFormData = [
        ...(Array.isArray(existingFormData) ? existingFormData : []),
        formData
      ];
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
      console.log(updatedFormData);
      setFormData({
        name: "",
        fatherName: "",
        phoneNumber: "",
        cnic: "",
        files: [],
      });
      setIsFileUploaded(false);
    }
  };




  return (
    <AppLayout>
      <Container>
        <Row className="d-flex justify-content-center align-items-center my-5">
          <Col md={10} xs={12}>
            <Form className='register_form' onSubmit={handleSubmit}>
              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Name of Applicant <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  className='w-50 md_width inputField_register'
                  placeholder="Muhammad Jameel"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Father Name <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  className='w-50 md_width inputField_register'
                  placeholder="Saleem Afzal"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Phone Number <CgAsterisk /> </Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  className='w-50 md_width inputField_register'
                  placeholder="0300-9687482"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>
                  CNIC No. <CgAsterisk />
                </Form.Label>
                <Form.Control
                  type="number"
                  name="cnic"
                  className='w-50 md_width inputField_register'
                  placeholder="31202-0231421-5"
                  value={formData.cnic}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              {INPUT_FILE_LIST.map((item, index) => (
                <Form.Group key={index} className="mb-4 px-0 px-lg-4 md_flexCol d-flex align-items-center justify-content-center">
                  <Form.Label className='w-50 md_width fs-4 pe-md-5 px-0'>{item.label}</Form.Label>
                  <div className='w-50 md_width inputFile rounded'>
                    <Form.Control
                      type="file"
                      id={`fileInput-${index}`}
                      name={`fileInput-${index}`}
                      className=''
                      onChange={(e) => handleFileChange(e, index)}
                      accept="application/pdf"
                      required
                    />
                    <label htmlFor={`fileInput-${index}`} className='w-100 px-3 text-center'>
                      {formData.files[index] && formData.files[index].type === 'application/pdf' ? (
                        <FaCheck className="me-2 text-success" />
                      ) : null}
                      Upload PDF document
                    </label>
                  </div>
                </Form.Group>
              ))}


              <div className="d-grid w-75 md_width px-0 px-lg-5 mt-3 mt-md-5 pt-5 mx-auto">
                <Button
                  className='submit_btn border rounded-3 py-3 fs-2'
                  type="submit"
                  disabled={!formData.name || !formData.fatherName || !formData.phoneNumber || !formData.cnic || formData.files.length < INPUT_FILE_LIST.length}
                >
                  Submit Application
                </Button>

              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default Register;