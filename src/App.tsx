import "./App.scss";
import NavBar from "./Components/Navbar/Navbar";
import { useState } from "react";
import CardsList from "./Components/CardsList/CardsList";
import { FormEvent } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  return (
    <div className="app">
      <NavBar searchTerm={searchTerm} handleInput={handleInput} />
      <CardsList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
