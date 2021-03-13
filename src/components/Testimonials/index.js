import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css';

import img1 from './../../images/testimonials-bg.png';
import img2 from './../../images/testimonials-bg.png';
import img3 from './../../images/testimonials-bg.png';
import img4 from './../../images/testimonials-bg.png';

import img10 from './../../images/logo1T.jpg';
import img11 from './../../images/logo2T.jpg';
import img12 from './../../images/logo3T.jpg';
import img13 from './../../images/logo4T.jpg';
import img14 from './../../images/logo5T.jpg';

import img16 from './../../images/comillas.png';
import img17 from './../../images/comillas2.png';

function Testimonials() {

    const [index, setIndex] = useState(1)
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="testimonials">
            <h1 style={{ textAlign: "center" }}><span>ALGUNOS</span><br/>TESTIMONIOS</h1>
            <div className="separator"></div>
            <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img1} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <div className="box-item"> 
                        <img className="testimonials-comillas1" src={img16} alt="Cobro Inmediato" />                       
                        <h4>Para un mejor servicio a nuestros clientes incorporamos a nuestra página la plataforma E-commerce. Gracias a COIN los clientes pueden adquirir los productos utilizando diferentes medios de pago. Además para poder resolver cualquier eventualidad contamos con asesoramiento las 24hs del día para ayudarnos en lo que necesitemos. Gracias COIN por acompañarnos en nuestro crecimiento!</h4>
                        <img className="testimonials-comillas2" src={img17} alt="Cobro Inmediato" />
                        </div>
                        <div className="box-item">
                        <img className="testimonials-img" src={img10} alt="Cobro Inmediato" />
                        <h5>Javier Ortega, Director<br/><span>Sanitarios Enigma</span></h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img2} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <div className="box-item">
                        <img className="testimonials-comillas1" src={img16} alt="Cobro Inmediato" />
                        <h4>Cuando comenzamos nuestro emprendimiento, con todo lo que ello significa, a diferencia de otras empresas que nos exigían requisitos mínimos de transacciones, PagosPyme fue una herramienta indispensable para nuestro crecimiento, pudiendo incorporar pagos electrónicos sin complicados requisitos. Lo mejor que puedo rescatar es la buena atención, la mesa de ayuda y el equipo siempre dispuesto a brindar soluciones . Estamos muy felices de poder utilizar la plataforma PagosPyme.</h4>
                        <img className="testimonials-comillas2" src={img17} alt="Cobro Inmediato" />
                        </div>
                        <div className="box-item">
                        <img className="testimonials-img" src={img11} alt="Cobro Inmediato" />
                        <h5>Jaime A. Winer<br/><span>CEO KOLPLAC S.A.</span></h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img3} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>
                        <div className="box-item"> 
                        <img className="testimonials-comillas1" src={img16} alt="Cobro Inmediato" />                       
                        <h4>COIN es una empresa que calzó para nosotros en el momento justo, ya que muchos de nuestros cobros eran presenciales en nuestras oficinas y sus herramientas nos ayudaron a que nuestra cartera de clientes/cobranza continúe de la mejor manera con la cobranza electrónica en la variada cantidad de opciones que nos brindaron , facilitando herramientas y un apoyo constante para resolver y responder consultas de manera ágil de todo su equipo de trabajo. Muchas gracias COIN!!</h4>
                        <img className="testimonials-comillas2" src={img17} alt="Cobro Inmediato" />
                        </div>
                        <div className="box-item">
                        <img className="testimonials-img" src={img12} alt="Cobro Inmediato" />
                        <h5>Diego Masoni<br/><span>Gerente general<br/>Gold Comercializadora</span></h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img4} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption> 
                        <div className="box-item">  
                        <img className="testimonials-comillas1" src={img16} alt="Cobro Inmediato" />                     
                        <h4>COIN es una empresa que apunta a dar nuevas y más flexibles soluciones para las empresas que cobran electrónicamente a sus clientes. COIN nos ayudó con la gestión de nuestras cobranzas facilitándonos la herramienta y estamos muy satisfechos con el servicio. Esto va de la mano con sus asesores, que siempre están dispuestos a atender cada consulta que tengamos.</h4>
                        <img className="testimonials-comillas2" src={img17} alt="Cobro Inmediato" />
                        </div>
                        <div className="box-item">
                        <img className="testimonials-img" src={img13} alt="Cobro Inmediato" />
                        <h5>Alfredo Palma<br/><span>Gerente- Anticipo.com.ar</span></h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="slidebox d-block w-100" src={img4} alt="Cobro Inmediato" style={{height: "100vh"}} />
                    <Carousel.Caption>  
                        <div className="box-item">
                        <img className="testimonials-comillas1" src={img16} alt="Cobro Inmediato" />                          
                        <h4>Desde Madre Tierra desarrollamos urbanizaciones sociales y gestionamos fondos rotatorios para el mejoramiento de vivienda en articulación con comunidades de base. Hemos podido integrar PagosPyme a una plataforma de gestión desde la cual referentes barriales pueden administrar los préstamos otorgados, dar de alta nuevos préstamos, hacer el seguimiento de devolución, etc. PagosPyme resultó ser una excelente herramienta para fortalecer experiencias de la economía social y solidaria!</h4>
                        <img className="testimonials-comillas2" src={img17} alt="Cobro Inmediato" />
                        </div>
                        <div className="box-item">
                        <img className="testimonials-img" src={img14} alt="Cobro Inmediato" />
                        <h5>Gabriel Nosetto<br/><span>Área de Desarrollo Institucional<br/>Madre Tierra</span></h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>                
                
            </Carousel>

        </div>
           
    );
}

export default Testimonials;