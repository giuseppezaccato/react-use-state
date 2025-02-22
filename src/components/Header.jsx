
const Header = (props) => {

    const { titles } = props
    return (
        <>
            <h1>Impara A Programmare</h1>
            <nav>{
                titles.map(title => {
                    const { id, title } = title
                    return (
                        <button key={id}> {title} </button>
                    )
                })


            }</nav>
        </>

    )
}

export default Header