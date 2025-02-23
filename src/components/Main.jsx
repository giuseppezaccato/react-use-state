//task importo hook
import { useState } from "react"

import Buttons from "./Buttons"
import Accordion from "./Accordion"


const Main = (props) => {

    const { dev } = props
    const [openIndex, setOpenIndex] = useState(null)
    const handleAccordion = (index) => setOpenIndex(openIndex === index ? null : index); //switch ?

    //! il controllo va DENTRO il return!! => sotto i bottoni possibilmente! 
    //todo e magari concatenalo con la comparsa dell'Accordion
    openIndex === null ? <p> `non esistono linguaggi selezionati` </p> : null

    return (
        <>
            < Buttons btns={dev} handleAccordion={handleAccordion} openIndex={openIndex} />
            {openIndex == null
                ? <div className="langBox container flex">
                    <h3>Non hai selezionato alcun linguaggio, selezionane uno!</h3>
                </div>
                : < Accordion btns={dev} openIndex={openIndex} />
            }

        </>
    )
}
export default Main