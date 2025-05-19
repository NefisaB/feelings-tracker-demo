import { useState } from "react"

function AddFeelingForm(props) {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitFeeling = () => {
        if (name !== '' && title !== '' && description !== '') {
            props.addFeeling(name, title, description);
            setName('')
            setTitle('')
            setDescription('')
        }
    }

    return (
        <div className='container'>
            <form className="w-100" style={{ maxWidth: '50%', minWidth: '400px' }}>
                <div>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        required
                        onChange={e => setName(e.target.value)}
                        value={name}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Title</label>
                    <input
                        type='text'
                        className='form-control'
                        required
                        onChange={e => setTitle(e.target.value)}
                        value={title}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}></textarea>
                </div>
                <button
                    type='button'
                    className='btn btn-primary mt-3'
                    onClick={submitFeeling}>
                    Add Feeling
                </button>
            </form>
        </div>
    )

}

export default AddFeelingForm