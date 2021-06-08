import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function PageToggle(props) {
    const render = () => {
    if (props.currentPage.page === "About Me") {
        return <About></About>
    }else if (props.currentPage.page === "Contact") {
      return <Contact></Contact>
    }else if (props.currentPage.page === "Portfolio") {
        return <Portfolio></Portfolio>
    }else {
        return <About></About>
    }}

    return (
        <div>
            <h1>
                {props.currentPage.page}
            </h1>
            {render ()}
        </div>
    )
}

export default PageToggle;