import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        
        <HeroContent>
            <HeroH1>
            UN GATEWAY WORLD-CLASS
            </HeroH1>
            <HeroP>
            La mejor solución para lo que cobran y para lo que pagan
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover}
                onMouseLeave={onHover}>
                    Comencemos {hover ? <ArrowForward /> : <ArrowRight />}

                </Button>

            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>   
    );
};

export default HeroSection;