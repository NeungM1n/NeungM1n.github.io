import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>

                <span className="secondaryText">
                    Our vision 2 dong
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>PyeongTaek</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
