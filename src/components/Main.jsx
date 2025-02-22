import { useState } from "react"

import Buttons from "./Buttons"
import Accordion from "./Accordion"



const Main = (props) => {

    const { dev } = props

    const [openIndex, setOpenIndex] = useState(null)

    const handleAccordion = () => setOpenIndex(openIndex == dev.id ? dev.id : null); //switch ?

    //task controllo
    setOpenIndex === null ? <p> `non esistono linguaggi selezionati` </p> : null

    return (
        <>
            < Buttons btns={dev} handleAccordion={handleAccordion} />

            {openIndex && < Accordion btns={dev} />} {/* test */}

        </>
    )
}
export default Main