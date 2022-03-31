import React from 'react';
import './../../App.css';
import Z from './../../image/Z.png'
import V from './../../image/V.png'
import W from './../../image/W.png'
import X from './../../image/X.png'

export const Features = () => {
  return (
    <section className="featured" id="featured">

    <h1 className="heading"> <span>featured books</span> </h1>

    <div className=" featured-slider">

         <div className="box">
                <div className="image">
                    <img src={Z} alt=""/>
                </div>
                <div className="content">
                    <h3>featured books</h3>
                    <div className="price">$15.99 <span>$20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>

            <div className="box">
               <div className="image">
                   <img src={V} alt=""/>
               </div>
               <div className="content">
                   <h3>featured books</h3>
                   <div className="price">$15.99 <span>$20.99</span></div>
                   <a href="#" className="btn">add to cart</a>
               </div>
           </div>

           <div className="box">
               <div className="image">
                   <img src={W}alt=""/>
               </div>
               <div className="content">
                   <h3>featured books</h3>
                   <div className="price">$15.99 <span>$20.99</span></div>
                   <a href="#" className="btn">add to cart</a>
               </div>
           </div>

           <div className="box">
               <div className="image">
                   <img src={X} alt=""/>
               </div>
               <div className="content">
                   <h3>featured books</h3>
                   <div className="price">$15.99 <span>$20.99</span></div>
                   <a href="#" className="btn">add to cart</a>
               </div>
           </div>

        </div>

</section>
  )
}
