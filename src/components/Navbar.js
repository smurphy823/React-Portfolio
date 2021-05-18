import React, {useEffect} from "react"

function Navbar(props) {
    useEffect(() => {
        document.title = props.currentPage.page
    })

    return(
        <nav>
            <ul>
                {props.pages.map(page => (
                    <li key = {page.page}> 
                    <span onClick = {() => props.setCurrentPage(page)}>
                    {page.page}
                    </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar