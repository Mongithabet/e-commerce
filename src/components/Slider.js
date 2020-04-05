import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.png';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.png';
import img9 from './assets/img9.jpg';
import im1 from './assets/im1.jpg';
import im2 from './assets/im2.jpg';
import im3 from './assets/im3.jpg';
import im4 from './assets/im4.jpg';
import im5 from './assets/im5.jpg';

import '../App.css';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                    </div>
                </div>
                 <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                    </div>
                </div>
                 <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                    </div>
                </div>
                 <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                    </div>
                </div>
                 <div className="each-slide">
                    <div>
                        <img src={img8} alt="img8" />
                    </div>
                </div> 
                <div className="each-slide">
                    <div>
                        <img src={img9} alt="img9" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;