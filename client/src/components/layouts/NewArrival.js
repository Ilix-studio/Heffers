import React from 'react';
import './../../App.css';
import P from './../../image/P.png'
import Q from './../../image/Q.png'
import R from './../../image/R.png'
import S from './../../image/S.png'

export const NewArrival = () => {
  return (
    <section class="arrivals" id="arrivals">

    <h1 class="heading"> <span>new arrivals</span> </h1>

    <div class="arrivals-slider">

        <div class="Boxes">

            <a href="#" class="box">
                <div class="image">
                    <img src={Q} alt=""/>
                </div>
                <div class="content">
                    <h3>new arrivals</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>
            <a href="#" class="box">
                <div class="image">
                    <img src={R} alt=""/>
                </div>
                <div class="content">
                    <h3>new arrivals</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>
            <a href="#" class="box">
                <div class="image">
                    <img src={S} alt=""/>
                </div>
                <div class="content">
                    <h3>new arrivals</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>

            

           

        </div>

    </div>

    

</section>
  )
}
