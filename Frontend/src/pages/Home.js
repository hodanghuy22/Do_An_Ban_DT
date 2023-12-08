import { Col, Container, Nav, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import SliderShow from '../Components/SliderShow';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <SliderShow />
            <div>
            <p className='h5 font-weight-bold mt-5 mb-5'>ĐIỆN THOẠI NỔI BẬT</p>
            <Container className="d-inline-flex justify-content-start">
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">SamSung</Nav.Link>
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">vivo</Nav.Link>
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">OPPO</Nav.Link>
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">realme</Nav.Link>
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">xiaomi</Nav.Link>
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">Nokia</Nav.Link>
                <Nav.Link href="" className="rounded-pill border button-primary mr-2">iPhone</Nav.Link>
            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col xl={2} md={4} sm={6} className='m-2'>
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/1.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/2.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/3.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/4.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/5.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/6.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/7.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/8.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/11.jpg" />
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
                        <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                            <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <Card.Img variant="top" src="/Images/products/10.jpg" />
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
                </Container>
            </div>
            <div>
                <p className='h5 font-weight-bold mt-5 mb-2'>ĐIỆN THOẠI BÁN CHẠY</p>
                <Container className='mt-3'>
                    <Row>
                        <Col xl={2} md={4} sm={6} className='m-2'>
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/1.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/2.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/3.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/4.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/5.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/6.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/7.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/8.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/11.jpg" />
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
                            <Card className='' border='0' style={{ width: '12rem', marginBottom: '10px' }}>
                                <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card>
                                        <Card.Img variant="top" src="/Images/products/10.jpg" />
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
                </Container>
            </div>
        </>
    );
}

export default Home;