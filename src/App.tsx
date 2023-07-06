import { useState, useEffect } from "react";
import { GlobalStyles } from "./assets/GlobalStyles";
import Header from "./components/Header/Header";
import styled from "styled-components";
import searchIcon from "../src/assets/icon-search.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Reccomended/Home";
import Movies from "./components/Movies/Movies";
import TVSeries from "./components/TVSeries/TVSeries";

import data from "./data.json";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);
  const [filtered, setFiltered] = useState(items);
  const [info, setInfo] = useState(items);
  console.log(search);
  const addBookmark = (title: string) => {
    setItems(
      items.map((elem) => {
        if (elem.title === title && elem.isBookmarked === true) {
          return { ...elem, isBookmarked: false };
        } else if (elem.title === title && elem.isBookmarked === false) {
          return { ...elem, isBookmarked: true };
        } else {
          return elem;
        }
      })
    );
  };

  const handleSearch = (e: string) => {
    setSearch(e);

    const num = e.length;
    const filteredArr = items.filter(
      (elem) => elem.title.toLowerCase().slice(0, num) === e
    );
    setFiltered(filteredArr);
  };

  useEffect(() => {
    if (search === "") {
      setInfo(items);
    } else if (search !== "") {
      setInfo(filtered);
    }
  }, [search, items, filtered]);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <main>
          <SearchBar>
            <img src={searchIcon} alt="search" />
            <Input
              onChange={(e) => handleSearch(e.target.value)}
              value={search}
              placeholder="Search for movies or TV series"
            />
          </SearchBar>

          <Routes>
            <Route
              path="/"
              element={<Home info={info} handler={addBookmark} />}
            />
            <Route
              path="movies"
              element={<Movies info={info} handler={addBookmark} />}
            />
            <Route
              path="TVSeries"
              element={<TVSeries info={info} handler={addBookmark} />}
            />
            <Route
              path="bookmarks"
              element={<Bookmarks info={info} handler={addBookmark} />}
            />
          </Routes>
        </main>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  @media screen and (min-width: 1050px) {
    display: flex;
  }
`;

const SearchBar = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 0 0 16px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: Outfit;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: white;

  width: 214px;
  &::placeholder {
    opacity: 0.5;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 348px;
  }
`;
