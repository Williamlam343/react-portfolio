import React from "react";
import { Footer, Icon } from "react-materialize";



export default function MyFooter() {
    return (
        <Footer
            id="contacts"
            className="grey darken-4 text-md "
            copyrights={
                <div className="flex justify-center">
                    <p>
                        Built using React, Materialize, Tailwinds, Unsplash API
                    </p>
                </div>
            }

        >

            <p className="text-2xl white-text">
                My contacts :
            </p>
            <ul>
                <li> <a className="grey-text text-lighten-3" href="https://github.com/Williamlam343" target="_blank"><img className="inline m-1" src={require("../../img/GitHub-Mark-Light-32px.png").default} /> GitHub</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/william-lam-115325218/" target="_blank"><img className="inline m-1" src={require("../../img/linkedin-3-32.png").default} /> LinkedIn</a></li>
                <li><a className="grey-text text-lighten-3" href="mailto:Williamlam343@gmail.com" target="_blank"> <Icon className="inline m-1 text-4xl" >email</Icon> <span className="relative bottom-3">Williamlam343@gmail.com</span> </a></li>
            </ul>


        </Footer >
    )
}