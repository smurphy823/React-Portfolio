import './App.css';
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio"

function App() {
  const [pages] = useState([
    {
      page: "About Me"
    },
    {
      page: "Contact"
    },
    {
      page: "Portfolio"
    },
  ])

  const [currentPage, setCurrentPage] = useState(pages [0])
  return (
    <div className="App">
     <Navbar pages = {pages} setCurrentPage = {setCurrentPage} currentPage = {currentPage}></Navbar>
     <Portfolio></Portfolio>
    </div>
  );
}

export default App;
