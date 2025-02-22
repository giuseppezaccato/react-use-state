
const Accordion = (props) => {

    const { btns } = props

    return (
        btns.map(e => {
            return (
                <h4 className="text" key={e.id}> {e.title} <br /> {e.description} </h4>
            )
        })


    )
}
export default Accordion