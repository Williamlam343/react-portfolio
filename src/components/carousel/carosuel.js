import React from "react";
import { Carousel } from "react-materialize";

export default function MyCarosuel() {

    return (
        <Carousel
            carouselId="Carousel-1"
            centerImages
            images={[
                'https://picsum.photos/200/300?image=0',
                'https://picsum.photos/200/300?image=1',
                'https://picsum.photos/200/300?image=2',
                'https://picsum.photos/200/300?image=3',
                'https://picsum.photos/200/300?image=4'
            ]}
            options={{
                dist: -100,
                duration: 200,
                fullWidth: false,
                indicators: true,
                noWrap: false,
                numVisible: 12,
                padding: 10,
                shift: 0
            }}
        />
    )

}