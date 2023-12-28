import React, { useEffect, useState } from 'react'
import { Container, Nav, Row } from 'react-bootstrap';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getBrand } from '../features/products/productSlice';
import { Helmet } from 'react-helmet';
import SliderShow from '../Components/SliderShow';

function Home() {
    const dispatch = useDispatch();
    const productState = useSelector(state => state?.product?.phones);
    const brandState = useSelector(state => state?.product?.product);
    const [products, setProducts] = useState([]);
    const [isProductStateReady, setIsProductStateReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getBrand())
            .then(() => setIsLoading(false))
            .catch(() => 'error');
    }, [dispatch]);

    useEffect(() => {
        if (productState && productState.length > 0) {
            const newProducts = productState.filter(
                (product, index, self) =>
                    index === self.findIndex(p => p.phoneId === product.phoneId)
            );
            setProducts(newProducts);
            setIsProductStateReady(true);
        }
    }, [productState]);
    if (isLoading) {
        return <div className='w-100 d-flex justify-content-center' style={{ height: '300px' }}>
            <div className="spinner"></div>
        </div>;
    }
    if (!productState) {
        return <div>Sản phẩm không khả dụng.</div>;
    }
    const formatNumber = (number) => {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(number);
    };
    return (
        <>
            <Helmet>
                <title>PHBshop - Điện thoại chính hãng</title>
            </Helmet>
            <div>
                <SliderShow />
            </div>
            <div>
                <p className='h5 font-weight-bold mt-5 mb-5'>ĐIỆN THOẠI NỔI BẬT</p>
                <Container className="d-inline-flex justify-content-start">
                    {
                        brandState && brandState.map((item, index) => {
                            return (
                                <Nav.Link key={index} href="" className="rounded-pill border button-primary mr-2">{item.title}</Nav.Link>

                            )
                        })
                    }
                </Container>
                <Container className='mt-3'>
                    <Row>
                        {isProductStateReady ? (
                            products && products?.map((item, index) => {
                                return (
                                    <div className=' w-item' key={index} >
                                        <Link to={`/dtdd/${item?.id}`} className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        ) : (<div className='w-100 d-flex justify-content-center' style={{ height: '300px' }}>
                            <div className="spinner"></div>
                        </div>
                        )}
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