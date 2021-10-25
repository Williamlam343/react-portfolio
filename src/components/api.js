import React, { useEffect, useState } from 'react';
import Background from './background';



export default function API() {

    const [data, setPictureData] = useState(null)

    const n = Math.floor(Math.random() * 10)
    const query = {
        client_id: "K2iMVN6rqhkd01zScZpMrNTT7nEFkX-2WFNtHC3xf1g",
        query: "Vancouver Island",
        orientation: "landscape"
    }

    useEffect(() => {

        async function fetchData() {
            let queryString = new URLSearchParams(query)
            let data = await (await fetch(`https://api.unsplash.com/search/photos/?${queryString}`)).json()
            console.log(data)
            setPictureData(data)
        }


        fetchData()
    }, []);




    if (data === null) {
        return <div>Loading...</div>;

    } else {
        let photo = data.results[n]
        return (
            <Background photo={photo} />
        );
    }

}