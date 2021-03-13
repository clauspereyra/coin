import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slide.css';

import img1 from './../../images/imgs-1.jpg';
import img2 from './../../images/imgs-2.jpg';
import img3 from './../../images/imgs-3.jpg';
import img4 from './../../images/imgs-4.jpg';

function SlideHome() {

    const [index, setIndex] = useState(1)
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div>
            <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img1} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <h3>Un Gateway<br/><span>World-Class</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img2} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <h3>Personalización Avanzada<br/><span>múltiples opciones de integración</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img3} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <h3>La mejor solución<br/><span>para los que cobran y<br/>para os que pagan</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img4} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <h3>Soluciones de pagos<br/><span>Online para empresas</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>

        </div>
           
    );
}

export default SlideHome;