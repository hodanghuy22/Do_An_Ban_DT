import React, { useEffect, useState } from 'react'

import { Container, Nav, Row } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getBrand } from '../features/products/productSlice';
function Home() {
    const dispatch = useDispatch();
    const productState = useSelector(state => state?.product?.phones);
    // const brandState = useSelector(state => state?.product?.product);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(getBrand());
        dispatch(getAllProducts());
    }, []);
    useEffect(() => {
        if (productState && productState.length > 0) {
            const newProducts = productState.filter(
                (product, index, self) =>
                    index === self.findIndex(p => p.phoneId === product.phoneId)
            );
            setProducts(newProducts);
        }
    }, [productState]);
    const formatNumber = (number) => {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(number);
    };
    return (
        <>
            <div>
                <p className='h5 font-weight-bold mt-5 mb-5'>ĐIỆN THOẠI NỔI BẬT</p>
                {/* <Container className="d-inline-flex justify-content-start">
                        {
                            brandState && brandState.map((item, index) =>{
                            return (
                                <Nav.Link key={index} href="" className="rounded-pill border button-primary mr-2">{item.title }</Nav.Link>

                            )
                            })
                        }
                    </Container> */}
                <Container className='mt-3'>
                    <Row>
                        {
                            products && products?.map((item, index) => {
                                return (
                                    <div className='col-24 pb-4 pt-4' key={index} >
                                        <Link to={`/dtdd/${item?.phoneId}`} className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className='p-3'>
                                                <img className='card-image' width={"100%"} src={item?.phone.fileHinh} alt='iphone15promax' />
                                                <div className='mt-4'>
                                                    <p className='text-title'>{item?.phone.name}</p>
                                                    <div>
                                                        <div className='text-info'>
                                                            <i className='btn'> {item?.phone.kichThuoc} inches</i>
                                                            <i className='btn'> {item?.phone.ram} GB</i>
                                                            <i className='btn'> {item?.phone.rom} GB</i>
                                                            <i className='btn'> {item?.phone.cpu}</i>
                                                        </div>
                                                        <p className='text-price  font-size-bold amount' >
                                                            {formatNumber(item?.price)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

            <footer className='m-auto' style={{ width: 1200 }}>
                <Footer />
            </footer>
        </>
    );

}

export default Home;