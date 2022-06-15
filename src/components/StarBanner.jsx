import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviePoster from "../assets/images/episode_1.jpg";
import styled from "styled-components";
import { SwapiContext } from "../SwapiContext";
import { URL_FILMS } from "../api";

const StarBannerSectionStyled = styled.section`
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

const StarBannerDescriptionStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 30px;
`;

const StarBannerTextStyled = styled.div`
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

const StarBannerInfoStyled = styled.div`
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

const StarBannerInfoReleaseStyled = styled.div`
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

const StarBannerInfoProductionStyled = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1252px) {
        flex-direction: column;
    }

    @media (max-width: 990px) {
        flex-direction: row;
    }
`;

const StarBannerStaffStyled = styled.div`
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

const StarBannerImageStyled = styled.div`
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

const StarBanner = ({ movie }) => {
    const { opening_crawl, producer, director, release_date, title, img } =
        movie;

    return (
        <StarBannerSectionStyled>
            <StarBannerDescriptionStyled>
                <StarBannerTextStyled>
                    <h3>Descrição</h3>
                    <p>{opening_crawl}</p>
                </StarBannerTextStyled>

                <StarBannerInfoStyled>
                    <StarBannerInfoReleaseStyled>
                        <h3>Data de lançamento</h3>
                        <p>{release_date?.split("-")?.reverse()?.join("/")}</p>
                    </StarBannerInfoReleaseStyled>

                    <StarBannerInfoProductionStyled>
                        <StarBannerStaffStyled>
                            <h3>Diretor</h3>
                            <p>{director}</p>
                        </StarBannerStaffStyled>
                        <StarBannerStaffStyled>
                            <h3>Produtor</h3>
                            <p>{producer}</p>
                        </StarBannerStaffStyled>
                    </StarBannerInfoProductionStyled>
                </StarBannerInfoStyled>
            </StarBannerDescriptionStyled>

            <StarBannerImageStyled>
                <img src={img} alt={title} title={title} />
            </StarBannerImageStyled>
        </StarBannerSectionStyled>
    );
};

export default StarBanner;
