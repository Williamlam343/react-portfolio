import React from "react";


function NavBar(props) {


    return (
        <>
            <nav className="teal accent-4" >
                <div className="nav-wrapper ml10">
                    <a href="#!" className="brand-logo"><i className="material-icons">filter_drama</i>{props.name}</a>
                    <ul className="right hide-on-med-and-down">

                        {props.navItem.map(item => <li><a href="#!">{item}</a></li>)}

                    </ul>
                </div>
            </nav>
        </>
    )
}



export default NavBar;