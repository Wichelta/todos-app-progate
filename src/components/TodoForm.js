import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    return (
        <div style={{ marginBottom: '32px' }}>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <input
                    type='text'
                    placeholder='Add your ToDo'
                    style={{ height: '66px', width: '40%', fontSize: '16px' }}
                    onChange={(event) => { handleChange(event) }}
                    value={title}
                />
                <button style={{ height: '72px', fontSize: '16px' }}>
                    Add ToDo
                </button>
            </form>
        </div>
    );
}

export default TodoForm;