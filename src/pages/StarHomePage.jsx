import React from "react";
import styled from "styled-components";
import StarDivider from "../components/common/StarDivider";
import StarCarouselCharacters from "../components/StarCarouselCharacters";
import StarCarouselMovies from "../components/StarCarouselMovies";

const StarMain = styled.main`
    padding: 0 3%;

    @media (max-width: 990px) {
        padding: 5%;
    }
`;

const StarHomePage = () => {
    return (
        <StarMain>
            <StarDivider title="Movies" />
            <StarCarouselMovies />
            <StarDivider title="Characters" />
            <StarCarouselCharacters />
        </StarMain>
    );
};

export default StarHomePage;
