import React from "react";
import styled from "styled-components";
import StarCarouselCharacters from "../components/StarCarouselCharacters";
import StarCarouselMovies from "../components/StarCarouselMovies";

const StarMain = styled.main`
    padding: 0 10%;
`;

const StarHomePage = () => {
    return (
        <StarMain>
            <StarCarouselMovies />
            <StarCarouselCharacters />
        </StarMain>
    );
};

export default StarHomePage;
