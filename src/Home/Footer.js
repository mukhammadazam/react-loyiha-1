import { useState } from 'react';
import Footerlogo from './imges/Footerlogo.svg';
import Footerfasbook from './imges/Footerfazbook.svg';
import Footertwter from './imges/Footertwtter.svg';
import Footerinstagram from './imges/Footerinstagram.svg';


const foterFun = () => {
  
    return (
        <div className="letter-site">
            <div className="container">
                <div className="letter">
                    <p className="letter__text text-center">Newsletter</p>
                    <p className="letter__title text-center">Subscribe to Our Newsletter</p>
                    <p className="letter__text1">And never miss latest Updates!</p>
                    <form className="d-flex form align-items-center justify-content-center flex-wrap gap-5 ">
                        <input className="d-block letter__input text-white" type={"email"} placeholder="Email Address" />
                        <button className="letter__btn">Subscribe</button>
                    </form>

                </div>
                <div className="contact">
                    <div className="row gy-5">
                        <div className="col-12 col-md-4 justify-content-center justify-content-md-between">
                            <p className="contact__title text-center">Contact Us</p>
                            <p className="contact__text text-center">9 W 53rd St, London, NY 10019, UK</p>
                            <a className='text-decoration-none d-block contact__link d-flex align-items-center justify-content-center' href="tel:+9989199509001">+1 212-344-1230</a>
                            <a className='text-decoration-none d-block contact__link d-flex align-items-center justify-content-center' href="tel:+9989199509001">+1 212-555-1230</a>
                        </div>
                        <div className="col-12 col-md-4 justify-content-center justify-content-md-between">
                            <div className='d-flex align-items-center justify-content-center'><img src={Footerlogo} alt="Footerlogo" /></div>
                            <p className="contact__text text-center pt-3">"The best way to find yourself is to lose yourself in the service of others.”</p>
                            <div className='d-flex align-items-center justify-content-center gap-3'>
                                <a className='text-decoration-none d-block contact__link' href="https://www.google.com/search?q=fasbook&oq=fasbook&aqs=chrome..69i57j46i10i131i199i433i465i512j0i10i433i512j0i10i512l6.5773j0j7&sourceid=chrome&ie=UTF-8"><img src={Footerfasbook} alt="Footerfasbook" /></a>
                                <a className='text-decoration-none d-block contact__link' href="https://twitter.com/?lang=ru"><img src={Footertwter} alt="Footerfasbook" /></a>
                                <a className='text-decoration-none d-block contact__link' href="https://www.instagram.com/"><img src={Footerinstagram} alt="Footerfasbook" /></a>
                            
                             </div>
                        </div>
                        <div className="col-12 col-md-4 justify-content-center justify-content-md-between">
                            <p className="contact__title text-center">Working Hours</p>
                            <p className="contact__text text-center">Monday-Friday: 08:00 am -12:00 am</p>
                            <a className='text-decoration-none d-block contact__link d-flex align-items-center justify-content-center' href="tel:+9989199509001">Saturday-Sunday:</a>
                            <a className='text-decoration-none d-block contact__link d-flex align-items-center justify-content-center' href="tel:+9989199509001">07:00am -11:00 pm</a>
                        </div>
                    </div>
                    <p className='text-center text-white pt-5 pb-5'>2022 Pop online. All Rights reserved.</p>
                </div>
            </div>

        </div>
    );
}




export default foterFun;