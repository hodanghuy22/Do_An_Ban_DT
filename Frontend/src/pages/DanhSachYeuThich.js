import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DanhSachYeuThich = () => {
  return (
    <div>
          <h6>Sản phẩm yêu thích</h6>
          <Container>
              <Row>
                  <Col xl={2} md={4} sm={6} className='mr-5 mb-1 p-2'>
                      <Card className='p-2' border='1' style={{width: '10rem' }}>
                          <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <Card className='border-0'>
                                  <Card.Img className='card-image' variant="top" src="/Images/products/1.jpg" />
                                  <Card.Body>
                                      <Card.Title style={{ fontSize: '1rem'}}>Samsung Galaxy A34 5G 128GB</Card.Title>
                                      <Card.Text className='text-danger font-size-bold'>
                                          6.990.000 đ
                                      </Card.Text>
                                  </Card.Body>
                              </Card>
                          </Link>
                      </Card>
                  </Col>
                  <Col xl={2} md={4} sm={6} className='mr-5 mb-1 p-2'>
                      <Card className='p-2' border='1' style={{ width: '10rem' }}>
                          <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <Card className='border-0'>
                                  <Card.Img className='card-image' variant="top" src="/Images/products/1.jpg" />
                                  <Card.Body>
                                      <Card.Title style={{ fontSize: '1rem' }}>Samsung Galaxy A34 5G 128GB</Card.Title>
                                      <Card.Text className='text-danger font-size-bold'>
                                          6.990.000 đ
                                      </Card.Text>
                                  </Card.Body>
                              </Card>
                          </Link>
                      </Card>
                  </Col>
                  <Col xl={2} md={4} sm={6} className='mr-5 mb-1 p-2'>
                      <Card className='p-2' border='1' style={{width: '10rem' }}>
                          <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <Card className='border-0'>
                                  <Card.Img className='card-image' variant="top" src="/Images/products/1.jpg" />
                                  <Card.Body>
                                      <Card.Title style={{ fontSize: '1rem'}}>Samsung Galaxy A34 5G 128GB</Card.Title>
                                      <Card.Text className='text-danger font-size-bold'>
                                          6.990.000 đ
                                      </Card.Text>
                                  </Card.Body>
                              </Card>
                          </Link>
                      </Card>
                  </Col>
                  <Col xl={2} md={4} sm={6} className='mr-5 mb-1 p-2'>
                      <Card className='p-2' border='1' style={{ width: '10rem' }}>
                          <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <Card className='border-0'>
                                  <Card.Img className='card-image' variant="top" src="/Images/products/1.jpg" />
                                  <Card.Body>
                                      <Card.Title style={{ fontSize: '1rem' }}>Samsung Galaxy A34 5G 128GB</Card.Title>
                                      <Card.Text className='text-danger font-size-bold'>
                                          6.990.000 đ
                                      </Card.Text>
                                  </Card.Body>
                              </Card>
                          </Link>
                      </Card>
                  </Col>
                  <Col xl={2} md={4} sm={6} className='mr-5 mb-1 p-2'>
                      <Card className='p-2' border='1' style={{ width: '10rem' }}>
                          <Link to="/dtdd/1" className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <Card className='border-0'>
                                  <Card.Img className='card-image' variant="top" src="/Images/products/1.jpg" />
                                  <Card.Body>
                                      <Card.Title style={{ fontSize: '1rem' }}>Samsung Galaxy A34 5G 128GB</Card.Title>
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
  )
}

export default DanhSachYeuThich
