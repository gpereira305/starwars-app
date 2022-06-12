import React from "react";
import styled from "styled-components";
import StarDivider from "../components/common/StarDivider";
import StarBanner from "../components/StarBanner";
import StarCarouselCharacters from "../components/StarCarouselCharacters";
import StarReviews from "../components/StarReviews";

const StarMain = styled.main`
    padding: 0 10%;

    @media (max-width: 990px) {
        padding: 5%;
    }
`;
const StarDetailsPage = () => {
    return (
        <StarMain>
            <StarDivider title="Nome do filme" />
            <StarBanner />
            <StarDivider title="Character of the movie" />
            <div className="swiper-container-3">
                <StarCarouselCharacters />
            </div>
            <StarDivider title="Write a review" />
            <StarReviews />
        </StarMain>
    );
};

export default StarDetailsPage;
