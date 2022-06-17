import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SwapiContext } from "../SwapiContext";
import {
    StarHeaderContainer,
    StarHeaderNav,
    StarHeaderNavInput,
    StarHeaderNavTitle,
} from "../styles/StarHeaderStyled";

const StarHeader = () => {
    const { query, setQuery } = useContext(SwapiContext);

    return (
        <StarHeaderContainer>
            <StarHeaderNav>
                <StarHeaderNavTitle>
                    <Link to={"/"} title="Logo | Home">
                        <h1>Star Wars Universe</h1>
                    </Link>
                </StarHeaderNavTitle>
                <StarHeaderNavInput>
                    <input
                        type="search"
                        placeholder="Pesquisar Personagens"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </StarHeaderNavInput>
            </StarHeaderNav>
        </StarHeaderContainer>
    );
};

export default StarHeader;
