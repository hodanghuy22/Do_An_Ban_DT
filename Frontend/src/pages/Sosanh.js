import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Sosanh = () => {
  return (
    <div>
          <Container>
              <Row>
                  <Col style={{ width: '18rem', marginBottom: '10px' }}>
                      <p>So sánh sản phẩm</p>
                      <h6 className='font-weight-bold' style={{ textTransform: 'uppercase' }}>
                          XIAOMI REDMI 12 4GB
                          <br />
                          &
                          <br />
                          XIAOMI REDmI 13C 6GB
                      </h6>
                  </Col>
                  <Col className='d-flex w-auto'>
                      <div style={{ width: '18rem', marginBottom: '10px' }}>
                      <Card className='  bg-transparent' border='1' >
                          <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <Card className='border-0 '>
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
                      </div>
                      <div style={{ width: '18rem', marginBottom: '10px' }}>
                          <Card className='  bg-transparent' border='1' >
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
                      </div>
                      <div style={{ width: '18rem', marginBottom: '10px' }} className='d-flex justify-content-center align-items-center border'>
                          <Button className='bg-transparent text-info p-3' style={{ borderStyle: 'dashed' }}>
                              <FaPlus style={{ fontSize: '30px' }} />
                              <p>Thêm sản phẩm</p>
                          </Button>
                          
                          
                    </div>

                     
                  </Col>
              </Row>
                <h4 className='text-uppercase'>So sánh nhanh</h4>
              <Row>
                  <Col className='border' style={{ width: '18rem', marginBottom: '10px' }}>
                      <p>So sánh nhanh</p>
                  </Col>
                  <Col className='border' style={{ width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{fontSize:'0.8rem'}}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                    </ul>
                  </Col>
                  <Col className='border' style={{ width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{fontSize:'0.8rem'}}>
                         <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.74", HD+
                          </li>
                         <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G85
                          </li>
                         <li className='mt-2 mb-2'>
                              RAM: 6 GB
                          </li>
                         <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                         <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 2 MP
                          </li>
                         <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                         <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{ width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>màn hình</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                    
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                         
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>camera sau</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>camera trước</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>hệ điều hành & CPU</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>bộ nhớ & lưu trữ</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>Kết nối</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>Piin & sạc</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>Tiện ích</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>Thông tin chung</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>
                      <ul className='' style={{ fontSize: '0.8rem' }}>
                          <li className='mt-2 mb-2'>
                              Màn hình IPS LCD, 6.79", Full HD+
                          </li>
                          <li className='mt-2 mb-2'>
                              Chip MediaTek Helio G88
                          </li>
                          <li className='mt-2 mb-2'>
                              RAM: 4 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Dung lượng: 128 GB
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Camera trước: 8 MP
                          </li>
                          <li className='mt-2 mb-2'>
                              Pin 5000 mAh, Sạc 18 W
                          </li>
                      </ul>
                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>
              <h4 className='text-uppercase'>Thiết kế sản phẩm</h4>
              <Row>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
                  <Col className='border' style={{  width: '18rem', marginBottom: '10px' }}>

                  </Col>
              </Row>

     </Container>
    </div>
  )
}

export default Sosanh
