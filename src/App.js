import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import StarHomePage from "./pages/StarHomePage";
import StarDetailsPage from "./pages/StarDetailsPage";
import UserNotFound from "./pages/StarNotFound";
import { GlobalStyled } from "./styles/starStyled";
import StarHeader from "./components/StarHeader";
import "./styles/custom.css";
import StarFooter from "./components/StarFooter";

const AppContainer = styled.div`
    /* width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto 0; */
`;

function App() {
    return (
        <>
            <AppContainer>
                <BrowserRouter>
                    <StarHeader />
                    <Routes>
                        <Route exact path="/" element={<StarHomePage />} />
                        <Route
                            exact
                            path="/:movieId"
                            element={<StarDetailsPage />}
                        />
                        <Route path="*" element={<UserNotFound />} />
                    </Routes>
                    <StarFooter />
                </BrowserRouter>
            </AppContainer>
            <GlobalStyled />
        </>
    );
}

export default App;
