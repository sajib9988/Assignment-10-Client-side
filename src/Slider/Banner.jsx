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
                        <img className='w-full h-[500px] rounded-lg' src="https://i.ibb.co/WKsFxpr/1.jpg" alt="" />
                        <p className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-2xl" style={{ top: '50%', transform: 'translateY(30%)' }}>
                            Discover contemporary living in our stunning modern homes.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[500px] rounded-lg' src="https://i.ibb.co/jG5jR3v/2.jpg" alt="" />
                        <p className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-2xl"style={{ top: '50%', transform: 'translateY(30%)' }}>
                            Experience the charm of our scenic neighborhood communities.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[500px] rounded-lg' src="https://i.ibb.co/41YsmrD/3.jpg" alt="" />
                        <p className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-2xl"style={{ top: '50%', transform: 'translateY(30%)' }}>
                            Indulge in luxury living with our meticulously designed interiors.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
          
    
    );
};

export default Banner;
