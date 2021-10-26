import React, { useEffect, useState } from 'react';
import Background from './background';
import { Row, Col, Preloader } from "react-materialize"



export default function API() {

    const [data, setPictureData] = useState(null)

    const n = Math.floor(Math.random() * 10)
    const query = {
        client_id: "K2iMVN6rqhkd01zScZpMrNTT7nEFkX-2WFNtHC3xf1g",
        query: "Forest",
        orientation: "landscape",
        content_filter: "low",
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
        return (<Row>
            <Col s={4}>
                <Preloader
                    active
                    color="blue"
                    flashing={false}
                    size="big"
                />
            </Col>
        </Row>)

    } else {
        let photo = data.results[n]
        return (
            <Background photo={photo} />
        );
    }

}