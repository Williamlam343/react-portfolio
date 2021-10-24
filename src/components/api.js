import React, { useEffect, useState } from 'react';
import Background from './background';
import { createApi } from 'unsplash-js';



export default function API() {

    const [data, setPictureData] = useState(null)
    const [query, setQuery] = useState({
        query: "Tokyo",
        orientation: "landscape",
        perPage: 1
    })
    const n = Math.floor(Math.random() * 10)

    const api = createApi({
        accessKey: "rENs0bdJcmAPz0zYssWDx-H8aTYcTlOFqmLb6JjFTsw"
    })

    useEffect(() => {

        api.search
            .getPhotos(query)
            .then((result) => {
                setPictureData(result);
            })
            .catch(() => {
                console.log('something went wrong!');
            });

    }, []);




    if (data === null) {
        return <div>Loading...</div>;

    } else {
        let photo = data.response.results[0]
        console.log(photo)


        return (
            <div className="bg-fixed bg-cover h-screen absolute">

                <Background photo={photo} />

            </div>
        );
    }

}