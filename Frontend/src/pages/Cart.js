import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { BsCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setQuantity(value);
        }
    };
    return (
        <>
            <Helmet>
            <title>Giỏ hàng | PHBshop</title>
        </Helmet>
            {/* Cart rỗng */}
            <div className='text-center p-5' style={{ display: "block" }}>
                <div className='icon-cart'><BsCartXFill /></div>
                <p>Không có sản phẩm nào trong giỏ hàng</p>
                <Link to="/" className='btn btn-outline-primary w-50 bg-light text-primary bold'>Về trang chủ</Link>
            </div>
            {/* Có sản phẩm */}
            {/* <div className='d-flex justify-content-center w-50 m-auto py-5'>
                <Container>
                    <Row className=' pb-2 mb-4  border-bottom border-info'>
                        <Col xl={2} md={2} sm={2} className='p-2'>
                            <Image src='https://bit.ly/3ul4poY' width={'75px'} />
                            <Button variant=''>
                                <span className='rounded-circle border p-1 bg-secondary mr-1'>
                                    <strong>X</strong>
                                </span>
                                Xóa
                            </Button>
                        </Col>
                        <Col xl={7} md={7} sm={7}>
                            <h5>Đồng hồ thông minh BeFit Watch Ultra S 52.1mm</h5>
                            <span>Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO (Xem chi tiết tại đây)</span>
                            <span>Màu: Đen</span>
                        </Col>
                        <Col xl={3} md={3} sm={3} className='text-right'>

                            <p className='text-danger'>1.490.000đ</p>
                            <InputGroup>
                                <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                                <FormControl
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    min={1}
                                />
                                <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className=' pb-2 mb-4  border-bottom border-info'>
                        <Col xl={2} md={2} sm={2} className='p-2'>
                            <Image src='https://bit.ly/3ul4poY' width={'75px'} />
                            <Button variant=''>
                                <span className='rounded-circle border p-1 bg-secondary mr-1'>
                                    <strong>X</strong>
                                </span>
                                Xóa
                            </Button>
                        </Col>
                        <Col xl={7} md={7} sm={7}>
                            <h5>Đồng hồ thông minh BeFit Watch Ultra S 52.1mm</h5>
                            <span>Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO (Xem chi tiết tại đây)</span>
                            <span>Màu: Đen</span>
                        </Col>
                        <Col xl={3} md={3} sm={3} className='text-right'>

                            <p className='text-danger'>1.490.000đ</p>
                            <InputGroup>
                                <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                                <FormControl
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    min={1}
                                />
                                <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className=' pb-2 mb-4  border-bottom border-info'>
                        <Col xl={2} md={2} sm={2} className='p-2'>
                            <Image src='https://bit.ly/3ul4poY' width={'75px'} />
                            <Button variant=''>
                                <span className='rounded-circle border p-1 bg-secondary mr-1'>
                                    <strong>X</strong>
                                </span>
                                Xóa
                            </Button>
                        </Col>
                        <Col xl={7} md={7} sm={7}>
                            <h5>Đồng hồ thông minh BeFit Watch Ultra S 52.1mm</h5>
                            <span>Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO (Xem chi tiết tại đây)</span>
                            <span>Màu: Đen</span>
                        </Col>
                        <Col xl={3} md={3} sm={3} className='text-right'>

                            <p className='text-danger'>1.490.000đ</p>
                            <InputGroup>
                                <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                                <FormControl
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    min={1}
                                />
                                <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='pb-2 mb-4  border-bottom border-info'>
                        <Col className='text-left'>
                            Tạm tính (2 sản phẩm)
                        </Col>
                        <Col className='text-right'>
                            3.470.000đ
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                                <Link to="/cart/thanh-toan" className='w-100 p-2 btn btn-secondary'>ĐẶT HÀNG</Link>
                        </Col>
                    </Row>

                </Container>
            </div> */}
        </>
    )
}

export default Cart
