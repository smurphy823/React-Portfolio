import React from "react";

function Project(props) {
    return(
        <div key = {props.title}>
            {/* <img src = {require(`../assets/homeworks/${props.title}.jpg`)}/> */}
            <div>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
                <a href = {props.deployed}>
                    Deployed link
                </a>
                <a href = {props.github}>
                    Github link
                </a>
            </div>
        </div>
    )
}

export default Project;