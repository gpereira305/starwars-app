import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./styles/custom.css";
import { GlobalStyled } from "./styles/starGlobalStyled";
import StarHomePage from "./pages/StarHomePage";
import StarDetailsPage from "./pages/StarDetailsPage";
import StarHeader from "./components/StarHeader";
import StarFooter from "./components/StarFooter";
import { URL_FILMS, URL_PEOPLE } from "./api";
import { SwapiContext } from "./SwapiContext";
import { images } from "./utils";
import axios from "axios";

const AppContainer = styled.div``;

function App() {
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchFilms() {
            const res = await axios.get(URL_FILMS);
            const data = await res.data.results;

            // desestruturação dos objetos que serão utilizados
            const database = await data.map(
                ({
                    director,
                    episode_id,
                    release_date,
                    title,
                    producer,
                    opening_crawl,
                    characters,
                }) => ({
                    director,
                    episode_id,
                    release_date,
                    title,
                    producer,
                    opening_crawl,
                    characters,
                })
            );
            // inserççao das imagens em cada objeto de filme
            const movieInfo = database.map((obj) => {
                const addedImg = images.find((el) => el.id === obj.episode_id);
                if (addedImg) {
                    obj.img = addedImg.img;
                }
                return obj;
            });
            localStorage.setItem("movies", JSON.stringify(movieInfo));
            setMovies(movieInfo);
            setLoading(false);
        }

        async function fetchPeople() {
            const res = await axios.get(URL_PEOPLE);
            const data = await res.data.results;
            localStorage.setItem("people", JSON.stringify(data));
            setPeople(data);
            setLoading(false);
        }

        fetchFilms();
        fetchPeople();
    }, []);

    useEffect(() => {
        const localFilms = JSON.parse(localStorage.getItem("movies"));
        const localPeople = JSON.parse(localStorage.getItem("people"));
        if (localFilms) {
            setMovies(localFilms);
            setLoading(false);
        } else if (localPeople) {
            setPeople(localPeople);
            setLoading(false);
        }
    }, []);

    return (
        <>
            <AppContainer>
                <SwapiContext.Provider
                    value={{
                        movies,
                        people,
                        loading,
                        setLoading,
                        query,
                        setQuery,
                    }}
                >
                    <BrowserRouter>
                        <StarHeader />
                        <Routes>
                            <Route exact path="/" element={<StarHomePage />} />
                            <Route
                                exact
                                path="/:episode_id"
                                element={<StarDetailsPage />}
                            />
                        </Routes>
                        <StarFooter />
                    </BrowserRouter>
                </SwapiContext.Provider>
            </AppContainer>
            <GlobalStyled />
        </>
    );
}

export default App;
