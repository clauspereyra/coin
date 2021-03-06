import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import './HeroElements.css'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: linear-gradient(100deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(100deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    `;

export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    `;
    
export const VideoBg = styled.video`
    position: absolute;
    left:0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    `;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const HeroH1 = styled.h1`
    color: #ffffff;
    font-size: 48px;
    line.height: 48px;
    margin:0px;
    padding: 0px;
    text-align: center;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
    `;   

export const HeroP = styled.p`
    margin-top:10px; 
    color: #ffffff;
    font-size: 28px;
    text-align: center;
    max-width:600px;
    line-height: 28px;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
    `;   
    
export const HeroBtnWrapper = styled.div`
    margin-top:32px; 
    display:flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    
    `;     

export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px; 
    Font-size:20px;
    
    `;   
    
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px; 
    Font-size:20px;
    
    `;     

