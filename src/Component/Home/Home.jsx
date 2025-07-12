import React from 'react';
import "../Home/Home.css";
import Navbar from '../Navbar/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home1 from "../Home/homepic/home1.png"; 
import home2 from "../Home/homepic/home2.png"; 

import Man from '../Man/Man';
import Woman from '../woman/Woman';
import Footer from '../Footer/Footer';

function Home() {
  const slides = [
    {
      image: home1,
      title: 'Modern Homes',
      description: 'Discover our luxury modern home designs',
      buttonText: 'View Homes'
    },
    {
      image: home2,
      title: 'Elegant Interiors',
      description: 'Beautiful interior designs for your home',
      buttonText: 'Explore Designs'
    },
    {
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Comfortable Living',
      description: 'Create your perfect living space',
      buttonText: 'Get Started'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <Navbar />
      <div className="home-carousel-container">
        <Slider {...settings} className="home-carousel">
          {slides.map((slide, index) => (
            <div key={index} className="slide-container">
              <img src={slide.image} alt={`Slide ${index}`} className="carousel-img" />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="slide-button">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Man/>
      <Woman/>
      <Footer/>
    </>
  );
}

export default Home;