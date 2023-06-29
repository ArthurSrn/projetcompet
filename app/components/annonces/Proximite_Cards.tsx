"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Avis from "../Avis";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CardAnnonce from "./Cards_annonce";
import Cards_position, { CardBoucherie, CardEpicerie, CardFromagerie } from "./Cards_position";
import MyLogement from "../Mylogements";



// import required modules

export default function Swipper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}

                className=""
            >
                <SwiperSlide><Cards_position /></SwiperSlide>
                <SwiperSlide><CardEpicerie /></SwiperSlide>
                <SwiperSlide><CardBoucherie /></SwiperSlide>
                <SwiperSlide><CardFromagerie /></SwiperSlide>

            </Swiper>
        </>
    );
}


export const SwipperSearch: React.FC = () => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={200}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}

                className=""
            >
                <SwiperSlide><MyLogement /></SwiperSlide>
                <SwiperSlide><MyLogement /></SwiperSlide>



            </Swiper>
        </>
    );
}


export const SwipperSearchAnnonce: React.FC = () => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={200}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}

                className=""
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>



            </Swiper>
        </>
    );
}


export function Navigateur() {


    return (
        <>
            <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
                <SwiperSlide><Avis /></SwiperSlide>
                <SwiperSlide><Avis /></SwiperSlide>

            </Swiper>
        </>
    );
}