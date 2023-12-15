import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        <form className='w-50'>
          <div>
            <h3 className='text-center'>Đăng ký tài khoản</h3>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Email</label>
            <input type="email" id="form2Example1" className="form-control" data-label="Email" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Mật khẩu:</label>
            <input type="password" id="form2Example2" className="form-control" data-label="Password" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Nhập lại mật khẩu:</label>
            <input type="password" id="form2Example2" className="form-control " data-label="Password" />
          </div>

          <button type="button" className="btn btn-primary btn-block mb-4 background-primary text-dark">Đăng ký</button>
          <div className="col d-flex justify-content-center">
            Bạn đã có tài khoản? <Link to="/login" className='ml-1'>Đăng nhập ngay</Link>
          </div>
        </form>
      </Row>
    </Container>
  )
}

export default Register
