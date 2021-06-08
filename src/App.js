import './App.css';
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import PageToggle from "./components/PageToggle"

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

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <div className="App">
     <Navbar pages = {pages} setCurrentPage = {setCurrentPage} currentPage = {currentPage}></Navbar>
    <PageToggle currentPage = {currentPage}></PageToggle>
    </div>
  );
}

export default App;
