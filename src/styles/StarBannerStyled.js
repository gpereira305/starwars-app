import styled from "styled-components";

export const StarBannerSectionStyled = styled.section`
    display: flex;
    padding: 0 15%;
    margin-bottom: 5%;
    min-height: 50vh;
    position: relative;

    @media (max-width: 1252px) {
        flex-direction: column;
    }

    @media (max-width: 990px) {
        padding: 0 5%;
    }
`;

export const StarBannerDescriptionStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 30px;
`;

export const StarBannerTextStyled = styled.div`
    > h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 20px;
    }

    > p {
        padding-right: 35px;
        font-size: 0.875rem;
        font-weight: 400;
    }

    @media (max-width: 1252px) {
        margin-bottom: 50px;
    }
`;

export const StarBannerInfoStyled = styled.div`
    @media (max-width: 1252px) {
        display: flex;
        flex-direction: column;
        max-width: 35%;
        position: absolute;
        top: 40%;
    }

    @media (max-width: 990px) {
        display: unset;
        flex-direction: unset;
        max-width: unset;
        position: unset;
        top: unset;
        /* margin-bottom: 50px; */
    }
`;

export const StarBannerInfoReleaseStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    > h3 {
        font-size: 1rem;
        font-weight: 500;
    }

    > p {
        font-weight: 400;
        font-size: 0.875rem;
    }

    @media (max-width: 1252px) {
        flex-direction: column;
    }

    @media (max-width: 990px) {
        flex-direction: row;
    }
`;

export const StarBannerInfoProductionStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1252px) {
        flex-direction: column;
    }

    @media (max-width: 990px) {
        flex-direction: row;
    }
`;

export const StarBannerStaffStyled = styled.div`
    margin-bottom: 10px;

    > h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 2px;
    }

    > p {
        font-weight: 400;
        font-size: 0.875rem;
    }
`;

export const StarBannerImageStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    > img {
        width: 65%;
        border-radius: 15px;

        @media (max-width: 1490px) {
            width: 282px;
        }

        @media (max-width: 990px) {
            width: 100%;
        }
    }

    @media (max-width: 990px) {
        justify-content: center;
    }
`;
