import './App.css';
import React, {useState} from "react";
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
