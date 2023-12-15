import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { GoMoveToTop } from "react-icons/go";
import { BsCartCheck, BsPhone } from "react-icons/bs";
import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, Outlet } from "react-router-dom";
const Mainlayout = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (

        <>
            <div className='m-auto background-primary p-3' >
                <header className="m-auto " style={{ width: 1200 }}>
                    <Navbar bg="body-tertiary" className="p-0 mb-4 ">
                        <Container fluid>
                            <div className="background-primary w-25">
                                <Link to="/" className="btn" style={{ fontSize: '28px' }}>
                                    <img src='/logo_no_bachground.png' width={50} alt="Logo" />
                                    <span className="">PHBshop</span>
                                </Link>
                            </div>
                            <Navbar.Toggle aria-controls="navbarSupportedContent" />
                            <div className="d-flex ml-auto">

                                <Navbar.Collapse id="navbarSupportedContent">
                                    <Form className="d-flex ml-2 mr-2" role="search">
                                        <div className="d-flex bg-light" style={{ width: '380px' }}>
                                            <FormControl type="search" placeholder="Bạn tìm gì" aria-label="Bạn tìm gì" />
                                            <Button variant="outline-secondary" ><FiSearch /></Button>
                                        </div>
                                    </Form>
                                    <Nav className="me-auto mb-2 mb-lg-0">
                                        <Link to='/user' active className="btn button-primary ml-2 mr-2">Tài khoản và đơn hàng</Link>
                                        <Link to="/cart" className="btn button-primary ml-2 mr-2"><BsCartCheck /> Giỏ hàng</Link>
                                        <Link to="/login" className="btn button-primary ml-2 mr-2" ><FaRegUser /> Đăng Nhập</Link>

                                    </Nav>
                                </Navbar.Collapse>
                            </div>

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
                </main>


            </div>
            <button onClick={handleScrollToTop} className="scroll-to-top-button mb-3">
                <GoMoveToTop style={{ fontSize: '30px' }} />
            </button>

        </>
    )
}

export default Mainlayout
