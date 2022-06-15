import React, { useEffect, useState } from "react";
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
    /* margin-top: 15px; */

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

const StarReviews = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");
    const [comment, setComment] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: name,
            email: email,
            review: review,
        };
        if (!name || !email || !review) {
            window.alert("Preencha os campos vazios !");
            return;
        } else {
            localStorage.setItem(
                "comment",
                JSON.stringify([newItem, ...comment])
            );
            setComment([newItem, ...comment]);
        }

        setName("");
        setEmail("");
        setReview("");
    };

    useEffect(() => {
        const savedComment = JSON.parse(localStorage.getItem("comment"));
        if (savedComment) {
            setComment(savedComment);
        }
    }, []);
    console.log(comment);
    return (
        <>
            <StarBannerSectionStyled>
                <StarReviewsFormContainerStyled>
                    <StarReviewsFormStyled onSubmit={handleSubmit}>
                        <StarReviewsFormInputsStyled>
                            <StarReviewsFormInputItemStyled>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </StarReviewsFormInputItemStyled>

                            <StarReviewsFormInputItemStyled>
                                <label htmlFor="email">Your E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </StarReviewsFormInputItemStyled>
                        </StarReviewsFormInputsStyled>
                        <StarReviewsFormTextareaStyled>
                            <label htmlFor="review">Review</label>
                            <textarea
                                maxLength="200"
                                name="review"
                                id="review"
                                cols="30"
                                rows="10"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            ></textarea>
                        </StarReviewsFormTextareaStyled>
                        <StarReviewsButtonWrapperStyled>
                            <StarReviewsButtonStyled
                                type="submit"
                                title="Enviar"
                            >
                                Publish
                            </StarReviewsButtonStyled>
                        </StarReviewsButtonWrapperStyled>
                    </StarReviewsFormStyled>
                </StarReviewsFormContainerStyled>
            </StarBannerSectionStyled>
            {comment.length > 0 && (
                <StarDivider title="Reviews" className="fade-in" />
            )}
            <StarBannerUsersReviewsStyled className="fade-in">
                {comment.map(({ name, email, review }, i) => (
                    <div style={{ marginBottom: "20px" }} key={i}>
                        <StarReviewsAuthorStyled>
                            <p>{name}</p>
                        </StarReviewsAuthorStyled>
                        <span>{email}</span>
                        <StarReviewsCommentStyled>
                            <p>{review}</p>
                        </StarReviewsCommentStyled>
                    </div>
                ))}
            </StarBannerUsersReviewsStyled>
        </>
    );
};

export default StarReviews;
