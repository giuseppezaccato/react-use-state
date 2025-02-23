//? non è necessario perchè all'onClick seerve solo l'handleAccordion(che mi porto con i props)
// import { useState } from "react"


export default function Buttons({ btns, handleAccordion, openIndex }) {
    // const { btns, handleAccordion } = props //* vedi sopra
    return (

        <nav className="flex gap">
            {btns.map((element, index) => {

                const { id, title } = element

                return (
                    <button key={id} onClick={() => handleAccordion(index)} className={`ui-btn ${openIndex === index && "active"}`} > <span>{title}</span>  </button>
                )
            }
            )
            }
        </nav>
    )
}
