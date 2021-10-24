import React from 'react';


export default function Background({ photo }) {
    const { user, urls } = photo;

    return (
        <>
            <img className="" src={urls.raw
                + "&w=1500&dpr=2"} />
            <a
                className=""
                target="_blank"
                href={`https://unsplash.com/@${user.username}`}
            >
                <span className="absolute right-1 top-0 mix-blend-color-difference text-lg"> Photo by: {user.name} </span>
            </a>
        </>
    )
}