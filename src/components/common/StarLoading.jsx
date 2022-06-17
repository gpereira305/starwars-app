import React from "react";
import LoadingIcons from "react-loading-icons";
import styled from "styled-components";

const StarLoadingIconStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 40vh;

    p {
        margin-top: 10px;
    }
`;

const StarLoading = () => {
    return (
        <StarLoadingIconStyled>
            <LoadingIcons.Oval
                stroke="#FFC700"
                width={"20%"}
                height="20%"
                speed={2.5}
            />
            <p>Carregando, aguarde...</p>
        </StarLoadingIconStyled>
    );
};

export default StarLoading;
