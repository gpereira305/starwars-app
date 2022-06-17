import styled from "styled-components";

export const StarBannerSectionStyled = styled.section`
    padding: 0 15%;

    @media (max-width: 990px) {
        padding: 0 5%;
    }
`;

export const StarReviewsFormContainerStyled = styled.div``;

export const StarReviewsFormStyled = styled.form``;

export const StarReviewsFormInputsStyled = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 25px;

    @media (max-width: 620px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const StarReviewsFormInputItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    > label {
        margin-bottom: 10px;
    }

    > input {
        border: 1px solid var(--lg-gray2);
        height: 40px;
        border-radius: 10px;
        padding: 0 10px;
        font-size: 1rem;
        outline: none;
        transition: all ease-in 0.3s;
        color: var(--dk-gray);

        &:focus {
            border: 1px solid var(--gold);
        }
    }
`;

export const StarReviewsFormTextareaStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    > label {
        margin-bottom: 10px;
    }

    > textarea {
        border: 1px solid var(--lg-gray2);
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 1rem;
        outline: none;
        transition: all ease-in 0.3s;
        color: var(--dk-gray);
        resize: none;

        &:focus {
            border: 1px solid var(--gold);
        }
    }
`;

export const StarReviewsButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const StarReviewsButtonStyled = styled.button`
    background-color: var(--green);
    border: 1px solid var(--green);
    width: 130px;
    height: 40px;
    font-family: var(--fira);
    border-radius: 10px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
`;

export const StarBannerUsersReviewsStyled = styled.section`
    padding: 0 15%;
    margin-bottom: 2%;

    span {
        font-size: 0.75rem;
        color: var(--dk-gray);
    }

    @media (max-width: 990px) {
        padding: 0 5%;
    }
`;

export const StarReviewsAuthorStyled = styled.div`
    display: flex;
    align-items: center;
    line-height: 0.7;

    > span {
        font-weight: 400;
        font-size: 0.875rem;
        color: var(--dk-gray);
    }
`;

export const StarReviewsCommentStyled = styled.div`
    > h3 {
        font-size: 1rem;
        font-weight: 500;
    }

    > p {
        font-weight: 400;
        font-size: 0.875rem;
        color: var(--dk-gray);
        font-style: italic;
    }
`;
