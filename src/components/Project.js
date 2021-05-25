import React from "react";

function Project(props) {
    return(
        <div key = {props.homework.title}>
            {/* <img src = {require(`../assets/imgs/${props.homework.title}.jpg`)}/> */}
            <div>
                <h2>
                    {props.homework.title}
                </h2>
                <p>
                    {props.homework.description}
                </p>
                <a href = {props.homework.deployed}>
                    Deployed link
                </a>
                <a href = {props.homework.github}>
                    Github link
                </a>
            </div>
        </div>
    )
}

export default Project;