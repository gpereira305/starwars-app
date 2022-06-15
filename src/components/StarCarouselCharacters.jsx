import React, { useContext } from "react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwapiContext } from "../SwapiContext";
import StarLoading from "./common/StarLoading";

const StarCharacterSectionStyled = styled.section`
    padding: 0 3%;
`;

const StarCharacterItem = styled.div`
    border-radius: 10px;
    width: 100%;

    > p {
        font-size: 0.875rem;
    }

    p {
        font-size: 0.75rem;
    }

    span {
        font-size: 0.625rem;
    }
`;

const StarCharacterWrapperStyled = styled.div`
    width: 333px;
    border-radius: 10px;
`;

const StarCharacterNameStyled = styled.div`
    background-color: var(--gold);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px 10px 0px 0px;

    > p {
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 500;
    }
`;

const StarCharacterInfoStyled = styled.div`
    height: 12vh;
    border: 1px solid var(--lg-gray);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
    border-top: none;
`;

const StarCharacterBirthStyled = styled.div`
    padding: 5px 20px 5px;
`;

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
                            // autoplay={{ delay: 4000 }}
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
