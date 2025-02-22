
import React from "react"



const Buttons = (props) => {

    const { btns } = props

    return (

        <nav>{

            btns.map(element => {

                const { id, title } = element

                return (
                    <button key={id}> <a href="#">{title} </a> </button>
                )
            })

        }</nav>
    )
}
export default Buttons