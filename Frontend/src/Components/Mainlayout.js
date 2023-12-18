import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { GoMoveToTop } from "react-icons/go";
import { BsCartCheck, BsPhone } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Mainlayout = () => {
    const [showGoToTop, setShowGoToTop] = useState(false)
    const handleClickToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (

        <>
            <div className='m-auto background-primary p-3' >
                <header className="m-auto w-navbar">
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">
                                <div className="background-primary w-25">
                                    <Link to="/" className="btn" style={{ fontSize: '28px' }}>
                                        <img src='/logo_no_bachground.png' width={50} alt="Logo" />
                                        <span className="">PHBshop</span>
                                    </Link>
                                </div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Form className="d-flex ml-2 mr-2 w-100 mb-2" role="search">
                                    <div className="d-flex bg-light" style={{ width: '100%' }}>
                                        <FormControl type="search" placeholder="Bạn tìm gì" aria-label="Bạn tìm gì" />
                                        <Button variant="outline-secondary" ><FiSearch /></Button>
                                    </div>
                                </Form>
                            </Navbar.Collapse>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to='/user' active className="btn button-primary ml-2 mr-2 mb-2">Tài khoản và đơn hàng</Link>
                                    <Link to="/cart" className="btn button-primary ml-2 mr-2 mb-2"><BsCartCheck /> Giỏ hàng</Link>
                                    <Link to="/login" className="btn button-primary ml-2 mr-2 mb-2" ><FaRegUser /> Đăng Nhập</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container className="p-0 m-0 ml-3" >
                        <Row className="d-flex justify-content-start">
                            <Link>
                                <Link to="/dien-thoai" className="btn mr-3"><BsPhone className="icon-link" />Điện thoại</Link>
                            </Link>
                            <Link className="btn mr-3">Hỗ trợ 5G</Link>
                            <Link className="btn mr-3">Kháng bui, nước</Link>
                            <Link className="btn mr-3">Sạc không dây</Link>
                            <Link className="btn mr-3">Sạc nhanh</Link>
                        </Row>
                    </Container>
                </header>
            </div>
            <div className='m-auto' style={{ width: 1200 }}>

                <main className="mt-5 mb-5">
                    <Outlet />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </main>


            </div>
            {showGoToTop && (
                <button
                    onClick={handleClickToTop}
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>
                    <GoMoveToTop />
                </button>
            )}

        </>
    )
}

export default Mainlayout
