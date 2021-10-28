import React from 'react';


export default function Background({ photo }) {
    const { user, urls } = photo;



    return (

        <div
            className="w-full z-index-10 h-auto min-h-full fixed bg-cover bg-fixed"
            style={{
                backgroundImage: `url("${urls.raw}+ &w=1500&dpr=2")`
            }}
        >
            <a
                className=""

                href={`https://unsplash.com/@${user.username}`}
            >
                <span className="absolute p-1 right-0 top-0 mix-blend-dodge text-lg"> Photo by: {user.name} </span>
            </a>
        </div >

    )
}