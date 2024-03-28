import "./App.scss";
import NavBar from "./Components/Navbar/Navbar";

import CardsList from "./Components/CardsList/CardsList";

function App() {
  return (
    <div className="app">
      <NavBar />
      <CardsList />
    </div>
  );
}

export default App;
