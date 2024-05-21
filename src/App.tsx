import "./App.scss";
import NavBar from "./Components/Navbar/Navbar";
import { useState } from "react";
import CardsList from "./Components/CardsList/CardsList";
import { FormEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardOverview from "./Components/CardOverview/CardOverview";
import beers from "./assets/data/beers";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const handleCheckboxChange = (name: string) => {
    setCheckedBoxes((currentCheckedBoxes) => [...currentCheckedBoxes, name]);
  };
  const handleCheckboxChangeRemove = (name: string) => {
    setCheckedBoxes((prevCheckedBoxes) =>
      prevCheckedBoxes.filter((item) => item !== name)
    );
  };

  return (
    <BrowserRouter basename="/">
      <div className="app">
        <NavBar
          checkedBoxes={checkedBoxes}
          searchTerm={searchTerm}
          handleInput={handleInput}
          handleCheckboxChange={handleCheckboxChange}
          handleCheckboxChangeRemove={handleCheckboxChangeRemove}
        />
        <Routes>
          <Route
            path="/"
            element={
              <CardsList searchTerm={searchTerm} checkedBoxes={checkedBoxes} />
            }
          ></Route>
          <Route
            path="/beer/:beerId"
            element={<CardOverview beers={beers} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
