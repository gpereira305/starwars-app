import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { URL_FILMS } from "../api";
import StarDivider from "../components/common/StarDivider";
import StarBanner from "../components/StarBanner";
import StarCarouselCharacters from "../components/StarCarouselCharacters";
import StarReviews from "../components/StarReviews";
import { SwapiContext } from "../SwapiContext";
import { images } from "../utils";
import axios from "axios";

const StarMain = styled.main`
    padding: 0 10%;

    @media (max-width: 990px) {
        padding: 5%;
    }
`;

const StarDetailsPage = () => {
    const [movie, setMovie] = useState([]);
    const { movies, setLoading } = useContext(SwapiContext);
    const params = useParams();

    const getDetails = async () => {
        const res = await fetch(`${URL_FILMS}/${params.episode_id}/`);
        let data = await res.json();

        const addedImg = images.find((el) => el.id === data.episode_id);
        if (addedImg) {
            data.img = addedImg.img;
        }
        setMovie(data);
        setLoading(false);
        return data;
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <StarMain>
            <StarDivider title={movie?.title} />
            <StarBanner movie={movie} />
            <StarDivider title="Character of the movie" />
            <div className="swiper-container-3">
                <StarCarouselCharacters />
            </div>
            <StarDivider title="Write a review" />
            <StarReviews />
        </StarMain>
    );
};

export default StarDetailsPage;
