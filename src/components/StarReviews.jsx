import React, { useEffect, useState } from "react";
import StarDivider from "./common/StarDivider";
import {
    StarBannerSectionStyled,
    StarBannerUsersReviewsStyled,
    StarReviewsAuthorStyled,
    StarReviewsButtonStyled,
    StarReviewsButtonWrapperStyled,
    StarReviewsCommentStyled,
    StarReviewsFormContainerStyled,
    StarReviewsFormInputItemStyled,
    StarReviewsFormInputsStyled,
    StarReviewsFormStyled,
    StarReviewsFormTextareaStyled,
} from "../styles/StarReviewsStyled";

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
