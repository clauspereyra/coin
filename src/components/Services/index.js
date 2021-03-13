import React from 'react';
import Icon1 from './../../images/svg1.svg';
import Icon2 from './../../images/svg3.svg';
import Icon3 from './../../images/svg5.svg';

import './Services.css';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'; 

const Services = () => {
    return (
        <div className='services-box'>
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>+400.000.000</ServicesH2>
                    <ServicesP>Recaudación Mensual</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>571</ServicesH2>
                    <ServicesP>Clientes</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>+10.000.000</ServicesH2>
                    <ServicesP>Transacciones cursadas</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </div>
    );
}

export default Services;
