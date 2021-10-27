import React from "react";
import { Modal, Button } from "react-materialize";

export default function MyModal() {
    return (

        <div>
            {/* <Button
            className="modal-trigger"
            href="#modal1"
            node="button"
        >
            Show Modal
        </Button> */}
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Modal Header"
                id="modal1"
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
            // root={[object, HTMLBodyElement]}
            >
                Lorem ipsum dolor sit amet
            </Modal>
        </div>
    )
}