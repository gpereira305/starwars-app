import React, { useContext } from "react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwapiContext } from "../SwapiContext";
import StarCarouselItem from "./StarCarouselItem";
import StarLoading from "./common/StarLoading";

const StarCarouselSectionStyled = styled.section`
    margin-bottom: 2%;
    min-height: 50vh;
`;

const StarCarousel = () => {
    const { movies, loading, query } = useContext(SwapiContext);

    return (
        <>
            {!loading ? (
                <StarCarouselSectionStyled>
                    <div className="swiper-container">
                        <Swiper
                            modules={[
                                Autoplay,
                                Pagination,
                                Navigation,
                                EffectFade,
                                Parallax,
                            ]}
                            // autoplay={{ delay: 4000 }}
                            loop={true}
                            speed={700}
                            grabCursor={true}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation={true}
                        >
                            {movies
                                .filter((m) => {
                                    if (query === "") {
                                        return m;
                                    } else if (
                                        m.title
                                            .toLowerCase()
                                            .includes(query.toLowerCase())
                                    ) {
                                        return m;
                                    }
                                })
                                .map(
                                    (
                                        {
                                            director,
                                            episode_id,
                                            release_date,
                                            title,
                                            img,
                                            id,
                                        },
                                        index
                                    ) => (
                                        <SwiperSlide key={index}>
                                            <StarCarouselItem
                                                director={director}
                                                episode_id={episode_id}
                                                release_date={release_date}
                                                title={title}
                                                img={img}
                                                index={index}
                                            />
                                        </SwiperSlide>
                                    )
                                )}
                        </Swiper>
                    </div>
                </StarCarouselSectionStyled>
            ) : (
                <StarCarouselSectionStyled>
                    <StarLoading />
                </StarCarouselSectionStyled>
            )}
        </>
    );
};

export default StarCarousel;
