import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Master from "./components/master/Master";
import About from "./components/about/About";
import Ega from "./components/ega/Ega";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Master />
      <About />
      <Ega />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
