import "./App.scss";
import NavBar from "./Components/Navbar/Navbar";
import { useState } from "react";
import CardsList from "./Components/CardsList/CardsList";
import { FormEvent } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const handleCheckboxChange = (name: string) => {
    setCheckedBoxes((prevCheckedBoxes) => [...prevCheckedBoxes, name]);
  };
  const handleCheckboxChangeRemove = (name: string) => {
    setCheckedBoxes((prevCheckedBoxes) =>
      prevCheckedBoxes.filter((item) => item !== name)
    );
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
