import React, { useState } from "react";
import { Modal, Button, Icon, TextInput } from "react-materialize";

export default function MyModal() {

    // const [query, setquery] = useState("")

    // console.log(query)
    // function submitHandler(e) {
    //     e.preventDefault()

    //     apiSearch(query)
    //     setquery("")

    // }


    return (

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
            <form
            // onSubmit={submitHandler}
            >
                <TextInput query="search"
                    // onChange={(e) => { setquery(e.target.value) }} 
                    placeholder="Work In Progress"></TextInput>
            </form>
        </Modal>

    )
}