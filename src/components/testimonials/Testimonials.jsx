import React from 'react';
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from '../../assets/avatar1.jpg';
import './testimonials.css';




const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial__container">
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper test_items"
        >
          <SwiperSlide>
            <div className="test_item">
              <div className="test_img">
                <img src={avatar1} alt="" />
              </div>

              <div className="test_content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sit, harum, earum esse error quasi unde vitae nihil voluptatem sint beatae consequatur maiores tempora atque ullam voluptatibus alias excepturi aliquam!</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="test_item">
              <div className="test_img">
                <img src={avatar1} alt="" />
              </div>

              <div className="test_content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sit, harum, earum esse error quasi unde vitae nihil voluptatem sint beatae consequatur maiores tempora atque ullam voluptatibus alias excepturi aliquam!</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="test_item">
              <div className="test_img">
                <img src={avatar1} alt="" />
              </div>

              <div className="test_content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sit, harum, earum esse error quasi unde vitae nihil voluptatem sint beatae consequatur maiores tempora atque ullam voluptatibus alias excepturi aliquam!</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials