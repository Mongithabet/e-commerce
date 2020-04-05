import React from 'react'
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


import {render} from 'react-dom';

class Main extends React.Component {
 
       
      
    render(){


    return (
        <div>

           <main>
<div className="container-fluid p-0">
    <div className="site-slider">
        <div className="">

            <div> <img src={img1} className="img-fluid" alt="Banner 1"/></div>
            <div> <img src={img2} className="img-fluid" alt="Banner 2"/></div>
            <div> <img src={img3} className="img-fluid" alt="Banner 3"/></div>
            <div> <img src={img4} className="img-fluid" alt="Banner 4"/></div>
            <div> <img src={img5} className="img-fluid" alt="Banner 5"/></div>
            <div> <img src={img6} className="img-fluid" alt="Banner 6"/></div>
            <div> <img src={img7} className="img-fluid" alt="Banner 7"/></div>
            <div> <img src={img8} className="img-fluid" alt="Banner 8"/></div>
            <div> <img src={img9} className="img-fluid" alt="Banner 9"/></div>


        </div>
        <div className="slider-btn">
            <span className="prev position-top"><i className="fas fa-chevron-left"></i></span>
            <span className="next position-top right-0"><i className="fas fa-chevron-right"></i></span>

        </div>
    </div>
</div>
<div className="container-fluid">
    <div className="site-slider-two px-md-4">
        <div className="row">
            <div className="col-md-2 product pt-md-5 pt-4">
                <img src={im1} alt="Product 1"/>
                <span className="border site-btn btn-span">SUMSUNG M30</span>
            </div>
            <div className="col-md-2 product pt-md-5 pt-4">
                <img src={im2} alt="Product 2"/>
                <span className="border site-btn btn-span">LG M30</span>
            </div>
            <div className="col-md-2 product pt-md-5 pt-4">
                <img src={im3} alt="Product 3"/>
                <span className="border site-btn btn-span">HUAWEI P10</span>
            </div>
            <div className="col-md-2 product pt-md-5 pt-4">
                <img src={im4} alt="Product 4"/>
                <span className="border site-btn btn-span">IMPRIMANTE</span>
            </div>
            <div className="col-md-2 product pt-md-5 pt-4">
                <img src={im5} alt="Product 5"/>
                <span className="border site-btn btn-span">MOBILE</span>
            </div>
            
            </div>
            <div className="slider-btn">
                <span className="prev position-top"><i className="fas fa-chevron-left fa-2x text-secondary"></i></span>
                <span className="next position-top right-0"><i className="fas fa-chevron-right fa-2x text-secondary"></i></span>
    
            </div>
        </div>
    </div>

    </main>

        </div>
    )
}   
 }

export default Main


   
         