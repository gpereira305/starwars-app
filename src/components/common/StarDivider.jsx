import React from "react";
import styled from "styled-components";

const StarDividerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 10vh;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: var(--black);
        right: 0;
    }
`;

const StarDividerTitle = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
    background-color: var(--white);
    position: absolute;
    z-index: 1;
    padding: 0 10px;
`;

const StarDivider = () => {
    return (
        <StarDividerItem>
            <StarDividerTitle>Movies</StarDividerTitle>
        </StarDividerItem>
    );
};

export default StarDivider;
