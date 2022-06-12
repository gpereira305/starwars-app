import React from "react";
import styled from "styled-components";

const StarFooterStyled = styled.footer`
    height: 15vh;
    background-color: #f5f3f3;
    margin-top: 30px;
`;

const StarFooterTextStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;

    > small {
        margin-bottom: 10px;
    }
`;

const StarFooter = () => {
    const footerDate = new Date().getFullYear();

    return (
        <StarFooterStyled>
            <StarFooterTextStyled>
                <small>
                    &copy; {footerDate} Star Wars Movie App | All Rights
                    Reserved
                </small>
            </StarFooterTextStyled>
        </StarFooterStyled>
    );
};

export default StarFooter;
