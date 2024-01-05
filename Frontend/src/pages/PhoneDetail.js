import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import Footer from '../Components/Footer';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useDispatch, useSelector } from 'react-redux'
import { GetAPhone } from '../features/phone/phoneSlice';
import { CreateWishList } from '../features/wishlists/wishlistSlice';
import { Helmet } from 'react-helmet';
import { GetCapacitiesByPhoneId } from '../features/capacity/capacitySlice';
import { GetColorsByPhoneId } from '../features/color/colorSlice';
import { GetProductForUser } from '../features/products/productSlice';
import { AddCart } from '../features/cart/cartSlice';

const PhoneDetail = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const phoneState = useSelector(state => state?.phone?.APhone);
    const productState = useSelector(state => state?.product?.AProduct);
    const authState = useSelector(state => state?.auth?.user?.userDto);
    const capacityState = useSelector(state => state?.capacity?.capacities);
    const colorState = useSelector(state => state?.color?.colors);
    const phoneId = useParams().phoneId;
    const [activeButtonCapacity, setActiveButtonCapacity] = useState(null);
    const [activeButtonColor, setActiveButtonColor] = useState(null);

    useEffect(() => {
        dispatch(GetAPhone(phoneId))
            .then(() => setIsLoading(false))
            .catch(() => 'error');
        dispatch(GetCapacitiesByPhoneId(phoneId))
        dispatch(GetColorsByPhoneId(phoneId))
    }, []);

    const [AProduct, setAProduct] = useState({
        "phoneId": phoneId,
        "colorId": phoneState?.products[0]?.colorId,
        "capacityId": phoneState?.products[0]?.capacityId
    });
    useEffect(() => {
        if (phoneState?.products && phoneState.products.length > 0) {
            setAProduct(prevState => ({
                ...prevState,
                colorId: phoneState.products[0].colorId,
                capacityId: phoneState.products[0].capacityId
            }));
        }
    }, [phoneState]);
    useEffect(() => {
        dispatch(GetProductForUser(AProduct))
    }, [AProduct]);

    const handleColorSelection = (colorId) => {
        setAProduct(prevState => ({
            ...prevState,
            colorId: colorId
        }));
        setActiveButtonColor(colorId);
    };

    const handleCapacitySelection = (capacityId) => {
        setAProduct(prevState => ({
            ...prevState,
            capacityId: capacityId
        }));
        setActiveButtonCapacity(capacityId);
    };


    if (isLoading) {
        return <div className='w-100 d-flex justify-content-center' style={{ height: '300px' }}>
            <div className="spinner"></div>
        </div>;
    }

    if (!phoneState) {
        window.location.href = '/404';
        return null;
    }
    //Thêm sản phẩm yêu thích
    const addWishlist = () => {
        dispatch(CreateWishList({
            userId: authState?.id,
            phoneId: phoneState?.id,
        }))
    }

    const addCart = () => {
        dispatch(AddCart({
            userId: authState?.id,
            productId: productState?.id,
            quantity: 1
        }))
    }


    const formatNumber = (number) => {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(number);
    };
    return (
        <>
            <Helmet>
                <title>{phoneState.name} | PHBshop</title>
            </Helmet>

            <div>
                <Breadcrumb separator="›">
                    <Breadcrumb.Item>
                        <Link to="/">Điện thoại</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Điện thoại iPhone (Apple)</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Container className='pl-0 ml-0'>
                    <h5 style={{ display: 'inline-block' }}>Điện thoại {phoneState.name} </h5>
                    <span className=' ml-3 text-primary'>171 đánh giá</span>
                    <Link className='ml-3' onClick={addWishlist}>
                        <div className="heart heart1">
                            <svg width="1em" height="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3C200.7 23 111.4 15.6 53.6 64.3C-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9c14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3m-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7c38.9-32.7 98.9-27.8 136.5 10.5l35 35.7l35-35.7c37.8-38.5 97.8-43.2 136.5-10.6c51.1 43.1 43.5 113.9 7.3 150.8"></path>
                            </svg>
                        </div>
                        <div className="heart heart2">
                            <svg width="1em" height="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#ff0000" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link to="/so-sanh" className='ml-3' >
                        <CiCirclePlus className='mb-1' style={{ fontSize: '20px' }} />
                        So sánh
                    </Link>
                </Container>
                <Container className='border-top'>
                    <Row>
                        <Col xl={7}>
                            {/* Slider điện thoại */}
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/1.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/2.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/3.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/4.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/5.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/6.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/7.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/8.jpg' alt='zxc' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src='/Images/detail/1/9.jpg' alt='zxc' />
                                </SwiperSlide>
                            </Swiper>


                            {/* Ảnh thông tin điện thoại */}
                            <Container className='bg-light '>
                                <Row >
                                    <img className='w-100' src='/Images/detail/1/note.jpg' style={{ width: '100%' }} alt='zxczxc' />
                                </Row>
                                <Row className='mt-5'>
                                    <h5>Thông tin sản phẩm</h5>
                                    <p>{phoneState.desc}</p>
                                </Row>


                            </Container>
                            {/* Đánh giá sản phẩm */}
                            <Container className='bg-light shadow p-3 mb-5 bg-white rounded  mt-3'>
                                <Row>
                                    <Col>
                                        <div>
                                            <h2>Đánh giá sản phẩm</h2>
                                            <p>Điểm đánh giá: 0</p>
                                            <div>

                                            </div>
                                        </div>
                                        <div className='d-flex justify-start items-center'>
                                            <p className='mt-1'>Lọc đánh giá theo</p>
                                            <Button className='bg-light ml-2 text-info '>Tất cả</Button>
                                            <Button className='bg-light ml-2 text-info '>5 sao</Button>
                                            <Button className='bg-light ml-2 text-info '>4 sao</Button>
                                            <Button className='bg-light ml-2 text-info '>3 sao</Button>
                                            <Button className='bg-light ml-2 text-info '>2 sao</Button>
                                            <Button className='bg-light ml-2 text-info '>1 sao</Button>
                                        </div>
                                        <div className='mt-4'>
                                            <div className='d-flex items-start justify-start '>
                                                <div className='avatar overflow-hidden'>
                                                    <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='zxczcxzxc' />
                                                </div>
                                                <div className='flex-column items-start justify-start pl-2 w-11/12'>
                                                    <div className='d-flex items-center'>
                                                        <span style={{ display: 'inline-block', direction: '1tr' }}>
                                                            <span style={{ cursor: 'inherit', display: 'inline-block', position: 'relative' }}>&#9733;</span>
                                                            <span style={{ cursor: 'inherit', display: 'inline-block', position: 'relative' }}>&#9733;</span>
                                                            <span style={{ cursor: 'inherit', display: 'inline-block', position: 'relative' }}>&#9733;</span>
                                                            <span style={{ cursor: 'inherit', display: 'inline-block', position: 'relative' }}>&#9733;</span>
                                                            <span style={{ cursor: 'inherit', display: 'inline-block', position: 'relative' }}>&#9733;</span>
                                                        </span>
                                                        <p className="text-brow text-sm mx-2">2023-11-03T07:07:29.000Z</p>
                                                    </div>
                                                    <div class="d-flex items-center">
                                                        <p class="text-ddv font-bold text-16">
                                                            <span class="text-16 mx-2 text-black font-normal">sản phẩm tạm ổn, phục vụ ok</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex items-start justify-start  '>
                                                <div className='avatar overflow-hidden pr-5 ml-5'>
                                                    <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='asdasdasd' />
                                                </div>
                                                <div className='flex-column items-start justify-start px-3 w-11/12'>
                                                    <div class="d-flex items-center">
                                                        <p class="text-ddv font-bold text-16 mt-1" >
                                                            Di Động Việt xin chào Anh Tân ạ! Di động việt xin chân thành cảm ơn Anh Tài đã tin tưởng và sử dụng dịch vụ cũng như sản phẩm tại Di Động Việt ạ! Di Động Việt hy vọng tiếp được phục vụ Anh Tài trong tương lai ạ !
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                            {/* Bình luận */}
                            <Container className='bg-light shadow p-3 mb-5 bg-white rounded '>
                                <Row>
                                    <Col>
                                        <div className=' my-2 rounded-lg  bg-white py-3 px-3'>
                                            <div className='flex-column'>
                                                <h4 className='text-danger font-weight-bold p-0'>Bình luận</h4>
                                                <div className='mb-5'>
                                                    <Form>
                                                        <Row className="flex flex-wrap md:flex-nowrap w-full items-start h-full justify-between my-2">
                                                            <Col md={10} className="w-full h-full mb-3 md:mb-0">
                                                                <Form.Group className="mantine-InputWrapper-root mantine-Textarea-root mantine-1m3pqry">
                                                                    <Form.Control
                                                                        as="textarea"
                                                                        className="rounded-lg border-neutral-300 mantine-Input-input mantine-Textarea-input mantine-1jx8v2y"
                                                                        id="mantine-r8"
                                                                        placeholder="Nhận xét về sản phẩm"
                                                                        rows="6"
                                                                        aria-invalid="false"
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={2} className="w-full flex flex-col md:px-2">
                                                                <Button
                                                                    variant="primary"
                                                                    type="submit"
                                                                    className="mantine-UnstyledButton-root mantine-Button-root bg-ddv hover:bg-ddv text-white rounded-lg cursor-pointer mt-2 mantine-ijj40k"
                                                                    style={{ width: '100%', height: '44px' }}
                                                                >
                                                                    Gửi
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                                {
                                                    productState && productState?.comments?.map((item, index) => {
                                                        return (
                                                            <div className='pt-4'>
                                                                <div className='d-flex items-start justify-start '>
                                                                    <div className='avatar overflow-hidden'>
                                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='asdasd' />
                                                                    </div>
                                                                    <div className='flex-column items-start justify-start pl-2 w-11/12'>
                                                                        <div className='d-flex items-center'>
                                                                            <p className="text-brow text-sm mx-2">2023-11-03T07:07:29.000Z</p>
                                                                        </div>
                                                                        <div class="d-flex items-center">
                                                                            <p class="text-ddv font-bold text-16">
                                                                                <span class="text-16 mx-2 text-black font-normal">{item?.content}</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    item && item?.childComments?.map(i => {
                                                                        return (
                                                                            <div className='d-flex items-start justify-start  '>
                                                                                <div className='avatar overflow-hidden pr-5 ml-5'>
                                                                                    <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='asdasd' />
                                                                                </div>
                                                                                <div className='flex-column items-start justify-start px-3 w-11/12'>
                                                                                    <div class="d-flex items-center">
                                                                                        <p class="text-ddv font-bold text-16 mt-1" >
                                                                                            {i?.content}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                                
                                                            </div>
                                                        )
                                                    })
                                                }
                                                


                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={5}>
                            <Container className='bg-light '>
                                <Row>
                                    <Col>
                                        {
                                            capacityState &&
                                            capacityState.map((item, index) => {
                                                return (
                                                    <Button
                                                        key={index}
                                                        onClick={() => handleCapacitySelection(item?.id)}
                                                        variant="outline-secondary secondary"
                                                        className={`ml-0 mr-2 mt-1 mb-1 ${activeButtonCapacity === item?.id ? 'border-primary border-primary-3' : ''}`}
                                                    >
                                                        {item.totalCapacity}GB
                                                    </Button>
                                                );
                                            })
                                        }
                                    </Col>
                                </Row>
                                <Row className='mt-1'>
                                    <Col>
                                        {
                                            colorState && colorState?.map((item, index) => {
                                                return (
                                                    <Button
                                                        key={index}
                                                        onClick={() => handleColorSelection(item?.id)}
                                                        className={`ml-0 mr-2 mt-1 mb-1 ${activeButtonColor === item?.id ? 'border-primary border-primary-3' : ''}`}
                                                        variant="outline-secondary secondary"
                                                    >
                                                        {item.colorName}
                                                    </Button>

                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12} md={12} sm={12}>
                                        <h5>Giá</h5>
                                        <p className='h4 detail-price text-danger font-weight-bold amount'>{formatNumber(productState?.price)}</p>
                                    </Col>
                                    <Col xl={12} md={12} sm={12}>
                                        <div className='detail-boder p-2'>
                                            <h6>Khuyến mãi</h6>
                                            <sub>Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 15/11</sub>
                                            <div className='detail-boder'>
                                                <ul >
                                                    <li>Cơ hội trúng 50 sổ tiết kiệm, tổng trị giá đến 500 triệu đồng</li>
                                                    <li>Thu cũ Đổi mới: Giảm đến 1 triệu (Tuỳ model máy cũ, Không kèm Trả góp 0%, thanh toán qua cổng online, mua kèm) </li>
                                                    <li>Giảm thêm 5% khi mua cùng sản phẩm có giá cao hơn (trừ Xe đạp, sản phẩm Apple, sản phẩm giá sốc)</li>
                                                    <li>Hoàn 200,000đ cho chủ thẻ tín dụng HOME CREDIT khi thanh toán đơn hàng từ 5,000,000đ</li>
                                                    <li>Nhập mã MMSALE100 giảm ngay 1% tối đa 100.000đ khi thanh toán qua MOMO</li>
                                                </ul>
                                            </div>
                                            <div className='w-100'>
                                                <div>
                                                    <Button onClick={(e) => addCart()} variant="danger" className='w-100' >MUA NGAY</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </Container>
                            <Container className=' bg-light '>
                                <Row className='ml-4'>
                                    <h5>Cấu hình Điện Thoại iPhone 12 128GB</h5>
                                    <Table striped bordered>
                                        <tbody>
                                            <tr>
                                                <td>Màn hình:</td>
                                                <td>{phoneState.loaiMan} {phoneState.kichThuoc} {phoneState.doPhanGiai}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera sau:</td>
                                                <td>{phoneState.cameraSau}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera trước:</td>
                                                <td>{phoneState.cameraTruoc}</td>
                                            </tr>
                                            <tr>
                                                <td>Chip:</td>
                                                <td>{phoneState.cpu}</td>
                                            </tr>
                                            <tr>
                                                <td>RAM:</td>
                                                <td>{phoneState.ram} GB</td>
                                            </tr>
                                            <tr>
                                                <td>Dung lượng lưu trữ:</td>
                                                <td>{phoneState.rom} GB</td>
                                            </tr>

                                            <tr>
                                                <td>Pin, Sạc:</td>
                                                <td>{phoneState.pin}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <footer className='m-auto' style={{ width: 1200 }}>
                    <Footer />
                </footer>
            </div>


        </>
    )
}

export default PhoneDetail;