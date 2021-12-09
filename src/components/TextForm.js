import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    let newText = text.toUpperCase();
    const handleUpClick = () => {
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        </div>
    )
}
