import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div  className='description-box'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>EcomDaud offers a curated selection of fashion-forward, high-quality essentials for men, women, and kids. 
            Each product is crafted from premium materials to ensure comfort, durability, and everyday versatility. 
            Whether you’re shopping for minimalist staples or standout pieces, EcomDaud delivers modern style at an unbeatable value</p>
            <p>At EcomDaud, we believe in making fashion accessible without compromising on quality. 
            Our collection features timeless designs that can be effortlessly mixed and matched, allowing you to express your unique style every day.</p>

        </div>
      
    </div>
  )
}

export default DescriptionBox
