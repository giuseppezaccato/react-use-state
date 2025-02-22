// import { useState } from "react"

export default function Accordion({ btns }) {

    // const { btns } = props //* vedi sopra

    return (
        btns.map(e => {

            return (

                <h4 key={e.id} >  {e.title} < br /> {e.description} </h4 >
            )
        })
    )
}
