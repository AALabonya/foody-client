import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();
const Banner = () => {
    return (
        <div className='overflow-x-hidden' data-aos="zoom-in" >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation, A11y]}
          className="mySwiper">
  
          <SwiperSlide>
            <div className='overflow-x-hidden' data-aos="zoom-in">
              <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://i.ibb.co/n3wDJHS/photo-1543353071-10c8ba85a904.webp"
                  alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
              </div>
              <div>
                <div className='text-center flex justify-center overflow-x-hidden'>
                  <div data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
  
                    <h1 className='font-bold text-cyan-950 text-xl lg:text-8xl mb-2'>Welcome To Foody</h1>
                    <p className='font-semibold overflow-x-hidden text-cyan-950 text-xs lg:text-xl mb-2'>Sharing love, one meal at a time. In every culture around the world, shared meals with friends <br/>
                    or family are a way of connecting with each other</p>
                    <div className=" max-w-[550px] md:rounded-full p-3 bg-cyan-950 text-white ml-24">
            <marquee direction="right items-center">
            <Link to="/" className="mr-16">Beef Sunday Roast,Chicken rice bowl,Beef Wellington,Pasta,
            Beef Brisket Pot Roast,Broccoli & Stilton soup,Beef stroganoff,Mix Salad,Vegetarian,Breakfast</Link>
            </marquee>
          </div>
                  </div>
                 
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in-left">
              <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://i.ibb.co/5kqpVtx/mexican-tacos-with-beef-tomato-sauce-salsa-2829-14227.webp"
                  alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
              </div>
              <div>
                <div className='text-center flex justify-center '>
                  <div className='absolute top-60'>
                  <h1 className='font-bold text-cyan-950 text-xl lg:text-8xl mb-2'>Welcome To Foody</h1>
                    <p className='font-semibold overflow-x-hidden text-cyan-950 text-xs lg:text-xl mb-2'>Sharing love, one meal at a time. In every culture around the world, shared meals with friends <br/>
                    or family are a way of connecting with each other</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://i.ibb.co/n3wDJHS/photo-1543353071-10c8ba85a904.webp"
                  alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
              </div>
              <div>
                <div className='text-center flex justify-center '>
                  <div className='absolute top-60'>
                  <h1 className='font-bold text-cyan-950 text-xl lg:text-8xl mb-2'>Welcome To Foody</h1>
                    <p className='font-semibold overflow-x-hidden text-cyan-950 text-xs lg:text-xl mb-2'>Sharing love, one meal at a time. In every culture around the world, shared meals with friends <br/>
                    or family are a way of connecting with each other</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://i.ibb.co/1r19xbt/salad-with-stracciatella-cheese-green-lettuce-leaves-tomatoes-sauce-keto-diet-healthy-detox-503274-1.webp"
                  alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
              </div>
              <div>
                <div className='text-center flex justify-center '>
                  <div className='absolute top-60'>
                  <h1 className='font-bold text-cyan-950 text-xl lg:text-8xl mb-2'>Welcome To Foody</h1>
                    <p className='font-semibold overflow-x-hidden text-cyan-950 text-xs lg:text-xl mb-2'>Sharing love, one meal at a time. In every culture around the world, shared meals with friends <br/>
                    or family are a way of connecting with each other</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://i.ibb.co/s9T4VPc/closeup-arugula-shrimps-tomatoes-salad-219193-365.jpg"
                  alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
              </div>
              <div>
                <div className='text-center flex justify-center'>
                  <div className='absolute top-60'>
                  <h1 className='font-bold text-cyan-950 text-xl lg:text-8xl mb-2'>Welcome To Foody</h1>
                    <p className='font-semibold overflow-x-hidden text-cyan-950 text-xs lg:text-xl mb-2'>Sharing love, one meal at a time. In every culture around the world, shared meals with friends <br/>
                    or family are a way of connecting with each other</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in">
              <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src="https://i.ibb.co/hML1zzk/fresh-vegetable-salad-with-grilled-chicken-breast-tomatoes-cucumbers-radish-mix-lettuce-leaves-chick.jpg"
                  alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
              </div>
              <div>
                <div className='text-center flex justify-center'>
  
                  <div className='absolute top-60'>
  
                  <h1 className='font-bold text-cyan-950 text-xl lg:text-8xl mb-2'>Welcome To Foody</h1>
                    <p className='font-semibold overflow-x-hidden text-cyan-950 text-xs lg:text-xl mb-2'>Sharing love, one meal at a time. In every culture around the world, shared meals with friends <br/>
                    or family are a way of connecting with each other</p>
  
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
        </Swiper>
      </div>
    );
};

export default Banner;