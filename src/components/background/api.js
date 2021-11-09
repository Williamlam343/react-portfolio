import React, { useEffect, useState } from 'react';
import Background from './background';
import { Link } from "react-router-dom"
import { Row, Col, ProgressBar, Modal, Button, Icon, TextInput } from "react-materialize"
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
        console.log(search)
        setResult(search)
        setSearch(" ")
    }

    useEffect(() => {

        // const n = Math.floor(Math.random() * data.results.length)
        // setNumber("0")
        async function fetchData() {

            let queryString = new URLSearchParams(query)
            let data = await (await fetch(`https://api.unsplash.com/search/photos/?${queryString}`)).json()



            if (data.results.length !== 0) {
                localStorage.setItem("search", query.query)
                // data = null
                setPictureData(data)

            } else {

                localStorage.setItem("search", undefined)

                setResult(null)

            }
        }


        fetchData()
    }, [query.query]);


    if (data === null) {

        return (
            <>
                <Row className="">
                    <p className="text-center m-1 text-xl">Loading...</p>
                    <Col className="fixed" s={12}>
                        <ProgressBar />
                    </Col>
                </Row>
                <Modal
                    className=""
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header={<p className="teal-text text-lighten-1 text-4xl">Change Background</p>}
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

                    trigger={<Icon small top className="fixed z-10 right-1 top-1 cursor-pointer grey-text text-darken-3">settings</Icon>}
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
                        <Icon ><i onClick={() => setNumber(Math.floor(Math.random() * data.results.length))} className=" text-4xl cursor-pointer red-text text-darken-4 material-icons">casino</i></Icon><span className="relative text-lg bottom-2.5"> Shuffle Background </span>

                    </p>
                </Modal>

            </>
        )

    } else {
        let photo = data.results[number]

        return (
            <>
                <Background photo={photo} />

                <a
                    className=""
                    target="_blank"
                    href={`https://unsplash.com/@${photo.user.username}`}
                >
                    <span className="absolute p-1 right-2 top-20 rounded-xl bg-opacity-50 bg-black white-text text-base"> Photo by: {photo.user.name} </span>
                </a>
                <Modal
                    className=""
                    actions={[
                        <Button flat modal="close" node="button" waves="green">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header={<p className="teal-text text-lighten-1 text-4xl">Change Background</p>}
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

                    trigger={<Icon small top className="absolute z-10 p-1 md:left-1 left-1 top-20 cursor-pointer rounded-full bg-opacity-50 bg-black grey-text text-lighten-2">settings</Icon>}
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
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div>
                            <Icon ><i onClick={() => setNumber(Math.floor(Math.random() * data.results.length))} className=" text-4xl cursor-pointer red-text text-darken-4 material-icons">casino</i></Icon><span onClick={() => setNumber(Math.floor(Math.random() * data.results.length))} className="cursor-pointer relative text-lg bottom-2.5"> Shuffle Background </span>
                        </div>
                    </div>
                </Modal>

            </>

        );
    }

}