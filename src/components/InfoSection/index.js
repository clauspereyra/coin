import React from 'react';
import { Button } from '../ButtonElement';
import './InfoElements.css'
import imgs1 from './../../images/pay-1.png';
import imgs2 from './../../images/pay-2.png';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, FirstLine, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, secondBlock, firstBlock, topLine, topLine2, lightText, headline, headline2, darkText, description, description2, buttonLabel, buttonLabel2, img, img2, alt, primary, dark, dark2 }) => {
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <div className="servicesd-box">
                    <FirstLine>{firstBlock}<br/><span className="SeconfBlock">{secondBlock}</span></FirstLine>                                        
                    </div>
                    <InfoRow imgStart={imgStart}>                      

                        <Column1>
                            <ImgWrap>
                                <Img src={imgs1} alt={alt} />                                
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='ventajas'                                    
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>                               
                                </BtnWrap>
                            </TextWrapper>                                                    
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={imgs2} alt={alt} />                                
                            </ImgWrap>
                            <TextWrapper>
                                <TopLine>{topLine2}</TopLine>
                                <Heading lightText={lightText}>{headline2}</Heading>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <BtnWrap>
                                    <Button to='gateway'                                    
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel2}</Button>                               
                                </BtnWrap>
                            </TextWrapper>                        
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        
        
        </>   
    );
};

export default InfoSection;