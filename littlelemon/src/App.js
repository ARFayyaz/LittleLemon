import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <ScrollToAnchor />
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
