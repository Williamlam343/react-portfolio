import React from 'react';


export default function Backdrop({ photo }) {
    const { urls } = photo;



    return (

        <div
            className="w-full z-index-10 h-auto min-h-full fixed bg-cover bg-fixed"
            style={{
                backgroundImage: `url("${urls.raw}+ &w=1500&dpr=2")`
            }}
        >

        </div >

    )
}