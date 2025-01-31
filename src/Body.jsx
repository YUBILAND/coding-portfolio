import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Fontaine from './regions/Fontaine'
import Inazuma from './regions/Inazuma'
import Liyue from './regions/Liyue'
import Mondstadt from './regions/Mondstadt'
import Natlan from './regions/Natlan'
import Sumeru from './regions/Sumeru'

const Body = () => {
  return (
    <div className='h-[800px] w-screen'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        className='h-full'
      >
        <SwiperSlide>
          <Mondstadt />
        </SwiperSlide>
        <SwiperSlide>
          <Liyue />
        </SwiperSlide>
        <SwiperSlide>
          <Inazuma />
        </SwiperSlide>
        <SwiperSlide>
          <Sumeru />
        </SwiperSlide>
        <SwiperSlide>
          <Fontaine />
        </SwiperSlide>
        <SwiperSlide>
          <Natlan />
        </SwiperSlide>
      </Swiper>

      <div className='absolute bottom-60 left-40 z-30'>
        <img
          className='h-60 w-60'
          src='/genshin-imgs/lumine-chibi-coconut.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default Body
