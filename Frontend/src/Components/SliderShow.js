import Carousel from 'react-bootstrap/Carousel';

function SliderShow() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/slider/1.png"
                    alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/slider/2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/slider/3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/slider/4.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/slider/5.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderShow;