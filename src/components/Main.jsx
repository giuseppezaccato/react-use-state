//task importo hook
import { useState } from "react"

import Buttons from "./Buttons"
import Accordion from "./Accordion"


const Main = (props) => {

    const { dev } = props
    const [openIndex, setOpenIndex] = useState(null)
    const handleAccordion = (num) => setOpenIndex(openIndex === num ? null : num); //? condition 

    //! il controllo va DENTRO il return!! => sotto i bottoni possibilmente! 
    //? e magari concatenalo con la comparsa dell'Accordion
    // openIndex === null ? <p> `non esistono linguaggi selezionati` </p> : null

    //? nextExercises ==> usa map nel padre(organizzazione migliore!) anche su componenti 
    //? o addirittura funzioni custom che lo facciano direttamente
    //todo rendi i componenti piu RIUTILIZZABILI possibile, sfruttando i props per CARATTERIZZARLI!
    return (
        <>
            < Buttons btns={dev} handleAccordion={handleAccordion} openIndex={openIndex} />

            {/* task controllo */}
            {openIndex == null
                ? <div className="langBox flex"><h3>Non hai selezionato alcun linguaggio!</h3></div>
                : < Accordion btns={dev} openIndex={openIndex} />
            }

        </>
    )
}
export default Main