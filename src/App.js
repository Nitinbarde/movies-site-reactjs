import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Category />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
