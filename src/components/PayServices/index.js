import React from 'react';
import Icon1 from './../../images/visa-logo.png';
import Icon2 from './../../images/master-logo.png';
import Icon3 from './../../images/amex-logo.png';
import Icon4 from './../../images/cabal-logo.png';
import Icon5 from './../../images/maestro-logo.png';
import Icon6 from './../../images/pf-logo.png';

import "./PayStyle.css";

import {PayContainer, PayH1, PayWrapper, PayCard, PayIcon, PayH2, PayP} from './PayElements'; 

const PayServices = () => {
    return (
        <div className="PayBox">
        <PayContainer id="pay">
            <PayH1>MEDIOS DE PAGO<br/><span>QUE OFRECEMOS</span></PayH1>
            <div className="separator"></div>
            <PayWrapper>
                <PayCard>
                    <PayIcon src={Icon1}/>
                    <PayH2>+400.000.000</PayH2>
                    <PayP>Recaudación Mensual</PayP>
                </PayCard>

                <PayCard>
                    <PayIcon src={Icon2}/>
                    <PayH2>+400.000.000</PayH2>
                    <PayP>Recaudación Mensual</PayP>
                </PayCard>

                <PayCard>
                    <PayIcon src={Icon3}/>
                    <PayH2>+400.000.000</PayH2>
                    <PayP>Recaudación Mensual</PayP>
                </PayCard>

                <PayCard>
                    <PayIcon src={Icon4}/>
                    <PayH2>+400.000.000</PayH2>
                    <PayP>Recaudación Mensual</PayP>
                </PayCard>

                <PayCard>
                    <PayIcon src={Icon5}/>
                    <PayH2>+400.000.000</PayH2>
                    <PayP>Recaudación Mensual</PayP>
                </PayCard>

                <PayCard>
                    <PayIcon src={Icon6}/>
                    <PayH2>+400.000.000</PayH2>
                    <PayP>Recaudación Mensual</PayP>
                </PayCard>
            </PayWrapper>
        </PayContainer>
        </div>
    );
}

export default PayServices;
