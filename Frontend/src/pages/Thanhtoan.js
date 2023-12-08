import React, { useState } from 'react'
import { Button, Col, Container, Image,  Row } from 'react-bootstrap'
import { IoMdArrowBack } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { Link } from 'react-router-dom';

const Thanhtoan = () => {
    const [selectedTab, setSelectedTab] = useState('thongTin');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <div>
            <Container className='w-50 m-auto '>
                <Row >
                    <p className='text-center w-100 bg-transparent'><Link to="/cart"><IoMdArrowBack className='float-left mt-2 h3' /></Link> <p className='h4 mt-2'>THANH TOÁN</p></p>
                </Row>
                <Row className='mt-2 border-top text-center '>
                    <Col className={`mr-2 ${selectedTab === 'thongTin' ? 'border-bottom border-danger text-danger font-weight-bold' : ''}`}>
                        <button
                            id="btnThongTin"
                            className={`p-2 w-100 ${selectedTab === 'text-danger' ? 'secondary' : ''} border-0 bg-transparent focus-outline-none ${selectedTab === 'thongTin' ? 'selected' : ''}`}
                            onClick={() => handleTabChange('thongTin')}
                        >
                            1. THÔNG TIN
                        </button>
                    </Col>
                    <Col className={`ml-2 ${selectedTab === 'thanhToan' ? 'border-bottom border-danger text-danger font-weight-bold' : 'border-bottom border-gray font-weight-bold'}`}>
                        <button
                            id="btnThanhToan"
                            className={`p-2 w-100  ${selectedTab === 'text-danger' ? 'secondary' : ''}  border-0 bg-transparent focus-outline-none ${selectedTab === 'thanhToan' ? 'selected' : ''}`}
                            onClick={() => handleTabChange('thanhToan')}
                        >
                            2. THANH TOÁN
                        </button>
                    </Col>
                </Row>
                <div id="thongTin" style={{ display: selectedTab === 'thongTin' ? 'block' : 'none' }}>
                    <Row className=' pb-2 mb-4   mt-4 bg-light shadow p-4 mb-5 bg-white rounded'>
                        <Col xl={2} md={2} sm={2} className='p-2'>
                            <Image src='https://bit.ly/3ul4poY' width={'75px'} />
                        </Col>
                        <Col xl={7} md={7} sm={7}>
                            <h5>Đồng hồ thông minh BeFit Watch Ultra S 52.1mm</h5>
                            <p className='text-danger'>Giá: 1.490.000đ</p>
                        </Col>
                        <Col xl={3} md={3} sm={3} className='text-right'>
                            <p>Số lượng: <span>2</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='  bg-light shadow p-4 mb-5 bg-white rounded w-100 d-content-a'>
                            <h4>THÔNG TIN KHÁCH HÀNG</h4>
                            <form>
                                <div class="form-group w-50">
                                    <label for="hoTen">Họ tên người nhận</label>
                                    <input type="text" class="form-control" id="hoTen" placeholder="Nhập họ tên" />
                                </div>
                                <div class="form-group w-50">
                                    <label for="soDienThoai">Số điện thoại người nhận</label>
                                    <input type="tel" class="form-control" id="soDienThoai" placeholder="Nhập số điện thoại" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email người nhận</label>
                                    <input type="email" class="form-control" id="email" placeholder="Nhập email" />
                                </div>
                                <div class="form-group">
                                    <label for="cuaHang">Chọn cửa hàng đến nhận hàng</label>
                                    <select class="form-control" id="cuaHang">
                                        <option value="">-- Chọn cửa hàng --</option>
                                        <option value="cuaHang1">Cửa hàng 1</option>
                                        <option value="cuaHang2">Cửa hàng 2</option>
                                        <option value="cuaHang3">Cửa hàng 3</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                    </Row>
                    <Row>
                        <div className='  bg-light shadow p-4 mb-5 bg-white rounded w-100 d-content-a'>
                            <h4>THÔNG TIN NHẬN HÀNG</h4>
                            <div class="form-group">
                                <label for="thanhPho">Hồ Chí Minh</label>
                                <input type="text" class="form-control" id="thanhPho" placeholder="Nhập tỉnh/thành phố" />
                            </div>
                            <div class="form-group">
                                <label for="quanHuyen">Chọn quận/huyện</label>
                                <select class="form-control" id="quanHuyen">
                                    <option value="">-- Chọn quận/huyện --</option>
                                    <option value="quan1">Quận 1</option>
                                    <option value="quan2">Quận 2</option>
                                    <option value="quan3">Quận 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="phuongXa">Chọn phường/xã</label>
                                <select class="form-control" id="phuongXa">
                                    <option value="">-- Chọn phường/xã --</option>
                                    <option value="phuong1">Phường 1</option>
                                    <option value="phuong2">Phường 2</option>
                                    <option value="phuong3">Phường 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="soNhaDuong">Số nhà, tên đường</label>
                                <input type="text" class="form-control" id="soNhaDuong" placeholder="Nhập số nhà, tên đường" />
                            </div>
                            <div class="form-group">
                                <label for="ghiChu">Ghi chú khác (nếu có)</label>
                                <textarea class="form-control" id="ghiChu" rows="3" placeholder="Nhập ghi chú"></textarea>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Button variant='text-danger bg-danger w-100 text-light' onClick={() => handleTabChange('thanhToan')}>Tiếp tục</Button>

                    </Row>
                </div>
                <div id="thanhToan" style={{ display: selectedTab === 'thanhToan' ? 'block' : 'none' }} className='mt-4'>
                    <div className='bg-light shadow p-4 mb-5 bg-white rounded'>
                        <p>
                            <input type='text' placeholder='Nhập mã giảm giá (chỉ ap dụng 1 lần)' className='w-75  py-2 ' />
                            <span className=' float-right btn btn-danger '>Áp dụng</span>
                        </p>
                        <p>
                            <span className='float-right'></span>
                        </p>
                        <p>Số lượng sản phẩm <span className='float-right'>02</span></p>
                        <p>Tiền hàng (tạm tính) <span className='float-right'>3.380.000đ</span></p>
                        <p>Phí vận chuyển<span className='float-right'>02</span></p>
                        <hr />
                        <p className=''>Tổng tiền đã bao gồm VAT <span className='float-right h5 font-weight-bold'>3.380.000đ</span></p>
                    </div>
                    <div>
                        <h4>THÔNG TIN THANH TOÁN</h4>
                        <div className='bg-light shadow p-4 mb-5 bg-white rounded'>
                            <h5><MdPayment style={{ fontSize: '40px' }} className='mr-3' /><span className='text-danger'>Chọn phương thức thanh toán</span></h5>
                        </div>
                    </div>
                    <div>
                        <h4>THÔNG TIN NHẬN HÀNG</h4>
                        <div className='bg-light shadow p-4 mb-5 bg-white rounded'>

                        <p>Khách hàng:<span className='float-right'>Pham Bình</span></p>
                        <p>Số diện thoại: <span className='float-right'>0329155867</span></p>
                        <p>Email: <span className='float-right'>0306211331@caothang.edu.vn</span></p>
                            <p>Nhận hàng tại: <span className='float-right'>65 Huỳnh Thúc Kháng, P.Bến Nghé, Q.1, Tp.HCM</span></p>
                        </div>
                    </div>
                    <Row className='bg-light shadow p-3 mb-5 bg-white rounded'>
                        <p><span className='font-weight-bold mr-2'>Tổng tiền tạm tính:</span> <span className='text-danger font-weight-bold'>3.3380.000đ</span></p>
                        <Button variant='text-danger bg-danger w-100 text-light'>Thanh toán</Button>
                    </Row>
                </div>
            </Container>
                
         
        </div>
        
    )
}

export default Thanhtoan
