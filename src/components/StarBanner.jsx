import React from "react";
import {
    StarBannerSectionStyled,
    StarBannerDescriptionStyled,
    StarBannerTextStyled,
    StarBannerInfoStyled,
    StarBannerInfoReleaseStyled,
    StarBannerInfoProductionStyled,
    StarBannerStaffStyled,
    StarBannerImageStyled,
} from "../styles/StarBannerStyled";

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
