import "./App.scss";
import NavBar from "./Components/Navbar/Navbar";
import { useState } from "react";
import CardsList from "./Components/CardsList/CardsList";
import { FormEvent } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [beers, setBeers] = useState<Beer[]>();
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const handleCheckboxChange = (name: string) => {
    setCheckedBoxes((prevCheckedBoxes) => [...prevCheckedBoxes, name]);
    console.log(checkedBoxes);
  };
  const handleCheckboxChangeRemove = (name: string) => {
    setCheckedBoxes((prevCheckedBoxes) =>
      prevCheckedBoxes.filter((item) => item !== name)
    );
    console.log(checkedBoxes);
  };

  return (
    <div className="app">
      <NavBar
        checkedBoxes={checkedBoxes}
        searchTerm={searchTerm}
        handleInput={handleInput}
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChangeRemove={handleCheckboxChangeRemove}
      />
      <CardsList searchTerm={searchTerm} checkedBoxes={checkedBoxes} />
    </div>
  );
}

export default App;
