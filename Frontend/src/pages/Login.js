import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShow(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập hoặc đăng ký tại đây
    // ...
    handleClose();
  };


  useEffect(() => {
 
  }, []);

  return (
    <Modal show={show} onHide={handleClose} style={{ marginTop: '10%' }}>
      <Modal.Header >
        <Modal.Title>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Các trường đăng nhập / đăng ký ở đây */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Nhập Mật Khẩu" />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm" className="mt-2">
            <Form.Label>Nhập Lại Mật Khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập Lại Mật Khẩu" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p >
          <Link to='forgot-password' className="mr-3 text-primary btn">Quên mật khẩu</Link>
          {isLogin
            ? "Bạn chưa có tài khoản? "
            : "Bạn đã có tài khoản? "}
          <span className="auth-switch text-primary btn " onClick={handleSwitch}>
            {isLogin ? 'Đăng Ký ngay!' : 'Đăng Nhập ngay!'}
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  )
}

export default Login;
