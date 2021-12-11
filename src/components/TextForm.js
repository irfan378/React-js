import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");

    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");

    }


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}
