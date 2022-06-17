import styled from "styled-components";

export const CarouselItemWrapperStyled = styled.div`
    position: relative;
    width: 330px;
    margin: auto;
    margin-right: 0;
    margin-left: 0;

    & a {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 100%;
    }

    @media (max-width: 1264px) {
        max-width: none;
        width: 350px;
    }
`;

export const CarouselItemImgStyled = styled.img`
    height: 48vh;
    min-width: 289px;
    width: 100%;
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

export const CarouselItemContentStyled = styled.div`
    width: 100%;
    min-width: 290px;
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

export const CarouselItemNameStyled = styled.div`
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

export const CarouselItemReleaseStyled = styled.div`
    padding: 5px 20px 5px;
    border-right: 1px solid var(--lg-gray);
    border-left: 1px solid var(--lg-gray);
`;

export const CarouselItemDirectorStyled = styled.div`
    padding: 5px 20px 20px;
    border: 1px solid var(--lg-gray);
    border-top: 0;
    border-radius: 0px 0px 10px 10px;
`;
