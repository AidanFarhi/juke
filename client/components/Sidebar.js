import React from 'react'

export default function Sidebar(props) {
    return(
        <div id='sidebar'>
            <img src='juke.svg' id='logo'/>
            <section>
                <h4>
                    <a onClick={()=> props.method()}>ALBUMS</a>
                </h4>
            </section>
        </div>
    )
}