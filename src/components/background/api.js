import React, { useEffect, useState } from 'react';
import Background from './background'
    ;
import { Row, Col, Preloader, Modal, Button, Icon, TextInput } from "react-materialize"
const { REACT_APP_APIKEY } = process.env

export default function API() {

    let storage = localStorage.getItem("search")



    const [number, setNumber] = useState(0)
    const [search, setSearch] = useState(null)
    const [result, setResult] = useState(storage)
    const [data, setPictureData] = useState(null)
    const query = {
        client_id: REACT_APP_APIKEY,
        query: result || "Seattle",
        orientation: "landscape",
        content_filter: "low",
        // color: "green"
    }

    function submitHandler(e) {
        e.preventDefault()



        setResult(search)
        setSearch("")
    }

    useEffect(() => {

        async function fetchData() {

            localStorage.setItem("search", query.query)
            let queryString = new URLSearchParams(query)
            let data = await (await fetch(`https://api.unsplash.com/search/photos/?${queryString}`)).json()
            setNumber(Math.floor(Math.random() * 10))
            setPictureData(data)

        }


        fetchData()
    }, [query.query]);


    if (data === null) {

        return (
            <Row className="fixed z-50">
                <Col s={4}>
                    <Preloader
                        active
                        color="blue"
                        flashing={false}
                        size="big"
                    />
                </Col>
            </Row>
        )

    } else {
        let photo = data.results[number]
        return (
            <>
                <Background photo={photo} />

                <Modal
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Change Background"
                    id="Modal-10"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}

                    trigger={<Icon small top className="fixed z-10 right-1 top-8 cursor-pointer grey-text text-lighten-2">settings</Icon>}
                >
                    <p className="text-lg">Search up your favorite places!</p>
                    <form
                        onSubmit={submitHandler}
                    >
                        <TextInput query="search"

                            icon={<Icon ><i onClick={submitHandler} className="text-4xl cursor-pointer material-icons">search</i></Icon>}
                            onChange={(e) => { setSearch(e.target.value) }}
                            placeholder="Seattle" />


                    </form>
                    <p>
                        <Icon ><i onClick={() => setNumber(Math.floor(Math.random() * 10))} className=" text-4xl cursor-pointer red-text text-darken-4 material-icons">casino</i></Icon><span className="relative text-lg bottom-2.5"> Shuffle Background </span>
                        {/* <Icon ><i onClick={() => setNumber(n + 1)} className=" text-4xl cursor-pointer material-icons">chevron_left</i></Icon>
                        <span className="relative bottom-3"> Next Image </span>
                        <Icon ><i onClick={() => setNumber(n - 1)} className="text-4xl cursor-pointer material-icons">chevron_right</i></Icon> */}
                    </p>
                </Modal>

            </>

        );
    }

}