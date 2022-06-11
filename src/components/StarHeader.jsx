import React from "react";
import styled from "styled-components";

const StarHeaderContainer = styled.header`
    background-color: var(--black);
    height: 10vh;
`;

const StarHeaderNav = styled.nav`
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 10%;
    align-items: center;

    @media (max-width: 660px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const StarHeaderNavTitle = styled.div`
    h1 {
        color: var(--white);
        font-weight: 600;
        font-size: 2rem;

        @media (max-width: 860px) {
            font-size: 1.5rem;
        }
    }
`;

const StarHeaderNavInput = styled.div`
    @media (max-width: 660px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    input {
        width: 288px;
        height: 30px;
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 5px 10px;
        font-size: 0.8rem;
        position: relative;

        &::placeholder {
            color: var(--dk-gray);
            font-family: var(--fira);
            position: absolute;
            right: 20px;
        }

        @media (max-width: 860px) {
            width: 250px;
        }

        @media (max-width: 660px) {
            width: 80%;
        }
    }
`;

const StarHeader = () => {
    return (
        <StarHeaderContainer>
            <StarHeaderNav>
                <StarHeaderNavTitle>
                    <h1>Star Wars Universe</h1>
                    {/* <h1 className="mobile">S. W. U.</h1> */}
                </StarHeaderNavTitle>
                <StarHeaderNavInput>
                    <input type="search" placeholder="Pesquisar Personagens" />
                </StarHeaderNavInput>
            </StarHeaderNav>
        </StarHeaderContainer>
    );
};

export default StarHeader;