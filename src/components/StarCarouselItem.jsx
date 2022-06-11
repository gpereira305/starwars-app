import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CarouselItemWrapperStyled = styled.div`
    position: relative;

    & a {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 100%;
    }
`;

const CarouselItemImgStyled = styled.img`
    width: 100%;
    height: 48vh;
    border-radius: 10px 10px 0 0;

    &::after {
        content: "Carregando...";
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        height: 48vh;
        background-color: var(--dark);
    }
`;

const CarouselItemContentStyled = styled.div`
    width: 100%;
    color: var(--dark);

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

const CarouselItemNameStyled = styled.div`
    background-color: var(--gold);
    padding: 10px 20px;
    display: flex;
    align-items: center;

    > p {
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 500;
    }
`;

const CarouselItemReleaseStyled = styled.div`
    padding: 5px 20px 5px;
    border-right: 1px solid var(--lg-gray);
    border-left: 1px solid var(--lg-gray);
`;

const CarouselItemDirectorStyled = styled.div`
    padding: 5px 20px 20px;
    border: 1px solid var(--lg-gray);
    border-top: 0;
    border-radius: 0px 0px 10px 10px;
`;

const StarCarouselItem = ({ image, movie, release, director, id }) => {
    return (
        <CarouselItemWrapperStyled>
            <Link to={`/${id}`}>
                <CarouselItemImgStyled src={image} alt={movie} title={movie} />

                <CarouselItemContentStyled>
                    <CarouselItemNameStyled>
                        <p>{movie}</p>
                    </CarouselItemNameStyled>

                    <CarouselItemReleaseStyled>
                        <p>Data de Lançamento</p>
                        <span>{release}</span>
                    </CarouselItemReleaseStyled>
                    <CarouselItemDirectorStyled>
                        <p>Diretor</p>
                        <span>{director}</span>
                    </CarouselItemDirectorStyled>
                </CarouselItemContentStyled>
            </Link>
        </CarouselItemWrapperStyled>
    );
};

export default StarCarouselItem;