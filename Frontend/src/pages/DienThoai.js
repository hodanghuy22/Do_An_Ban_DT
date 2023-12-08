import React, { useState } from 'react'
import { Breadcrumb, Button, Container, Modal, Nav, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const DienThoai = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(0);

    const handlePriceSelection = (price) => {
        setSelectedPrice(price);
        setShowModal(false);
    };
    const [showAll, setShowAll] = useState(false);
    const [showLess, setShowLess] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
        setShowLess(false);
    };

    const toggleShowLess = () => {
        setShowLess(!showLess);
        setShowAll(false);
    };
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active className='text-danger'>Điện thoại</Breadcrumb.Item>
            </Breadcrumb>
            <Container className="my-2 flex-col rounded-lg md:bg-white md:p-3">
                <Row className="no-scrollbar grid w-full grid-flow-row-dense grid-cols-8  items-center max-md:mb-2 max-md:flex  max-md:items-center max-md:justify-start max-md:overflow-x-scroll md:flex-wrap md:pb-2">
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">SamSung</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">vivo</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">OPPO</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">realme</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">xiaomi</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">Nokia</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">iPhone</Nav.Link>
                    <Nav.Link href="" className="mx-1 mb-2 rounded border">Honor</Nav.Link>

                </Row>
                <Button variant="primary" onClick={() => setShowModal(true)}>Chọn giá</Button>
            </Container>
            <Container>
                <Row className='d-flex'>
                    <Col>
                        <span className='btn text-danger '>Điện thoại</span>
                    </Col>
                    <Col className='d-flex align-items-start'>
                        <span className='btn p-2 border-info ml-1'>Sắp xếp theo</span>
                        <span className='btn p-2 border-info ml-1'>Nổi bật</span>
                        <span className='btn p-2 border-info ml-1'>Giảm nhiều</span>
                        <span className='btn p-2 border-info ml-1'>Giá thấp cao</span>
                        <span className='btn p-2 border-info ml-1'>Giá cao thấp</span>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/5.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/6.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/7.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/8.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/11.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='p-2' border='1' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card className='border-0'>
                                    <Card.Img className='card-image' variant="top" src="/Images/products/10.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A34 5G 128GB</Card.Title>
                                        <Card.Text className='text-danger font-size-bold'>
                                            6.990.000 đ
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Button variant='border border-dark light w-25 m-auto'>Xem thêm</Button>
                </Row>
            </Container>
            <Container>
                <Row className={showAll ? 'content show-all' : 'content'}>
                    <div className=" my-3 items-center rounded-lg bg-white py-3 px-3">
                        <div className="w-100 bg-white p-2" style={{ height: 'auto', overflow: 'hidden' }}>
                            <div className=" ">
                                <h2>Điện thoại di động, Smartphone: Tất cả điều bạn cần biết khi mua</h2>
                                <p style={{ textAlign: 'justify' }}><strong><a href="https://didongviet.vn/dien-thoai">Điện thoại</a></strong>
                                    di động hay smartphone là những sản phẩm rất quen thuộc với hầu hết với đa số mọi người hiện nay. Với
                                    việc tích hợp những bộ vi xử lý, những con chip di động (SoC) ngày càng mạnh mẽ, điện thoại thông minh
                                    có thể xử lý đa tác vụ đa thao tác, xử lý đa phương tiện ngày càng nhanh chóng, cũng như giúp&nbsp;kích
                                    thích sự phát triển của công nghệ viễn thông và khoa học công nghệ.</p>
                                <p style={{ textAlign: 'center' }}><img
                                    src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-didongviet.jpg"
                                    alt="Điện thoại di động, Smartphone: Tất cả điều bạn cần biết khi mua" width="780" height="520" /></p>
                                <p style={{ textAlign: 'justify' }}>Smartphone có thể kết nối dễ dàng với <strong><a
                                    href="https://didongviet.vn/dong-ho-deo-tay">đồng hồ thông minh</a></strong>, internet, thay
                                    <strong><a href="https://didongviet.vn/laptop">laptop</a></strong> xử lý email trong giây lát và giúp
                                    người dùng chơi những tựa game nặng nhất. Smartphone dần thay thế các thiết bị giải trí truyền thống
                                    như: máy nghe nhạc cầm tay MP3, PDA, máy ảnh kỹ thuật số, máy ghi âm, máy quay phim cầm tay, máy chơi
                                    game, TV, máy đọc sách,... với chất lượng ngày càng cao.</p>
                                <h3>Lợi ích của việc sử dụng điện thoại</h3>
                                {showAll && (
                                <div>
                                    <ul>
                                        <li>Được trang bị nhiều công nghệ mới, hiện đại hơn</li>
                                        <li>Hỗ trợ tốt cho mọi nhu cầu của người dùng như liên lạc, học tập và giải trí</li>
                                        <li>Việc kết nối với mọi người trở nên dễ dàng và sinh động hơn trước</li>
                                        <li>Chụp ảnh trên điện thoại di động và chia sẻ ngay trên mạng xã hội</li>
                                        <li>Khả năng lưu giữ những khoảnh khắc đáng nhớ trong cuộc sống theo nhiều hình thức khác nhau.</li>
                                        <li>Khả năng thanh toán mọi hóa đơn nhanh chóng và vô cùng tiện lợi</li>
                                    </ul>
                                    <h3>Điện thoại di động có mấy loại?</h3>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại di động hiện nay được chia làm nhiều loại khác nhau để có thể đáp
                                        ứng được từng nhu cầu riêng biệt của người dùng. Xét về thiết kế, mục đích sử dụng thì điện thoại di
                                        động hiện nay được chia làm 5 loại chính bao gồm:</p>
                                    <h4>Điện thoại phổ thông (Dumbphone, Feature Phone)</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại phổ thông hay còn gọi là điện thoại “cục gạch”, điện thoại cơ bản
                                        hay điện thoại "ngu" là cụm từ dùng để chỉ các dòng điện thoại di động <strong><a
                                            href="https://didongviet.vn/may-cu-gia-re.html">máy cũ giá rẻ</a></strong> và không có nhiều
                                        tính năng như trên các dòng smartphone. Đây là những dòng máy có thiết kế vô cùng nhỏ gọn với chức năng
                                        chính là nghe - gọi, nhắn tin cơ bản.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-pho-thong-didongviet.jpg"
                                        alt="Điện thoại phổ thông (Dumbphone, Feature Phone)" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Khác với dumbphone, các dòng điện thoại feature phone còn được các hãng tích
                                        hợp thêm hệ điều hành giúp máy có thể chạy một số ứng dụng của bên thứ 3. Một số ví dụ điển hình cho các
                                        dòng điện thoại này là: BlackBerry Classic Q20, Nokia 6300 và mới đây nhất là các dòng Nokia 110 4G,
                                        Nokia 2720 Flip….</p>
                                    <h4>Điện thoại thông minh (Smartphone)</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại thông minh hay smartphone là những dòng điện thoại được tích hợp
                                        nhiều tính năng tiên tiến hơn so với dòng điện thoại phổ thông. Ngoài các tính năng cơ bản như nghe -
                                        gọi thì những chiếc máy này con có khả năng giúp người dùng đọc báo, chơi game, lướt web, xem phim,...
                                    </p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-thong-minh-didongviet.jpg"
                                        alt="Điện thoại thông minh (Smartphone)" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Những chiếc điện thoại smartphone thường sẽ có nhũng yếu tố sau đây: màn
                                        hình cảm ứng lớn, camera với độ phân giải cao, tích hợp nhiều công nghệ bảo mật như sinh trắc học vân
                                        tay, mở khóa bằng gương mặt….</p>
                                    <h4>Điện thoại Gaming</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại Gaming hay Gaming phone cũng là một chiếc điện thoại thông minh
                                        nhưng được thiết kế để tối ưu hơn cho việc chơi game. Những chiếc smartphone này thường được các hãng
                                        tập trung rất nhiều vào cấu hình, khả năng tản nhiệt cũng như việc tối ưu phần mềm giúp việc chơi game
                                        của người dùng trở nên tuyệt vời hơn bao giờ hết.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-gaming-didongviet.jpg"
                                        alt="Điện thoại Gaming" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Đặc điểm của những chiếc máy này thường là: màn hình lớn hỗ trợ tần số quét
                                        màn hình cao, cấu hình khủng, khả năng tản nhiệt tốt, thiết kế hầm hố đậm chất game thủ. Ngoài ra, những
                                        chiếc điện thoại gaming thường còn được các hãng trang bị thêm nhiều phụ kiện hỗ trợ khi chơi game như
                                        hệ thống tản nhiệt rời, tay cầm chơi game….</p>
                                    <h4>Điện thoại chuyên chụp ảnh</h4>
                                    <p style={{ textAlign: 'justify' }}>Tương tự với dòng Gaming phone, điện thoại chụp ảnh hay camera phone là một
                                        chiếc điện thoại thông minh được các hãng tối ưu về camera cũng như khả năng chụp ảnh. Hầu hết các dòng
                                        điện thoại di động ngày nay đều được trang bị hệ thống camera vô cùng chất lượng với khả năng chụp ảnh
                                        tốt.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-chup-anh-didongviet.jpg"
                                        alt="Smartphone chuyên chụp ảnh" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Ngoài việc tối ưu phần cứng, phần mềm cũng là một trong những yếu tố giúp
                                        chiếc camera phone chụp ảnh tốt hơn. Ví dụ như dòng iPhone, Google Pixel…, tuy chỉ có 1 camera với 12MP
                                        nhưng những tấm ảnh cho ra vô cùng ấn tượng, sắc nét… Một số ví dụ điển hình cho dòng camera phone bao
                                        gồm: Google Pixel 6 Pro, iPhone 13 Pro Max, Galaxy S21 Ultra, Huawei P50 Pro…</p>
                                    <h4>Điện thoại gập</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại gập là những chiếc điện thoại có khả năng gập mở lại giúp chiếc
                                        máy nhỏ hơn so với các dòng điện thoại khác. Người ta thường nghĩ điện thoại gập chỉ là những chiếc điện
                                        thoại dumbphone với khả năng nghe - gọi cơ bản ví dụ điển hình nhất đó là chiếc Motorola V3i huyền thoại
                                        hay cao cấp hơn là những chiếc điện thoại Vertu.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-gap-didongviet.jpg"
                                        alt="Điện thoại gập Galaxy Z Fold3" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Tuy nhiên, với sự phát triển của công nghệ ngày nay, các dòng điện thoại gập
                                        cũng đã được các hãng hồi sinh và phát triển mạnh mẽ hơn bao giờ hết. Dòng Galaxy Z Fold4 và
                                        <strong>Samsung Z Flip4</strong>&nbsp;là 2 chiếc điện thoại gập được nhiều người săn đón nhất hiện nay.
                                        Đây là 2 chiếc điện thoại thông minh với khả năng gập mở vô cùng ấn tượng. Đi kèm với đó là cấu hình cực
                                        khủng cùng khả năng kháng nước IPX8.</p>
                                    <h3>Các phân khúc giá điện thoại, smartphone</h3>
                                    <h4>Điện thoại giá rẻ</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại giá rẻ là dòng sản phẩm thuộc phân khúc giá rẻ thường được các
                                        hãng bán ra với mức giá bình dân, phù hợp với những người dùng có điều kiện tài chính hạn chế hoặc chỉ
                                        cần sử dụng một số tính năng cơ bản trên smartphone. Thông thường, những chiếc điện thoại này sẽ được
                                        trang bị cấu hình vừa đủ để có thể đáp ứng nhu cầu hàng ngày của người dùng.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-gia-re-didongviet.jpg"
                                        alt="smartphone tầm trung" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Máy thường sẽ được trang bị dung lượng RAM từ 2 ~ 4GB, chip Snapdragon 4xx
                                        hoặc MediaTek 6xxx. Cùng thiết kế nhỏ gọn, và vô cùng nhẹ do được hoàn thiện từ nhựa mang lại khả năng
                                        cầm nắm vô cùng dễ chịu.</p>
                                    <p style={{ textAlign: 'justify' }}>Một số sản phẩm tiêu biểu cho phân khúc này: Xiaomi Redmi Series, Realme
                                        C12, Galaxy A03s….</p>
                                    <h4>Smartphone giá tầm trung</h4>
                                    <p style={{ textAlign: 'justify' }}>Smartphone giá tầm trung là phiên bản nâng cấp hơn so với dòng điện thoại
                                        giá rẻ, máy thường sẽ có ngoại hình đẹp hơn, bắt mắt hơn và được nâng cấp khá nhiều về màn hình, camera
                                        và một số yếu tố khác.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-tam-trung-didongviet.jpg"
                                        alt="Smartphone giá tầm trung" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Dòng smartphone tầm trung thường sẽ có thiết kế với độ hoàn thiện tốt, màn
                                        hình lớn, viền mỏng, độ phân giải màn hình từ Full HD trở lên, vi xử lý thường là Snapdragon 6xx, Helio
                                        P series, dung lượng RAM từ 4 ~ 6GB mang lại hiệu năng tốt hơn. Khả năng chụp ảnh cũng được cải thiện
                                        hơn nhờ trang bị thêm nhiều ống kính, hỗ trợ nhiều tính năng chụp ảnh như: xóa phông, chụp macro, chụp
                                        góc rộng….</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/smartphone-tam-trung-oppo-a74-didongviet.jpg"
                                        alt="OPPO A74" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Một số sản phẩm tiêu biểu cho phân khúc này: Samsung Galaxy A32, Samsung
                                        Galaxy A52, hay dòng Xiaomi Mi 11 Lite 5G….</p>
                                    <h4>Smartphone cận cao cấp</h4>
                                    <p style={{ textAlign: 'justify' }}>Smartphone cận cao cấp là dòng sản phẩm sở hữu nhiều đặc điểm và công nghệ
                                        rất gần với các dòng sản phẩm cao cấp. Máy thường sẽ có thiết kế hiện đại, tinh tế với nhiều điểm tương
                                        đồng với các dòng smartphone cao cấp.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/smartphone-can-cao-cap-galaxy-a52s-didongviet.jpg"
                                        alt="Smartphone cận cao cấp" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Những chiếc điện thoại này thường có độ hoàn thiện cao với khung viền kim
                                        loại, mặt lưng kính, được trang bị vi xử lý Snapdragon 6xx ~ 7xx tiên tiến hơn dòng smartphone tầm
                                        trung. Dung lượng RAM từ 6 ~ 8GB, màn hình Full HD tràn viền với kích thước lớn - hỗ trợ tần số quét cao
                                        hơn mượt mà hơn.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-samsung-galaxy-s20-fe-didongviet.jpg"
                                        alt="Samsung Galaxy S20 FE" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Máy cũng được tích hợp các tiêu chuẩn chống nước, viên pin dung lượng lớn hỗ
                                        trợ công nghệ sạc nhanh, camera với độ phân giải cao…. Một số sản phẩm tiêu biểu cho phân khúc này:
                                        Samsung Galaxy A72, Samsung Galaxy S20 FE, OPPO Reno6, Xiaomi 11T,...</p>
                                    <h4>Điện thoại cao cấp</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại cao cấp hay flagship là dòng điện thoại được thừa hưởng nhiều
                                        tinh hoa nhất, được trang bị nhiều công nghệ mới nhất cùng nhiều tính năng hiện đại nhất. Dòng điện
                                        thoại này thường sẽ có thiết kế cao cấp, sang trọng, phần cứng mạnh mẽ cùng với phiên bản phần mềm mới
                                        nhất hiện nay.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-cao-cap-galaxy-s21-ultra-5g.jpg"
                                        alt="Điện thoại cao cấp" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Smartphone cao cấp được các hãng rất chăm chút về mặt thiết kế, máy có độ
                                        hoàn thiện cao được làm từ chất liệu kim loại, mặt lưng kính hoặc gốm, màn hình tràn viền với độ phân
                                        giải 2K trở lên, tấm nền OLED hỗ trợ tần số quét cao. Hiệu năng mạnh mẽ nhất với vi xử lý cao cấp nhất,
                                        camera với độ phân giải lớn, cùng nhiều tính năng bảo mật như FaceID, cảm biến vân tay dưới màn hình….
                                    </p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/flag-ship-iphone-13-didongviet.jpg"
                                        alt="Smartphone cao cấp iPhone 13" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Một số sản phẩm tiêu biểu cho phân khúc này: <strong><a
                                        href="https://didongviet.vn/apple">điện thoại iPhone</a></strong> 13, Galaxy Z Fold3, Galaxy S21
                                        Ultra, OPPO Find X3 Pro, Huawei P50 Pro,....</p>
                                    <h4>Điện thoại cũ giá rẻ</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại cũ giá rẻ thường là những chiếc điện thoại được khá nhiều người
                                        săn đón hiện nay. Đây là những dòng máy đã qua sử dụng nhưng chất lượng vẫn còn tốt và ngoại hình gần
                                        như mới khui hộp. Điểm khác biệt nhỏ đó là có một số trường hợp máy thường sẽ thiếu một số phụ kiện hoặc
                                        hộp đi kèm do người dùng trước đã không còn lưu giữ khi bán lại cho cửa hàng.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-cu-gia-re-tai-didongviet.jpg"
                                        alt="Điện thoại cũ giá rẻ" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Đa số các điện thoại đã qua sử dụng đều có mức giá rẻ hơn nhiều so với điện
                                        thoại mới, do đó người dùng có thể tiết kiệm được một khoản tiền kha khá nếu lựa chọn các thiết bị này.
                                    </p>
                                    <h3>9 tiêu chí chọn mua điện thoại tốt, phù hợp nhất</h3>
                                    <p style={{ textAlign: 'justify' }}>Có rất nhiều yếu tố khác nhau từ ngoại hình, hiệu năng cho đến mục đích sử
                                        dụng mà người dùng quyết định lựa chọn một chiếc smartphone cho riêng mình. Hãy cùng Di Động Việt điểm
                                        nhanh qua một số tiêu chí sau đây để người dùng có thể lựa chọn được chiếc smartphone ưng ý nhất dành
                                        riêng cho mình.</p>
                                    <h4>Thiết kế</h4>
                                    <p style={{ textAlign: 'justify' }}>Thiết kế bên ngoài là một trong những yếu tố quan trọng khiến người dùng
                                        quyết định chọn chiếc smartphone của mình. Hiện nay, những chiếc điện thoại thông minh không chỉ đơn
                                        thuần là một thiết bị di động để liên lạc, giải trí mà nó còn đóng vai trò là một phụ kiện trang trí,
                                        thể hiện phần nào đó tính cách của người dùng.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/thiet-ke-dien-thoai-galaxy-flip3-didongviet.jpg"
                                        alt="Thiết kế" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Đây là lý do các nhà sản xuất đã thiết kế ra đa dạng mẫu mã để hợp hơn với
                                        tính cách của người dùng. Từ thiết kế hầm hố của những dòng gaming phone cho đến mỏng manh “sexy” như
                                        những chiếc Xiaomi 11 Lite 5G NE, hay vuông vức như những chiếc iPhone 13 Series.</p>
                                    <p style={{ textAlign: 'justify' }}>Màu sắc cũng là một trong điểm đáng chú ý trên những chiếc smartphone ngày
                                        nay. Với màu sắc trẻ trung, năng động ta có màu Gradient từ những chiếc Realme, Xiaomi, Samsung hay hiện
                                        đại, cao cấp như trên những dòng iPhone, Galaxy S hay mới nhất là trên dòng Galaxy Z Fold3.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/ngoai-hinh-smartphone-didongviet.jpg"
                                        alt="Ngoại hình smartphone" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Ngoài ra, cảm giác cầm nắm cũng vô cùng quan trọng khi mua một chiếc
                                        smartphone. Người dùng nên ưu tiên ra thẳng cửa hàng để được sờ tận tay, để biết được chiếc smartphone
                                        ấy có phù hợp với cỡ tay của người dùng hay không. Từ đó đưa ra quyết định có nên lựa chọn mua chiếc
                                        điện thoại ấy hay không.</p>
                                    <h4>Màn hình</h4>
                                    <p style={{ textAlign: 'justify' }}>Màn hình và kích thước màn hình cũng sẽ ảnh hưởng rất nhiều đến tiêu chí
                                        chọn mua của người tiêu dùng. Với đa số người dùng hiện nay, họ luôn muốn được trải nghiệm nhiều nội
                                        dung hơn nên kích thước màn hình ngày càng lớn hơn. Tuy nhiên, để có thể sử dụng, cầm nắm vừa tay nhất
                                        chúng ta nên ưu tiên lựa chọn những chiếc màn hình có kích thước từ 6.2 inch trở lên.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/man-hinh-dien-thoai-didongviet.jpg"
                                        alt="Màn hình trên smartphone" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Bên cạnh đó, không ít người dùng vẫn thích sử dụng những chiếc smartphone
                                        màn hình bé vì kích thước nhỏ gọn và tiện lợi của nó. Ngoài ra, người dùng nên ưu tiên mua những chiếc
                                        smartphone có màn hình với độ phân giải từ Full HD trở lên để hình ảnh được hiển thị sắc nét hơn. Trên
                                        một số dòng flagship đã có màn hình 2K ví dụ như dòng Galaxy S21 Series và cao nhất là 4K trên những
                                        dòng điện thoại Sony I Mark Series.</p>
                                    <h4>Hệ điều hành</h4>
                                    <p style={{ textAlign: 'justify' }}>Hệ điều hành là một trong những thứ quan trọng nhất khi người dùng lựa chọn
                                        mua một chiếc smartphone. Trên thị trường hiện nay, có rất nhiều hệ điều hành khác nhau có thể kể đến
                                        như: iOS, Android, BlackBerry OS, Windows Phone và Symbian. Vì mỗi hệ điều hành được xây dựng và phát
                                        triển trên các nền tảng khác nhau nên chúng sẽ có những ưu điểm và nhược điểm khác nhau.</p>
                                    <p style={{ textAlign: 'justify' }}><strong>- Hệ điều hành Android</strong></p>
                                    <p style={{ textAlign: 'justify' }}>Hệ điều hành Android là hệ điều hành mở được phát triển bởi Google và là hệ
                                        điều hành được sử dụng phổ biến nhất hiện nay. Đa phần các smartphone hiện nay đều sử dụng hệ điều hành
                                        Android nên mức giá của những chiếc điện thoại này thường khá đa dạng và phong phú.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/he-dieu-hanh-android-tren-dien-thoai-didongviet.jpg"
                                        alt="Hệ điều hành Android" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Bên cạnh đó, vì là hệ điều hành mở nên Android giúp người dùng có thể dễ
                                        dàng tùy biến giao diện theo sở thích cá nhân. Tuy nhiên, vì là hệ điều hành mở nên đôi khi người dùng
                                        sẽ vô tình cài đặt một số ứng dụng bằng file APK (không thông qua CH Play) có chứa virus làm để lộ thông
                                        tin cá nhân. Thế nên, người dùng nên cẩn thận thì cài đặt bất kỳ ứng dụng nào lên máy của mình.</p>
                                    <p style={{ textAlign: 'justify' }}><strong>- Hệ điều hành iOS</strong></p>
                                    <p style={{ textAlign: 'justify' }}>Khác với Android, iOS là một hệ điều hành khép kín được phát triển bởi Apple
                                        với độ bảo mật cao. Vì là một hệ điều hành được phát triển dành riêng cho iPhone nên iOS tối ưu rất tốt
                                        phần cứng giúp chiếc máy luôn hoạt động mượt mà, ổn định. Mỗi phiên bản iOS phát hành đều luôn được kiểm
                                        tra rất kỹ càng trước khi đưa ra thị trường.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/he-dieu-hanh-ios-tren-dien-thoai-didongviet.jpg"
                                        alt="Hệ điều hành iOS" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Bên cạnh đó, Apple cũng thường xuyên cập nhật những bản vá lỗ hổng bảo mật
                                        cũng như bản vá lỗi vô cùng nhanh chóng. iOS cũng là hệ điều hành duy nhất hỗ trợ cập nhật lâu dài lên
                                        đến 5 năm. Ví dụ như chiếc iPhone 6S đã ra đời từ 2015 nhưng đến nay vẫn có thể cập nhật lên hệ điều
                                        hành iOS 15 mới nhất.</p>
                                    <p style={{ textAlign: 'justify' }}>Tuy nhiên, vì là một hệ điều hành đóng nên người dùng sẽ bị hạn chế khá
                                        nhiều về việc tùy biến giao diện, cài đặt ứng dụng từ bên thứ 3…</p>
                                    <h4>Thương hiệu</h4>
                                    <p style={{ textAlign: 'justify' }}>Sau khi chọn lựa được hệ điều hành thì việc lựa chọn thương hiệu điện thoại
                                        trở nên dễ dàng hơn rất nhiều. Nếu lựa chọn iOS thì người dùng chỉ có thể chọn mua những dòng iPhone đến
                                        từ nhà Apple. Nếu người dùng lựa chọn Android thì nên ưu tiên những thương hiệu lớn như Samsung, Xiaomi,
                                        OPPO, Vivo hoặc một số thương hiệu khác như LG, Sony, Vsmat, BKAV…</p>
                                    <h4>Cấu hình</h4>
                                    <p style={{ textAlign: 'justify' }}>Ngoài việc tối ưu phần mềm, thì phần cứng cũng là một thứ vô cùng quan trọng
                                        giúp chiếc smartphone có thể hoạt động mượt mà. Vi xử lý CPU và GPU sẽ quyết định đến tốc độ xử lý ứng
                                        dụng cũng như hoạt động của máy. Vì thế, vi xử lý được trang bị trên chiếc điện thoại càng mạnh thì tốc
                                        độ xử lý ứng dụng, đồ họa của máy càng nhành, càng mượt mà.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/cau-hinh-manh-me-tren-smartphone-didongviet.jpg"
                                        alt="Cấu hình mạnh mẽ" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Bên cạnh đó, dung lượng RAM cũng rất quan trọng trên một chiếc smartphone.
                                        Dung lượng RAM càng lớn thì khả năng đa nhiệm của máy càng nhiều giúp hạn chế khả năng bị lag, giật, đơ
                                        máy khi người dùng mở nhiều ứng dụng cùng lúc.</p>
                                    <p style={{ textAlign: 'justify' }}>Hiện nay, đa phần các dòng smartphone giá rẻ, tầm trung đã được trang bị
                                        dung lượng RAM từ 4GB trở lên. Với các dòng máy cao cấp, dung lượng RAM có thể từ 8GB - 16GB RAM.</p>
                                    <h4>Bộ nhớ trong</h4>
                                    <p style={{ textAlign: 'justify' }}>Bộ nhớ trong là không gian lưu trữ của người dùng. Bộ nhớ trong càng lớn thì
                                        khả năng lưu trữ hình ảnh, video…. của người dùng càng nhiều. Do đó, người dùng nên ưu tiên lựa chọn một
                                        thiết bị di động sở hữu bộ nhớ trong lớn hoặc có hỗ trợ thẻ nhớ mở rộng để có thể lưu trữ được nhiều
                                        hơn.</p>
                                    <h4>Dung lượng Pin</h4>
                                    <p style={{ textAlign: 'justify' }}>Thời lượng sử dụng pin cũng được khá nhiều người dùng quan tâm đến hiện nay.
                                        Một chiếc điện thoại pin càng lớn (mAh) thì càng có thời lượng sử dụng lâu giúp phục vụ tốt cho cho
                                        nhiều mục đích sử dụng của người dùng. Ngoài ra, người dùng cũng nên quan tâm thiết bị đó có hỗ trợ khả
                                        năng sạc nhanh hay không, sử dụng cổng sạc nào, nên ưu tiên lựa chọn sản phẩm có cổng sạc USB Type C.
                                    </p>
                                    <h4>Camera</h4>
                                    <p style={{ textAlign: 'justify' }}>Nếu là một người dùng yêu thích chụp ảnh, quay phim hay sử dụng điện thoại
                                        để phục vụ cho những mục đích tương tự thì camera là một yếu tố khá quan trọng. Ngoài những thông số về
                                        phần cứng, người dùng cũng nên quan tâm về những tính năng khác như hỗ trợ chụp ảnh xóa phông, góc rộng,
                                        khả năng chống rung, thu âm,...</p>
                                    <h4>Giá thành sản phẩm</h4>
                                    <p style={{ textAlign: 'justify' }}>Với thị trường smartphone hiện nay, giá bán là một trong những yếu tố quan
                                        trọng nhất để quyết định người dùng có nên lựa chọn sản phẩm hay không. Nhờ sự đa dạng về mặt sản phẩm
                                        nên người dùng sẽ có những phân khúc lựa chọn khác nhau:</p>
                                    <p style={{ textAlign: 'justify' }}>- <strong><em>Dành cho học sinh, sinh viên:</em></strong> đây là nhóm người
                                        dùng có tài chính còn phụ thuộc vào gia đình. Do đó sản phẩm hướng đến thường là đa số các dòng điện
                                        thoại giá rẻ - tầm trung với mức giá dao động từ 3 - 6 triệu đồng.</p>
                                    <p style={{ textAlign: 'justify' }}>- <strong><em>Dành cho nhân viên văn phòng…. :</em></strong> đây là nhóm
                                        người dùng đã có khả năng tự chủ tài chính nên tiêu chí lựa chọn smartphone cũng cao hơn hẳn. Họ sẽ ưu
                                        tiên dòng điện thoại có thiết kế đẹp mắt, cấu hình khỏe, camera chụp ảnh đẹp… Do đó sản phẩm hướng đến
                                        thường là đa số các dòng điện thoại tầm trung cận cao cấp - cao cấp có mức giá từ 8 - 50 triệu đồng.</p>
                                    <p style={{ textAlign: 'justify' }}>- <strong><em>Dành cho game thủ:</em></strong> thông thường các dòng điện
                                        thoại hiện nay đều có thể đáp ứng tốt cho các nhu cầu chơi game của người dùng. Tuy nhiên, những dòng
                                        điện thoại dành riêng cho game thủ sẽ có thiết kế to hơn, tản nhiệt tốt hơn với cấu hình cực khủng đi
                                        kèm với nhiều phụ kiện hỗ trợ tối đa cho việc chơi game. Vì thế dòng sản phẩm này thường có mức giá khá
                                        cao từ 20 triệu đồng trở lên (chưa bao gồm phụ kiện đi kèm).</p>
                                    <h4>Tính năng khác</h4>
                                    <p style={{ textAlign: 'justify' }}>Ngoài những thông số kể trên thì quyết định tiêu dùng của điện thoại còn ảnh
                                        hưởng bởi một số tính năng đặc biệt của sản phẩm. Ví dụ như một số dòng điện thoại tầm trung sở hữu màn
                                        hình 90Hz, vân tay bên trong màn hình, kháng nước, kháng bụi, sạc siêu nhanh 65W sạc 50% pin chỉ trong
                                        vòng 15 phút...</p>
                                    <h3>Tổng hợp các hãng điện thoại đáng mua tốt nhất hiện nay</h3>
                                    <p style={{ textAlign: 'justify' }}>Nhờ sự phát triển mạnh mẽ của công nghệ mà thị trường điện thoại ngày nay
                                        rất sôi động với nhiều dòng điện thoại khác nhau từ mẫu mã, kiểu dáng đều vô cùng đa dạng. Đi cùng với
                                        đó là nhu cầu sử dụng smartphone ngày càng tăng cao của người dùng khiến thị trường xuất hiện nhiều hãng
                                        điện thoại di động khác nhau. Sau đây là một số hãng điện thoại đáng mua và tốt nhất hiện nay.</p>
                                    <h4>Apple</h4>
                                    <p style={{ textAlign: 'justify' }}>iPhone là một trong những sản phẩm làm nên tên tuổi của Apple và cũng là
                                        thiết bị được khá nhiều người dùng săn đón. Vì là dòng sản phẩm cao cấp nên thường những chiếc iPhone
                                        luôn có thiết kế sang trọng, tinh tế đi cùng với cấu hình mạnh mẽ, khả năng chụp ảnh/ quay phim vô cùng
                                        ấn tượng. Đi kèm với đó là hỗ trợ cập nhật phần mềm lâu dài khiến người dùng yên tâm khi sử dụng.</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-apple-iphone-didongviet.jpg"
                                        alt="Điện thoại Apple" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Vậy nếu người dùng cần tìm một chiếc điện thoại để sử dụng lâu dài, hiệu
                                        năng ổn định và được cập nhật thường xuyên thì iPhone là một lựa chọn hoàn toàn xứng đáng. Một số sản
                                        phẩm nổi bật: iPhone 14 Pro Max, iPhone 14 Pro, iPhone 14 Plus, iPhone 13, iPhone 13 Pro Max, iPhone 12,
                                        iPhone 12 Pro Max, iPhone 11, iPhone Xr,...</p>
                                    <h4>Samsung</h4>
                                    <p style={{ textAlign: 'justify' }}>Ngoài Apple thì Samsung cũng là một ông lớn trong thị trường smartphone hiện
                                        nay. <a title="Điện thoại Samsung" href="https://didongviet.vn/samsung.html" target="blank"
                                            rel="noopener"><strong>Điện thoại Samsung</strong></a> thường được hãng chăm chuốt rất tỉ mỉ và
                                        thường áp dụng những công nghệ mới lên sản phẩm. Vì thế, Samsung thường có đa dạng phân khúc smartphone
                                        từ tầm trung (Galaxy A Series) đến flagship cao cấp (dòng Galaxy S, Galaxy Note) và dòng nắp gập (Galaxy
                                        Z Fold, Z Flip).</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-samsung-galaxy-note-20-ultra-didongviet.jpg"
                                        alt="Điện thoại Samsung" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Nếu người dùng không thích sự “tù túng” của iOS nhưng cần sự ổn định thì
                                        những dòng flagship của Samsung là một sự lựa chọn hoàn hảo. Người dùng có thể trải nghiệm được những
                                        tính năng mới, công nghệ mới cũng như cấu hình phần cứng cực khủng. Một số sản phẩm Samsung nổi bật:
                                        Galaxy Z Fold3, Galaxy S21 Ultra 5G, Galaxy A52s….</p>
                                    <h4>Xiaomi</h4>
                                    <p style={{ textAlign: 'justify' }}>Xiaomi là thương hiệu điện thoại đến từ Trung Quốc và được rất nhiều người
                                        tiêu dùng yêu thích và lựa chọn. Những mẫu điện thoại của Xiaomi thường là những dòng tầm trung - cận
                                        cao cấp với thiết kế trẻ trung, năng động nhiều màu sắc. Hãng cũng thường trang bị cho những thiết bị
                                        của mình cấu hình mạnh mẽ nhất, dung lượng pin lớn….</p>
                                    <p style={{ textAlign: 'center' }}><img
                                        src="https://cdn-v2.didongviet.vn/files/media/wysiwyg/2020/galaxy-note-20-utra/dien-thoai-xiaomi-didongviet.jpg"
                                        alt="Smartphone Xiaomi" width="780" height="520" /></p>
                                    <p style={{ textAlign: 'justify' }}>Người dùng thường lựa chọn các sản phẩm Xiaomi nhờ vào cấu hình khỏe với mức
                                        giá vô cùng phải chăng. Một số sản phẩm Xiaomi tiêu biểu: Xiaomi 11T, Xiaomi 11 Lite 5G NE, Xiaomi Mi
                                        Mix 2….</p>
                                    <h4>OPPO</h4>
                                    <p style={{ textAlign: 'justify' }}>OPPO là một trong những thương hiệu khá phổ biến đối với giới trẻ. Các dòng
                                        smartphone của OPPO thường có thiết kế đẹp mắt, cấu hình ổn định với camera chụp cực kỳ sắc nét. Đặc
                                        biệt là với camera selfie, những dòng sản phẩm OPPO đã chiếm được rất nhiều cảm tình của biết bao nhiêu
                                        bạn nữ. Một số dòng sản phẩm tiêu biểu: OPPO Reno6, OPPO A93, OPPO A15...</p>
                                    <h4>Nokia</h4>
                                    <p style={{ textAlign: 'justify' }}>Nokia là thương hiệu “huyền thoại” ở nước ta, nổi bật với những chiếc điện
                                        thoại “nồi đồng, cối đá” đã đi vào tâm trí người dùng. Khiến Nokia trở thành một trong những thương hiệu
                                        được nhiều người dùng tin tưởng. Phân khúc điện thoại của hãng Nokia thường là dòng sản phẩm điện thoại
                                        phổ thông, smartphone giá rẻ. Một số sản phẩm tiêu biểu: Nokia 110 4G, Nokia 6300 4G, Nokia Flip….</p>
                                    <h4>Realme</h4>
                                    <p style={{ textAlign: 'justify' }}>Điện thoại Realme đang có sự tăng trưởng vượt bậc trong những năm gần đây.
                                        Sản phẩm điện thoại Realme tập trung chủ yếu ở phân khúc giá rẻ và tầm trung với thiết kế nhỏ gọn, đẹp
                                        mắt cùng cấu hình tạm ổn. Một số sản phẩm nổi bật: Realme 6, Realme 8 Pro, Realme C15,…</p>
                                    <h3>Mua điện thoại di động, smartphone chính hãng, giá rẻ nhất ở đâu?</h3>
                                    <p style={{ textAlign: 'justify' }}>Nếu bạn đang băn khoăn không biết nên mua điện thoại di động, smartphone
                                        chính hãng giá rẻ nhất ở đâu thì hãy đến Di Động Việt. Hiện nay, <strong>Di Động Việt đang là đại lý bán
                                            lẻ chính hãng</strong> của hầu hết các hãng smartphone trên thị trường hiện nay. Khách hàng khi mua
                                        máy tại Di Động Việt sẽ được hưởng những quyền lợi sau:</p>
                                    <ul>
                                        <li><strong>Cam kết 100% hàng chính hãng.</strong></li>
                                        <li><strong>Bảo hành chính hãng theo từng sản phẩm.</strong></li>
                                        <li><strong>Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm.</strong></li>
                                    </ul>
                                    <p style={{ textAlign: 'justify' }}>Với mức giá cạnh tranh, <em><strong><a href="https://didongviet.vn/">Di Động
                                        Việt</a></strong></em> tự tin sẽ mang đến cho người dùng một mức giá vô cùng hấp dẫn. Cùng
                                        với đó là nhiều chính sách ưu đãi, khuyến mãi đi kèm. Để mua điện thoại thông minh chính hãng giá tốt
                                        nhất, hãy đến ngay Di Động Việt.</p>
                                    <p style={{ textAlign: 'right' }}>Di Động Việt</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>
                                )}
                              
                            </div>
                        </div>
                    </div>
                    {!showAll && (
                        <button onClick={toggleShowAll} className='border border-dark light w-25 m-auto text-danger font-weight-bold'>Xem thêm</button>
                    )}
                    {/* Nút "Thu gọn" */}
                    {showAll && (
                        <button onClick={toggleShowLess} className='border border-dark light w-25 m-auto text-danger font-weight-bold'>Thu gọn</button>
                    )}
                </Row>
            </Container>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Chọn giá</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="range"
                        className="form-range"
                        min={0}
                        max={50000000}
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                    />
                    <p>Giá đã chọn: {selectedPrice}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Đóng</Button>
                    <Button variant="primary" onClick={() => handlePriceSelection(selectedPrice)}>Chọn</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );

}

export default DienThoai;
