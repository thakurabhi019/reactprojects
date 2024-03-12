import React from 'react';

function Hero(props) {
    return (
        <main className='hero container' >
            
            <div className="hero_content">
                <h1>YOUR FEET DESSERVER THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. </p>
                <div className="hero-btn">
                <button>Shop now</button>
                <button className='secondary-btn'>Category</button>

            </div>
            <div className="shopping">
                <p>Also availabel on</p>
                <div 
                className="brand-icons">
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />

                </div>
            </div>

            </div>
            <div className="hero_image">
                <img src="images/shoe_image.png" alt="" />
            </div>

        </main>
       
    );
}

export default Hero;