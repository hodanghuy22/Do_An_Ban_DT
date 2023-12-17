import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaMapMarkedAlt } from "react-icons/fa";
import { PiSealWarningFill } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const ChiTietDonHang = () => {
    return (
        <div>
            <Helmet>
                <title>Chi tiết đơn hàng #1</title>
            </Helmet>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col xl={7}>
                        <h6>
                            Chi tiết đơn hàng #1
                            <span>-</span>
                            <span className='text-danger'>Đã hủy -20:37 21/11</span>
                        </h6>
                        <div className='mt-5 bg-transparent shadow p-3 mb-5 rounded ' style={{ height: '220px' }}>
                            <p><FaMapMarkedAlt />THÔNG TIN NHẬN HÀNG</p>
                            <div className='d-flex'>
                                <p style={{ width: "100px" }}>Người nhận:</p>
                                <p style={{ width: "300px" }}>Anh Phạm Quảng Bình - 0329155867</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{ width: "100px" }}>Nhận tại:</p>
                                <p style={{ width: "300px" }}>Siêu thị 667 Lê Văn Việt, P. Tân Phú, Q. 9, Thành phố Hồ Chí Minh</p>
                            </div>
                            <div className='d-flex'>
                                <p style={{ width: "100px" }}>Nhận lúc:</p>
                                <p style={{ width: "300px" }}>Trước 22:00 - Thứ Ba (28/11)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} className=''>
                        <h6>Đặt lúc: 20:36 Thứ Hai, 20/11/2023</h6>
                        <div className='mt-5 bg-transparent shadow p-3 mb-5 rounded ' style={{ height: '220px' }}>
                            <p><FaMapMarkedAlt />HÌNH THỨC THANH TOÁN</p>
                            <p className='text-warning'><PiSealWarningFill className='text-warning h3 ' />Cần thanh toán 30.000₫ trước 20:36, Thứ Ba (21/11) tại siêu thị gần nhất</p>
                        </div>
                    </Col>
                </Row>
                <Row className=''>
                    <div className='mt-5 bg-transparent shadow p-3  mb-5 rounded w-100'>
                        <h6><IoBagOutline className='h4' />THÔNG TIN SẢN PHẨM</h6>
                        <Container>
                            <Row className=' pb-2 mb-4  border-bottom border-info'>
                                <Col xl={2} md={2} sm={2} className='p-2'>
                                    <img src="https://cdn.tgdd.vn/Products/Images/57/310262/pin-sac-du-phong-polymer-10000mah-ava-jp299-trang-1-180x125.jpg" width="160" height="100" />
                                </Col>
                                <Col xl={7} md={7} sm={7}>
                                    <p className='pt-4 pl-4 h5'>Pin sạc dự phòng Polymer 10000mAh Type C AVA+ PB100S Đen</p>
                                    <p className='pt-2 pl-4 '>Số lượng: 1</p>
                                </Col>
                                <Col xl={3} md={3} sm={3} className='text-right '>
                                    <p className='text-danger h4 mt-4'>190.000đ</p>
                                </Col>
                            </Row>
                            <Row className=' pb-2 mb-4  border-bottom border-info'>
                                <Col xl={2} md={2} sm={2} className='p-2'>
                                    <img src="https://cdn.tgdd.vn/Products/Images/57/310262/pin-sac-du-phong-polymer-10000mah-ava-jp299-trang-1-180x125.jpg" width="160" height="100" />
                                </Col>
                                <Col xl={7} md={7} sm={7}>
                                    <p className='pt-4 pl-4 h5'>Pin sạc dự phòng Polymer 10000mAh Type C AVA+ PB100S Đen</p>
                                    <p className='pt-2 pl-4 '>Số lượng: 1</p>
                                </Col>
                                <Col xl={3} md={3} sm={3} className='text-right '>
                                    <p className='text-danger h4 mt-4'>190.000đ</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-right h5'>
                                    <div className='d-flex justify-content-end'>
                                        <p className='text-left' style={{ width: "150px" }}>Tạm tính:</p>
                                        <p style={{ width: "200px" }}>380.000đ</p>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <p className='text-left font-weight-bold' style={{ width: "150px" }}>Cần thanh toán</p>
                                        <p style={{ width: "200px" }} className='text-danger font-weight-bold'>380.000đ</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='justify-content-center mt-5'>
                                <Link to="/user" className='btn border-warning text-dark p-3 rounded btn-hover font-weight-bold'>VỀ TRANG DANH SÁCH ĐƠN HÀNG</Link>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default ChiTietDonHang
