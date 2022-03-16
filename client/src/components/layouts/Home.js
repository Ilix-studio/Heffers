import React from 'react';
import './../../App.css';
import stand from './../../image/stand.png';
import A  from    './../../image/A.png';
import B  from    './../../image/B.png';
import C  from    './../../image/C.png';


export const Home = () => {
  return (
<section className="home" id="home">

<div className="row">

    <div className="content">
        <h3>Welcome to Heffers</h3>
       
        <p> <b> Grab Our Best Collection with Best Discount%</b></p>
        <a href="#" className="btn">shop now</a>
    </div>

    {/* <Swiper id='main'></Swiper> */}

    <div className="swiper books-slider">
        <div className="slide">
            <a href="#" ><img src={A} alt=""/></a>
            <a href="#" ><img src={B} alt=""/></a>
            <a href="#" ><img src={C} alt=""/></a>
    
        </div>
        <img src={stand} class="stand" alt="" />
    </div>

</div>

</section>
  )
}
