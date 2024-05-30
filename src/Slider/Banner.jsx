import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        
        <div className=' container mx-auto mt-6 mb-6'>
        <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
        
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[500px] rounded-lg' src="https://i.ibb.co/PjkdQkm/3-2.jpg" alt="" />
                        <p className="absolute inset-0  bg-black bg-opacity-50 text-center text-white text-2xl" style={{ top: '50%', transform: 'translateY(30%)' }}>
                        Step into a world of artistic wonder at Artisanal Treasures, where every material tells a story and every creation is a masterpiece in the making
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[500px] rounded-lg' src="https://i.ibb.co/MG4stKP/1-2.jpg" alt="" />
                        <p className="absolute inset-0  bg-black bg-opacity-50 text-center text-white text-2xl"style={{ top: '50%', transform: 'translateY(30%)' }}>
                        Dive into a world of boundless imagination at Craft Haven, your premier destination for all things art and craft! 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[500px] rounded-lg' src="https://i.ibb.co/Lpqf6xr/2-2.jpg" alt="" />
                        <p className="absolute inset-0  bg-black bg-opacity-50 text-center text-white text-2xl"style={{ top: '50%', transform: 'translateY(30%)' }}>
                        Welcome to Craftopia, your sanctuary for artistic expression and handmade wonders! Immerse yourself in a world of colors
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
          
    
    );
};

export default Banner;
