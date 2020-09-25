import React, { useEffect, useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Search from "./components/Search";
function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const resultArray = result.map((r) => {
          let charDeath = getDeathCount(r.name);
          console.log(charDeath);

          return r;
        });
        setCharacters(resultArray);
      });
  }, [query]);

  const getDeathCount = (name) => {
    name = name.replace(" ", "+");
    fetch(`https://www.breakingbadapi.com/api/death-count?name=${name}`)
      .then((res) => res.json())
      .then((result) => {
        return result[0].deathCount;
      });
  };

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Landing characters={characters} deathCount={(e) => getDeathCount} />
    </div>
  );
}

export default App;
