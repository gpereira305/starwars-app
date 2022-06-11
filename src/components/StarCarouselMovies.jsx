import React from "react";
import styled from "styled-components";
import StarDivider from "./common/StarDivider";
import StarCarouselItem from "./StarCarouselItem";
import { Link } from "react-router-dom";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/images/episode_1.jpg";
import image2 from "../assets/images/episode_2.webp";
import image3 from "../assets/images/episode_3.jpg";
import image4 from "../assets/images/episode_4.webp";
import image5 from "../assets/images/episode_5.jpg";
import image6 from "../assets/images/episode_6.jpg";

const posters = [
    {
        image: image1,
        movie: "Filme-1",
        release: "{{data_lançamento}}",
        director: "{{nome_diretor}}",
        id: 1,
    },
    {
        image: image2,
        movie: "Filme-2",
        release: "{{data_lançamento}}",
        director: "{{nome_diretor}}",
        id: 2,
    },
    {
        image: image3,
        movie: "Filme-3",
        release: "{{data_lançamento}}",
        director: "{{nome_diretor}}",
        id: 3,
    },
    {
        image: image4,
        movie: "Filme-4",
        release: "{{data_lançamento}}",
        director: "{{nome_diretor}}",
        id: 4,
    },
    {
        image: image5,
        movie: "Filme-5",
        release: "{{data_lançamento}}",
        director: "{{nome_diretor}}",
        id: 5,
    },
    {
        image: image6,
        movie: "Filme-6",
        release: "{{data_lançamento}}",
        director: "{{nome_diretor}}",
        id: 6,
    },
];

const StarCarousel = () => {
    return (
        <section>
            <StarDivider />
            <div className="swiper-container">
                <Swiper
                    modules={[
                        Autoplay,
                        Pagination,
                        Navigation,
                        EffectFade,
                        Parallax,
                    ]}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    speed={700}
                    grabCursor={true}
                    spaceBetween={40}
                    slidesPerView={3}
                    navigation={true}
                >
                    {posters.map(({ image, movie, release, director, id }) => (
                        <SwiperSlide key={id}>
                            <StarCarouselItem
                                image={image}
                                movie={movie}
                                release={release}
                                director={director}
                                id={id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default StarCarousel;
