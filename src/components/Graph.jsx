import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Graph() {
    return ( 
        <div>
             <div className="container">
        <div className="row flex-lg-row-reverse align-items-center pb-3">
          <div className="col-lg-6">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='/service-slide-1.png' className="d-block graph w-100 img-fluid" alt="Bootstrap Themes"  loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src='/service-slide-2.png' className="d-block graph img-fluid" alt="Bootstrap Themes" width="500" height="600" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src='/service-slide-3.png' className="d-block graph img-fluid" alt="Bootstrap Themes" width="500" height="600" loading="lazy"/></SwiperSlide>
       
      </Swiper>
          </div>
          <div className="col-lg-6 graphs">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">It is the most advanced digital marketing and it company.</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <a href='#' className='check fs-5 text-decoration-none'>Check It Out <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
        </div>


        <div className="syntclr">
          <div className="container">
        <div className="row flex-lg-row align-items-center pt-5 pb-5">
          <div className="col-lg-6 col-md-6">
            <img
              src="/service-slide-1.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 col-md-6 graphs">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">It is a privately owned Information and cyber security company</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <a href='#' className='check fs-5 text-decoration-none'>Check It Out <i className="bi bi-arrow-right"></i></a>            
          </div>
        </div>
      </div>
      </div>

       <div className="container">
        <div className="row flex-lg-row-reverse align-items-center pb-3">
          <div className="col-lg-6 col-md-6">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="service-slide-1.png" class="d-block graph img-fluid" alt="Bootstrap Themes"  loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src='/public/service-slide-2.png' className='graph'/></SwiperSlide>
        <SwiperSlide><img src='/public/service-slide-3.png' className='graph'/></SwiperSlide>
       
      </Swiper>
          </div>
          <div className="col-lg-6 col-md-6 graphs">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">It’s a team of experienced and skilled people with distributions</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <a href='#' className='check text-decoration-none fs-5'>Check It Out <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
        </div>

        <div className="syntclr">
        <div className="container">
        <div className="row flex-lg-row align-items-center pb-3">
          <div className="col-lg-6 col-md-6">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="/service-slide-1.png" class="d-block graph img-fluid" alt="Bootstrap Themes" width="1000" height="500" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src='/service-slide-2.png' className='graph'/></SwiperSlide>
        <SwiperSlide><img src='/service-slide-3.png' className='graph'/></SwiperSlide>
       
      </Swiper>
          </div>
          <div className="col-lg-6 col-md-6 graphs">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">It is the most advanced digital marketing and it company.</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <a href='#' className='check text-decoration-none fs-5'>Check It Out <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
        </div>
        </div>
        </div>
     );
}

export default Graph;