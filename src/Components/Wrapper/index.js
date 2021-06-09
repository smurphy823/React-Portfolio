import React from 'react'
import "../styles/wrapper.css";

function Wrapper (props) {
    return (
        <>
        <body style={StyleSheet.Image}>
         <main className="container-fluid flex-fill" style={StyleSheet.Wrapper}>
           {props.children}
       </main>
       </body>
        </>
    )
}

export default Wrapper 