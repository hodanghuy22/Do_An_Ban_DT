import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../features/users/userSlice';

const signUpSchema = yup.object({
  username: yup.string().required('Username is Required')
  .min(6, 'Password must be at least 6 characters'),
  password: yup.string().required('Password is Required')
  .min(7, 'Password must be at least 7 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
  .matches(/[0-9]/, 'Password must contain at least one digit'),
  email: yup.string().email("Email Should be valid").required("Password is Required")
});

const Login = () => {
  const authState = useSelector(state => state?.auth)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShow(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ marginTop: '10%' }}>
      <Modal.Header >
        <Modal.Title>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          {/* Các trường đăng nhập / đăng ký ở đây */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" 
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" 
              value={formik.values.username}
              onChange={formik.handleChange('username')}
              onBlur={formik.handleBlur('username')}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
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
