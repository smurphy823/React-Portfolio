import React, {useState} from "react";
import Project from "./Project"

function Portfolio() {
    const [homeworks] = useState([
        {
            title: "NoteTaker",
            deployed: "https://smurphy823.github.io/NoteTaker/",
            github: "https://github.com/smurphy823/NoteTaker",
            description: "This is a Note Taker"
        },
    ])

    return(
        <div>
            {
                homeworks.map((homework, id) => (
                <Project homework = {homework} key = {id}>

                </Project>
                ))
            }
        </div>
    )
}

export default Portfolio;