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
        width: 75%;
        height: 1px;
        background-color: var(--black);

        @media (max-width: 990px) {
            width: 90%;
        }
    }
`;

const StarDividerTitle = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
    background-color: var(--white);
    position: absolute;
    z-index: 1;
    padding: 0 10px;

    @media (max-width: 752px) {
        font-size: 1.2rem;
    }
`;

const StarDivider = ({ title }) => {
    return (
        <StarDividerItem>
            <StarDividerTitle>{title}</StarDividerTitle>
        </StarDividerItem>
    );
};

export default StarDivider;
