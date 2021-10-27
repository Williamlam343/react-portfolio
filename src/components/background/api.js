import React, { useEffect, useState } from 'react';
import Background from './background';
import { Row, Col, Preloader } from "react-materialize"
const { REACT_APP_APIKEY } = process.env

export default function API() {
    console.log(REACT_APP_APIKEY)

    const [data, setPictureData] = useState(null)

    const n = Math.floor(Math.random() * 10)
    const query = {
        client_id: REACT_APP_APIKEY,
        query: "London night",
        orientation: "landscape",
        content_filter: "low",
        // color: "black"
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