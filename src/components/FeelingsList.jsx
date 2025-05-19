import FeelingItem from "./FeelingItem"

function FeelingsList(props) {
    return (
        <div className='container'>
            <div className='row'>
                {props.feelings.slice().reverse().map(feeling => (
                    <FeelingItem
                        key={feeling.id}
                        id={feeling.id}
                        name={feeling.name}
                        title={feeling.title}
                        description={feeling.description}
                        deleteFeeling={props.deleteFeeling}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeelingsList