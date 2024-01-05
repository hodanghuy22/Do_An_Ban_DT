import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { BsCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteCart, GetCart, resetState } from '../features/cart/cartSlice';
const Cart = () => {
    const dispatch = useDispatch()
    const userState = useSelector(state => state?.auth?.user?.userDto)
    const cartState = useSelector(state => state?.cart?.carts)
    const [sum, setSum] = useState();
    useEffect(() => {
        dispatch(GetCart(userState?.id))
    }, [])
    useEffect(() => {
        let dem = 0
        for (let i = 0; i < cartState.length; i++) {
            dem += cartState[i]?.quantity * cartState[i]?.product?.price;
        }
        setSum(dem)
    }, [cartState])
    const deleteAProductCart = (e) => {
        dispatch(DeleteCart(e))
        setTimeout(() => {
            dispatch(GetCart(userState?.id))
        }, 300)
    }
    return (
        <>
            <Helmet>
                <title>Giỏ hàng | PHBshop</title>
            </Helmet>
            {/* Cart rỗng */}
            {
                !cartState && (
                    <div className='text-center p-5' style={{ display: "block" }}>
                        <div className='icon-cart'><BsCartXFill /></div>
                        <p>Không có sản phẩm nào trong giỏ hàng</p>
                        <Link to="/" className='btn btn-outline-primary w-50 bg-light text-primary bold'>Về trang chủ</Link>
                    </div>
                )
            }
            {/* Có sản phẩm */}
            {
                cartState && (
                    <div className='d-flex justify-content-center w-50 m-auto py-5'>
                        <Container>
                            {
                                cartState.map((item, index) => {
                                    return (
                                        <Row key={index} className=' pb-2 mb-4  border-bottom border-info'>
                                            <Col xl={2} md={2} sm={2} className='p-2'>
                                                <Image src={item?.product?.images ? item?.product?.images[0]?.url : "https://bit.ly/3ul4poY"} width={'75px'} />
                                                <Button onClick={() => deleteAProductCart(item?.id)} variant=''>
                                                    <span className='rounded-circle border p-1 bg-secondary mr-1'>
                                                        <strong>X</strong>
                                                    </span>
                                                    Xóa
                                                </Button>
                                            </Col>
                                            <Col xl={7} md={7} sm={7}>
                                                <h5>Đồng hồ thông minh BeFit Watch Ultra S 52.1mm</h5>
                                                <span>Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO (Xem chi tiết tại đây)</span>
                                                <span>Màu: {item?.product?.color?.colorName}</span>
                                            </Col>
                                            <Col xl={3} md={3} sm={3} className='text-right'>

                                                <p className='text-danger'>{item?.product?.price}đ</p>
                                                <InputGroup>
                                                    <Button variant="outline-secondary">-</Button>
                                                    <FormControl
                                                        type="number"
                                                        value={item?.quantity}
                                                        // onChange={handleInputChange}
                                                        min={1}
                                                    />
                                                    <Button variant="outline-secondary">+</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }



                            <Row className='pb-2 mb-4  border-bottom border-info'>
                                <Col className='text-left'>
                                    Tạm tính ({cartState.length} sản phẩm)
                                </Col>
                                <Col className='text-right text-danger'>
                                    {sum}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/cart/thanh-toan" className='w-100 p-2 btn btn-secondary'>ĐẶT HÀNG</Link>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                )
            }
        </>
    )
}

export default Cart
