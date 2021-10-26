import React from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize"





export default function AboutMe() {
    return (
        <Collapsible className="absolute rounded w-full z-depth-5" accordion={false}>
            <CollapsibleItem
                expanded
                header={<h5 className="text-center">About Me</h5>}
                // icon={<Icon>filter_drama</Icon>}
                node="div"
                className="text-lg"
            >
                <p className="text-grey-900 mix-blend-dodge"> Hello World</p>
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header={<h5>Technologies</h5>}
                // icon={<Icon>place</Icon>}
                node="div"
                className="text-lg light"
            >
                <ul className="text-grey-900 mix-blend-dodge">
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>HTML/CSS/JS</li>
                </ul>
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header={<h5>Future Plans</h5>}
                // icon={<Icon>whatshot</Icon>}
                node="div"
                className="text-lg"
            >
                <p className="mix-blend-color-difference">Study Python and C#
                </p>
            </CollapsibleItem>
            <div className="backdrop-filter bg-opacity-40 bg-gray-300 backdrop-blur h-full z-index w-full block top-0 absolute">
            </div>
        </Collapsible>
    )
}