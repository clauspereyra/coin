import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#f99d27')};
    z-index: 5;
    @media screen and (max-width: 768px) {
        padding: 108px 0;
    }

    `;

export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:auto;
    Width:100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    `;
    
export const InfoRow = styled.div`
    Display: grid;
    grid-auto-column: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
    
    `;

    
export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 80px 35px 180px 35px;
    grid-area: col1;
    `;

export const Column2 = styled.div`
    margin-bottom:15px;
    padding: 80px 35px 180px 35px;
    grid-area: col2;
    `;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom: 0px;

    `;   

export const FirstLine = styled.p`
    color: #ffffff;
    text-align:center;
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom:0px !important;
    margin-top:160px;
    height: auto !important;
    display: block !important;

    `; 

export const TopLine = styled.p`
    color: #01bf71;
    text-align:center;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom:16px;

    `;   
    
export const Heading = styled.h1`
    margin-bottom: 24px; 
    text-align:center;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({ lightText }) => (lightText ? '#ffffff' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size:32px;
    }

    `;     

export const Subtitle = styled.p`
    xmax-width:440px;
    margin-bottom: 0px; 
    text-align:center;
    font-size:18px;
    line-height:24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};

   
    `; 

export const BtnWrap = styled.div`
    display: block;
    justify-content: flex-start;
    margin:20px auto;
    text-align: center;
    width: 300px;
    border: 4px solid #ffffff;
    background: none !important;
    background-color: transparent !important;
    border-radius: 3px;
    letter-spacing: 6px;
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff !important;
    padding: 30px 0x !important;
       
    `;   
    
export const ImgWrap = styled.div`
    max-width: 555px;
    height:100%;
    margin:0px auto;
    text-align: center;
       
    `; 
    
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    margin:0px auto;
    text-align: center;
       
    `;    

