const Main = (props) => {

    const { dev } = props

    return (

        dev.map(lang => {

            const { id, description, title } = lang

            return (

                <div >
                    < button key={id} > {title} </button >
                    <div >{description}</div>
                </div>

            )
        })
    )
}

export default Main