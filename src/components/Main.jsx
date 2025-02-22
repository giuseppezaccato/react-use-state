// import { useState } from "react"
import Buttons from "./Buttons"
import Accordion from "./Accordion"


const Main = (props) => {

    const { dev } = props
    // const [status, setStatus] = useState(dev.id)
    return (
        <>

            < Buttons btns={dev} />
            < Accordion btns={dev} />

        </>
    )
}
export default Main