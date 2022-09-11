import "./normalize.scss";
import './App.scss';

// components;
import Navbar from "./components/navbar/Navbar.jsx"
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Header />
    </>
  );
}

export default App;
