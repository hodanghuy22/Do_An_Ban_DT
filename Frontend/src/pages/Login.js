import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        <form className='w-50'>
          <div>
            <h3 className='text-center'>Đăng nhập tài khoản</h3>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">Email</label>
            <input type="email" id="form2Example1" className="form-control" data-label="Email" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" className="form-control" data-label="Password" />
          </div>
          <div className="row mb-4">

            <div className="col">
              <a href="#!">Quên mật khẩu?</a>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-block mb-4 background-primary text-dark">Đăng nhập</button>
          <div className="col d-flex justify-content-center">
            Bạn chưa có tài khoản? <Link to="/register" className='ml-1'>Đăng ký ngay</Link>
          </div>
        </form>
      </Row>
    </Container>
  )
}

export default Login
