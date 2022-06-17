import styled from "styled-components";

export const StarCharacterSectionStyled = styled.section``;

export const StarCharacterItem = styled.div`
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

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

export const StarCharacterWrapperStyled = styled.div`
    width: 333px;
    border-radius: 10px;
`;

export const StarCharacterNameStyled = styled.div`
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

export const StarCharacterInfoStyled = styled.div`
    height: 12vh;
    border: 1px solid var(--lg-gray);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;
    border-top: none;
`;

export const StarCharacterBirthStyled = styled.div`
    padding: 5px 20px 5px;
`;
