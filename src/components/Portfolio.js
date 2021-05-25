import React, {useState} from "react";

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

                ))
            }
        </div>
    )
}