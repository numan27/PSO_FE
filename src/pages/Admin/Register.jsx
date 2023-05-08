import { startTransition } from "react";
import { Col, Button, Row, Container, Form } from "react-bootstrap";
import { CgAsterisk } from "react-icons/cg"
import AppLayout from '../../components/Layout/AppLayout'
import INPUT_FILE_LIST from './InputFileList';
import { useNavigate } from "react-router-dom";
import PATH from "../../utils/path";

const Register = () => {
  const navigate = useNavigate();

    const handleNavigate = (path) => {
      startTransition(() => {
        navigate(path);
      });
    }

  return (
    <AppLayout>
      <Container>
        <Row className="d-flex justify-content-center align-items-center my-5">
          <Col md={10} xs={12}>
            <Form className='register_form'>
              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Name of Applicant <CgAsterisk /> </Form.Label>
                <Form.Control type="text" className='w-50 md_width inputField_register' placeholder="Muhammad Jameel" />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Father Name <CgAsterisk /> </Form.Label>
                <Form.Control type="text" className='w-50 md_width inputField_register' placeholder="Saleem Afzal" />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>Phone Number <CgAsterisk /> </Form.Label>
                <Form.Control type="number" className='w-50 md_width inputField_register' placeholder="0300-9687482" />
              </Form.Group>

              <Form.Group className="mb-4 px-0 px-lg-4 md_flexCol md_width d-flex align-items-center justify-content-center">
                <Form.Label className='w-50 md_width fs-4'>CNIC No. <CgAsterisk /> </Form.Label>
                <Form.Control type="number" className='w-50 md_width inputField_register' placeholder="31202-0231421-5" />
              </Form.Group>


              {INPUT_FILE_LIST.map((item, index) => (
                <Form.Group key={index} className="mb-4 px-0 px-lg-4 md_flexCol d-flex align-items-center justify-content-center">
                  <Form.Label className='w-50 md_width fs-4 pe-md-5 px-0'>{item.label}</Form.Label>
                  <div className='w-50 md_width inputFile rounded'>
                    <Form.Control type="file" id="fileInput" className='' />
                    <label htmlFor="fileInput" className='w-100 px-3 text-center'>
                      Upload PDF document
                    </label>
                  </div>
                </Form.Group>
              ))}

              <div className="d-grid w-75 md_width px-0 px-lg-5 mt-3 mt-md-5 pt-5 mx-auto">
                <Button onClick={() => handleNavigate(PATH.SUBMIT_REGISTRATION)} className='submit_btn border rounded-3 py-3 fs-2' type="submit">
                  Submit Application
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

    </AppLayout>
  )
}

export default Register