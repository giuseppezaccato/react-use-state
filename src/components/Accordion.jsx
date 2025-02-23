//? non serve perchè l'openIndex  dopo aver cliccato il bottone me lo porto nei props
// import { useState } from "react"


const Accordion = ({ btns, openIndex }) => {
    return (
        <div>

            {btns.map((e, index) => (
                <div key={e.id}>

                    {openIndex === index && (
                        <div className="langBox">
                            <h2>{e.title}</h2>
                            <h3>{e.description}</h3>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion