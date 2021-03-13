import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./logos.css";

import img1 from './../../images/logo1.jpg';
import img2 from './../../images/logo2.jpg';
import img3 from './../../images/logo3.jpg';
import img4 from './../../images/logo4.jpg';
import img5 from './../../images/logo5.jpg';
import img6 from './../../images/logo6.jpg';
import img7 from './../../images/logo7.jpg';
import img8 from './../../images/logo8.jpg';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function LogosBox() {
    return (
      <>
      <div className="caja-logo">
        <h1 style={{ textAlign: "center" }}><span>ALGUNOS DE</span><br/>NUESTROS CLIENTES</h1>
        <div className="separator"></div>
        <div className="logos">
          <Carousel breakPoints={breakPoints}>
            <Item><img className="logosbox" src={img1} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img2} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img3} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img4} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img5} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img6} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img7} alt="Cobro Inmediato" /></Item>
            <Item><img className="logosbox" src={img8} alt="Cobro Inmediato" /></Item>
          </Carousel>
        </div>
        </div>
      </>
    );
  }



export default LogosBox;







