import { FaFileExcel } from 'react-icons/fa';
import styled from 'styled-components'
import { Column1 } from '../InfoSection/InfoElements';

export const ServicesContainer = styled.div`
    height:400px;
    display: Flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    

    @media screen and (max-width: 768px) {
        height: 1100px;
        
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
        
    }

`;

export const ServicesWrapper = styled.div`
    max-width:100%;
    display: grid;
    margin:0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding:0 0px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const ServicesCard = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.0);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesImg = styled.img`
    height: 60px;
    width: 60px;
    margin-bottom:10px;
    

`;

export const ServicesH1 = styled.h1`
    font-size: 48px;
    font-weight: 700 !important;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom:64px;
    display: none;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`;

export const ServicesH2 = styled.h2`
    font-size: 36px;
    font-weight: 700; 
    margin-bottom:10px;
    color: #ffffff;

`;

export const ServicesP = styled.p`
    font-size: 24px;
    text-align: center;
    color: #ffffff;

`;




