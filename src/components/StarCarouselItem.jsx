import React from "react";
import { Link } from "react-router-dom";
import {
    CarouselItemWrapperStyled,
    CarouselItemImgStyled,
    CarouselItemContentStyled,
    CarouselItemNameStyled,
    CarouselItemReleaseStyled,
    CarouselItemDirectorStyled,
} from "../styles/StarCarouselItem";

const StarCarouselItem = ({
    director,
    release_date,
    img,
    title,
    index,
    episode_id,
}) => {
    // função para iniciar no topo da página
    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <CarouselItemWrapperStyled>
            <Link to={`/${index + 1}`} onClick={jumpToTop}>
                <CarouselItemImgStyled src={img} alt={title} title={title} />

                <CarouselItemContentStyled>
                    <CarouselItemNameStyled>
                        <p>{title}</p>
                    </CarouselItemNameStyled>

                    <CarouselItemReleaseStyled>
                        <p>Data de Lançamento</p>
                        <span>
                            {release_date?.split("-")?.reverse()?.join("/")}
                        </span>
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
