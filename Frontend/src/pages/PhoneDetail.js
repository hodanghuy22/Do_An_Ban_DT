import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
import { RiRefund2Line } from "react-icons/ri";
import { BsShieldCheck, BsBox } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { BsCartCheck} from "react-icons/bs";
import { Container, Row, Col, Carousel, Button, Table, Form } from 'react-bootstrap';
const PhoneDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [rating, setRating] = useState(0);
    // Mảng chứa các icon đánh giá
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
    // Hàm xử lý sự kiện khi người dùng nhấp vào một icon đánh giá
    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    }
    return (

        <>
            <Breadcrumb separator="›">
                <Breadcrumb.Item>
                    <Link to="/">Điện thoại</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/iphone">Điện thoại iPhone (Apple)</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Container className='pl-0 ml-0'>
                <h5 style={{ display: 'inline-block' }}>Điện thoại iPhone 12 128GB</h5>
                <Link style={{ color: 'yellow' }}><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></Link>
                <span>171 đánh giá</span>
                <Link to="/so-sanh" className='ml-3' > 
                    <CiCirclePlus className='mb-1' style={{ fontSize: '20px' }} />
                    So sánh
                </Link>
            </Container>
            <Container className='border-top'>
                <Row>
                    <Col xl={7}>
                        {/* Slider điện thoại */}
                        <Carousel  className='bg-light ' data-bs-theme="dark" prevIcon={null} nextIcon={null}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/1.jpg"
                                    alt="First slide 1"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/2.jpg"
                                    alt="First slide 2"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/3.jpg"
                                    alt="First slide 3"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/4.jpg"
                                    alt="First slide 4"
                                /> 
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/5.jpg"
                                    alt="First slide 5"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/6.jpg"
                                    alt="First slide 6"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/7.jpg"
                                    alt="First slide7" 
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/8.jpg"
                                    alt="First slide 8"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/9.jpg"
                                    alt="First slide 9"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/10.jpg"
                                    alt="First slide10"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/11.jpg"
                                    alt="First slide 11"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/12.jpg"
                                    alt="First slide 12"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/13.jpg"
                                    alt="First slide 13"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/detail/1/14.jpg"
                                    alt="First slide 14"
                                />
                            </Carousel.Item>
                        </Carousel>

                        {/* Bảo hành */}
                        <Container className='mt-5 bg-light '>
                            <Row className='detail-boder p-4'>
                                <Col xl={6} md={6} sm={6} className='p-2'>
                                    <span><RiRefund2Line style={{ fontSize: '32px', padding: '4px', color: 'blue' }} /> Hư gì đổi nấy <strong>12 tháng</strong> tại 3300 siêu thị toàn quốc (miễn phí tháng đầu)</span>
                                </Col>
                                <Col xl={6} md={6} sm={6} className='p-2'>
                                    <span><BsShieldCheck style={{ fontSize: '32px', padding: '4px', color: 'blue' }} /> Bảo hành <strong>chính hãng</strong> điện thoại <strong>1 năm</strong> tại các trung tâm bảo hành hãng</span>
                                </Col>
                                <Col xl={6} md={6} sm={6} className='p-2'>
                                    <span><BsBox style={{ fontSize: '32px', padding: '4px', color: 'blue' }} /> Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type </span>
                                </Col>
                            </Row>

                        </Container>
                        {/* Ảnh thông tin điện thoại */}
                        <Container className='bg-light '>
                            <Row >
                                <img src='/Images/detail/1/note.jpg' style={{ width: '100%' }} alt='zxczxc'/>
                            </Row>
                            <Row className='mt-5'>
                                <h5>Thông tin sản phẩm</h5>
                                <h5><strong>Apple</strong> đã trình diện đến người dùng mẫu <stong>điện thoại iPhone 12 128GB</stong> với sự tuyên bố về một kỷ nguyên mới của iPhone 5G, nâng cấp về màn hình và hiệu năng hứa hẹn đây sẽ là smartphone cao cấp đáng để mọi người đầu tư sở hữu</h5>
                                <h5>
                                    Hiệu năng vượt trội, thách thức mọi giới hạn
                                </h5>
                                <p>Phone 12 được trang bị chipset A14 Bionic - bộ xử lý được trang bị lần đầu trên iPad Air 4 vừa cho ra mắt cách đây không lâu, mở đầu xu thế chip 5 nm thương mại trên toàn thế giới.</p>
                            </Row>
                            <Row className='mt-5'>
                                <h5>Đánh giá Điện Thoại iPhone 12 128GB</h5>
                                <h5><strong>Apple</strong> đã trình diện đến người dùng mẫu <stong>điện thoại iPhone 12 128GB</stong> với sự tuyên bố về một kỷ nguyên mới của iPhone 5G, nâng cấp về màn hình và hiệu năng hứa hẹn đây sẽ là smartphone cao cấp đáng để mọi người đầu tư sở hữu</h5>
                                <h5>
                                    Hiệu năng vượt trội, thách thức mọi giới hạn
                                </h5>
                                <p>Phone 12 được trang bị chipset A14 Bionic - bộ xử lý được trang bị lần đầu trên iPad Air 4 vừa cho ra mắt cách đây không lâu, mở đầu xu thế chip 5 nm thương mại trên toàn thế giới.</p>
                            </Row>

                        </Container>
                        {/* Đánh giá sản phẩm */}
                        <Container className='bg-light shadow p-3 mb-5 bg-white rounded  mt-3'>
                            <Row>
                                <Col>
                                    <div>
                                        <h2>Đánh giá sản phẩm</h2>
                                        <p>Điểm đánh giá: {rating}</p>
                                        <div>
                                            {/* Hiển thị các icon đánh giá */}
                                            {stars.map((star) => (
                                                <span
                                                    key={star}
                                                    onClick={() => handleRatingClick(star)}
                                                    style={{
                                                        cursor: 'pointer',
                                                        color: star <= rating ? 'gold' : 'gray',
                                                    }}
                                                >
                                                    &#9733;
                                                </span>
                                            ))}
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
                                                <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='zxczcxzxc'/>
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
                                                <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='asdasdasd'/>
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
                                                        <Col md={7} className="w-full h-full mb-3 md:mb-0">
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
                                                        <Col md={5} className="w-full flex flex-col md:px-2">
                                                            <Form.Group className="mantine-InputWrapper-root mantine-TextInput-root mantine-1m3pqry">
                                                                <Form.Control
                                                                    type="text"
                                                                    className="rounded-lg border-neutral-300 mb-4 mantine-Input-input mantine-TextInput-input mantine-1gixdds"
                                                                    id="mantine-r9"
                                                                    placeholder="Họ và tên"
                                                                    aria-invalid="false"
                                                                    value=""
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mantine-InputWrapper-root mantine-TextInput-root mantine-1m3pqry">
                                                                <Form.Control
                                                                    type="text"
                                                                    className="rounded-lg border-neutral-300 mb-4 mantine-Input-input mantine-TextInput-input mantine-1gixdds"
                                                                    id="mantine-ra"
                                                                    placeholder="Số điện thoại"
                                                                    aria-invalid="false"
                                                                    value=""
                                                                />
                                                            </Form.Group>
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
                                            <div className='pt-4'>
                                                <div className='d-flex items-start justify-start '>
                                                    <div className='avatar overflow-hidden'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='asdasdasd' />
                                                    </div>
                                                    <div className='flex-column items-start justify-start pl-2 w-11/12'>
                                                        <div className='d-flex items-center'>
                                                            
                                                            <p className="text-brow text-sm mx-2">2023-11-03T07:07:29.000Z</p>
                                                        </div>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16">
                                                                <span class="text-16 mx-2 text-black font-normal">Có loại Ram 6gb chưa e?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex items-start justify-start  '>
                                                    <div className='avatar overflow-hidden pr-5 ml-5'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='adasdasdas'/>
                                                    </div>
                                                    <div className='flex-column items-start justify-start px-3 w-11/12'>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16 mt-1" >
                                                                Di Động Việt xin chào Anh Hải ạ !<br/>
                                                                Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram 4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ 3.790.000.<br />
                                                                Ưu đãi khi mua cùng máy<br />
                                                                Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo bảng giá hôm nay tại đây)<br />
                                                                Tặng thêm voucher 100.000đ cho khách hàng mới<br />
                                                                Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ<br />
                                                                Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model máy cũ)<br />
                                                                Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng đài 1800 6018 (miễn phí). Trân trọng !
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-4'>
                                                <div className='d-flex items-start justify-start '>
                                                    <div className='avatar overflow-hidden'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='asdasdsad' />
                                                    </div>
                                                    <div className='flex-column items-start justify-start pl-2 w-11/12'>
                                                        <div className='d-flex items-center'>
                                                            
                                                            <p className="text-brow text-sm mx-2">2023-11-03T07:07:29.000Z</p>
                                                        </div>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16">
                                                                <span class="text-16 mx-2 text-black font-normal">Có loại Ram 6gb chưa e?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex items-start justify-start  '>
                                                    <div className='avatar overflow-hidden pr-5 ml-5'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png'  alt='asdasd'/>
                                                    </div>
                                                    <div className='flex-column items-start justify-start px-3 w-11/12'>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16 mt-1" >
                                                                Di Động Việt xin chào Anh Hải ạ !<br />
                                                                Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram 4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ 3.790.000.<br />
                                                                Ưu đãi khi mua cùng máy<br />
                                                                Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo bảng giá hôm nay tại đây)<br />
                                                                Tặng thêm voucher 100.000đ cho khách hàng mới<br />
                                                                Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ<br />
                                                                Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model máy cũ)<br />
                                                                Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng đài 1800 6018 (miễn phí). Trân trọng !
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-4'>
                                                <div className='d-flex items-start justify-start '>
                                                    <div className='avatar overflow-hidden'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png'  alt='asdasd'/>
                                                    </div>
                                                    <div className='flex-column items-start justify-start pl-2 w-11/12'>
                                                        <div className='d-flex items-center'>
                                                            
                                                            <p className="text-brow text-sm mx-2">2023-11-03T07:07:29.000Z</p>
                                                        </div>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16">
                                                                <span class="text-16 mx-2 text-black font-normal">Có loại Ram 6gb chưa e?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex items-start justify-start  '>
                                                    <div className='avatar overflow-hidden pr-5 ml-5'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png'  alt='asdasd'/>
                                                    </div>
                                                    <div className='flex-column items-start justify-start px-3 w-11/12'>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16 mt-1" >
                                                                Di Động Việt xin chào Anh Hải ạ !<br />
                                                                Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram 4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ 3.790.000.<br />
                                                                Ưu đãi khi mua cùng máy<br />
                                                                Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo bảng giá hôm nay tại đây)<br />
                                                                Tặng thêm voucher 100.000đ cho khách hàng mới<br />
                                                                Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ<br />
                                                                Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model máy cũ)<br />
                                                                Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng đài 1800 6018 (miễn phí). Trân trọng !
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-4'>
                                                <div className='d-flex items-start justify-start '>
                                                    <div className='avatar overflow-hidden'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png'  alt='asdasd'/>
                                                    </div>
                                                    <div className='flex-column items-start justify-start pl-2 w-11/12'>
                                                        <div className='d-flex items-center'>
                                                            
                                                            <p className="text-brow text-sm mx-2">2023-11-03T07:07:29.000Z</p>
                                                        </div>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16">
                                                                <span class="text-16 mx-2 text-black font-normal">Có loại Ram 6gb chưa e?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex items-start justify-start  '>
                                                    <div className='avatar overflow-hidden pr-5 ml-5'>
                                                        <img src='https://didongviet.vn/Images/pc/defaultavatar.png' alt='zxcz'/>
                                                    </div>
                                                    <div className='flex-column items-start justify-start px-3 w-11/12'>
                                                        <div class="d-flex items-center">
                                                            <p class="text-ddv font-bold text-16 mt-1" >
                                                                Di Động Việt xin chào Anh Hải ạ !<br />
                                                                Dạ sản phẩm anh quan tâm em tạm hết hiện chỉ còn ram 4gb Samsung Galaxy A05s 128GB Chính Hãng giá chỉ từ 3.790.000.<br />
                                                                Ưu đãi khi mua cùng máy<br />
                                                                Tặng PMH 200.000đ - Gía mua ngay 3.590.000đ (Tham khảo bảng giá hôm nay tại đây)<br />
                                                                Tặng thêm voucher 100.000đ cho khách hàng mới<br />
                                                                Giảm thêm 5%, tối đa 500.000đ cho Tài xế công nghệ<br />
                                                                Tặng thêm đến 2.000.000đ khi thu cũ đổi mới (tùy model máy cũ)<br />
                                                                Để được tư vấn chi tiết hơn, Anh vui lòng liên hệ tổng đài 1800 6018 (miễn phí). Trân trọng !
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

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
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">64GB</Button>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">128GB</Button>
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">Tím</Button>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">Trắng</Button>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">Xanh Dương</Button>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">Đỏ</Button>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">Đen</Button>
                                    <Button className='ml-0 mr-2 mt-1 mb-1' variant="outline-primary primary">Xanh lá</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} md={12} sm={12}>
                                    <h5>Giá</h5>
                                    <p className='h4 detail-price text-danger font-weight-bold'>10.490.000đ</p>
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
                                                <Button variant="danger" className='' style={{ width: '73%', margin: '1%' }}>MUA NGAY GIÁ RẺ QUÁ </Button>
                                                <Button variant="danger" className='' style={{ width: '23%', margin: '1%' }}><BsCartCheck style={{fontSize:'25px'}}/></Button>
                                         
                                            </div>
                                            <Button variant='primary' style={{ width: '48%', margin: '1%' }} className=' mt-1  '>MUA TRẢ GÓP</Button>
                                            <Button variant='primary' style={{ width: '48%', margin: '1%' }} className=' mt-1 '>TRẢ GÓP QUA THẺ</Button>
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
                                            <td>OLED 6.1" Super Retina XDR</td>
                                        </tr>
                                        <tr>
                                            <td>Hệ điều hành:</td>
                                            <td>iOS 15</td>
                                        </tr>
                                        <tr>
                                            <td>Camera sau:</td>
                                            <td>2 camera 12 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Camera trước:</td>
                                            <td>12 MP</td>
                                        </tr>
                                        <tr>
                                            <td>Chip:</td>
                                            <td>Apple A14 Bionic</td>
                                        </tr>
                                        <tr>
                                            <td>RAM:</td>
                                            <td>4 GB</td>
                                        </tr>
                                        <tr>
                                            <td>Dung lượng lưu trữ:</td>
                                            <td>128 GB</td>
                                        </tr>
                                        <tr>
                                            <td>SIM:</td>
                                            <td>1 Nano SIM & 1 eSIM Hỗ trợ 5G</td>
                                        </tr>
                                        <tr>
                                            <td>Pin, Sạc:</td>
                                            <td>2815 mAh, 20 W</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PhoneDetail;