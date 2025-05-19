import { useState } from "react"

function FeelingItem(props) {

    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className='card col-md-6 mb-4 me-3' style={{ width: '18rem' }}>
            <div className='card-body'>
                <h5 className='card-title'
                    onClick={() => setShowDescription(!showDescription)}
                >{props.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'
                    onClick={() => setShowDescription(!showDescription)}>{props.name}</h6>
                {showDescription &&
                    <div>
                        <p className='card-text'>{props.description}</p>
                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => props.deleteFeeling(props.id)}
                        >Delete</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default FeelingItem