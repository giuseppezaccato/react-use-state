// import { useState } from "react"


export default function Buttons({ btns, handleAccordion }) {

    // const { btns, handleAccordion } = props //* vedi sopra

    return (

        <nav>{

            btns.map(element => {
                const { id, title } = element

                return (
                    <button key={id} onClick={handleAccordion} >  {title} </button>
                )
            })

        }</nav>
    )
}
