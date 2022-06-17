import React, { useContext } from "react";

import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwapiContext } from "../SwapiContext";
import StarLoading from "./common/StarLoading";
import {
    StarCharacterSectionStyled,
    StarCharacterItem,
    StarCharacterWrapperStyled,
    StarCharacterNameStyled,
    StarCharacterInfoStyled,
    StarCharacterBirthStyled,
} from "../styles/StarCarouselCharacterStyled";

const StarCarouselCharacters = () => {
    const { people, loading } = useContext(SwapiContext);

    return (
        <>
            {!loading ? (
                <StarCharacterSectionStyled>
                    <div className="swiper-container-2">
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
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation={true}
                        >
                            {people.map(({ name, birth_year, height }, i) => (
                                <SwiperSlide key={i}>
                                    <StarCharacterItem>
                                        <StarCharacterWrapperStyled>
                                            <StarCharacterNameStyled>
                                                <p>{name}</p>
                                            </StarCharacterNameStyled>

                                            <StarCharacterInfoStyled>
                                                <StarCharacterBirthStyled>
                                                    <p>Data de Nascimento</p>
                                                    <span>
                                                        {birth_year ===
                                                        "unknown"
                                                            ? "Desconhecido"
                                                            : birth_year}
                                                    </span>
                                                </StarCharacterBirthStyled>
                                                <StarCharacterBirthStyled>
                                                    <p>Altura</p>
                                                    <span>{height}</span>
                                                </StarCharacterBirthStyled>
                                            </StarCharacterInfoStyled>
                                        </StarCharacterWrapperStyled>
                                    </StarCharacterItem>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </StarCharacterSectionStyled>
            ) : (
                <StarLoading />
            )}
        </>
    );
};

export default StarCarouselCharacters;
