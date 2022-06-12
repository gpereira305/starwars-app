import React from "react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
    {
        character: "{{name}}",
        birth: "{{birth_year}}",
        height: "{{height}}",
        id: 1,
    },
    {
        character: "{{name}}",
        birth: "{{birth_year}}",
        height: "{{height}}",
        id: 2,
    },
    {
        character: "{{name}}",
        birth: "{{birth_year}}",
        height: "{{height}}",
        id: 3,
    },
    {
        character: "{{name}}",
        birth: "{{birth_year}}",
        height: "{{height}}",
        id: 4,
    },
    {
        character: "{{name}}",
        birth: "{{birth_year}}",
        height: "{{height}}",
        id: 5,
    },
    {
        character: "{{name}}",
        birth: "{{birth_year}}",
        height: "{{height}}",
        id: 6,
    },
];

const StarCharacterSectionStyled = styled.section`
    margin-bottom: 3%;
    padding: 0 3%;
`;

const StarCarouselCharacters = () => {
    return (
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
                    {cards.map(({ character, birth, height, id }) => (
                        <SwiperSlide key={id}>
                            <StarCarouselCharacterItem
                                character={character}
                                birth={birth}
                                height={height}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </StarCharacterSectionStyled>
    );
};

// styles
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

const StarCharacterBirthStyled = styled.div`
    padding: 5px 20px 5px;
    border-right: 1px solid var(--lg-gray);
    border-left: 1px solid var(--lg-gray);
`;

const StarCharacterHeightStyled = styled.div`
    padding: 5px 20px 20px;
    border-top: none !important;
    border: 1px solid var(--lg-gray);
    border-radius: 0 0 10px 10px;
`;

export const StarCarouselCharacterItem = ({ character, birth, height }) => {
    return (
        <StarCharacterItem>
            <StarCharacterNameStyled>
                <p>{character}</p>
            </StarCharacterNameStyled>
            <StarCharacterBirthStyled>
                <p>Data de Nascimento</p>
                <span>{birth}</span>
            </StarCharacterBirthStyled>
            <StarCharacterHeightStyled>
                <p>Altura</p>
                <span>{height}</span>
            </StarCharacterHeightStyled>
        </StarCharacterItem>
    );
};

export default StarCarouselCharacters;
