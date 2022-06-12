import React from "react";
import StarDivider from "./common/StarDivider";
import styled from "styled-components";

const StarBannerSectionStyled = styled.section`
    padding: 0 15%;

    @media (max-width: 990px) {
        padding: 0 5%;
    }
`;

const StarReviewsFormContainerStyled = styled.div``;

const StarReviewsFormStyled = styled.form``;

const StarReviewsFormInputsStyled = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 25px;

    @media (max-width: 620px) {
        flex-direction: column;
        gap: 15px;
    }
`;

const StarReviewsFormInputItemStyled = styled.div`
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

const StarReviewsFormTextareaStyled = styled.div`
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

const StarReviewsButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

const StarReviewsButtonStyled = styled.button`
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

const StarBannerUsersReviewsStyled = styled.section`
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

const StarReviewsAuthorStyled = styled.div`
    display: flex;
    align-items: center;
    line-height: 0.7;

    > span {
        font-weight: 400;
        font-size: 0.875rem;
        color: var(--dk-gray);
    }
`;

const StarReviewsCommentStyled = styled.div`
    margin-top: 15px;

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

const commnents = [
    {
        author: "Vanessa Castro",
        time: "02/01/2022",
        comment: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque cupiditate hic dignissimos sit dicta
    perspiciatis deserunt a est nesciunt laboriosam?`,
        id: 1,
    },
    {
        author: "Paulo Almeida",
        time: "03/04/2021",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque cupiditate hic dignissimos sit dicta
    perspiciatis deserunt a est nesciunt laboriosam?`,
        id: 2,
    },
    {
        author: "Monica Perira",
        time: "02/09/2022",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque cupiditate hic dignissimos sit dicta
    perspiciatis deserunt a est nesciunt laboriosam?`,
        id: 3,
    },
    {
        author: "Marcos Souza",
        time: "10/12/2021",
        comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Doloremque cupiditate hic dignissimos sit dicta
    perspiciatis deserunt a est nesciunt laboriosam?`,
        id: 4,
    },
];

const StarReviews = () => {
    return (
        <>
            <StarBannerSectionStyled>
                <StarReviewsFormContainerStyled>
                    <StarReviewsFormStyled onSubmit={() => {}}>
                        <StarReviewsFormInputsStyled>
                            <StarReviewsFormInputItemStyled>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" />
                            </StarReviewsFormInputItemStyled>

                            <StarReviewsFormInputItemStyled>
                                <label htmlFor="email">Your E-mail</label>
                                <input type="email" id="email" />
                            </StarReviewsFormInputItemStyled>
                        </StarReviewsFormInputsStyled>
                        <StarReviewsFormTextareaStyled>
                            <label htmlFor="review">Review</label>
                            <textarea
                                maxlength="200"
                                name="review"
                                id="review"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </StarReviewsFormTextareaStyled>
                        <StarReviewsButtonWrapperStyled>
                            <StarReviewsButtonStyled
                                type="button"
                                title="Enviar"
                            >
                                Publish
                            </StarReviewsButtonStyled>
                        </StarReviewsButtonWrapperStyled>
                    </StarReviewsFormStyled>
                </StarReviewsFormContainerStyled>
            </StarBannerSectionStyled>

            <StarDivider title="Reviews" />

            {commnents.map(({ author, time, comment }) => (
                <StarBannerUsersReviewsStyled>
                    <StarReviewsAuthorStyled>
                        <p>{author}</p>
                    </StarReviewsAuthorStyled>
                    <span>{time}</span>
                    <StarReviewsCommentStyled>
                        <p>{comment}</p>
                    </StarReviewsCommentStyled>
                </StarBannerUsersReviewsStyled>
            ))}
        </>
    );
};

export default StarReviews;
