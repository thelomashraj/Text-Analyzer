import React, { useState } from 'react'

function Home(props) {
    const [text, setText] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const convertToUppercase = () => {
        if (text === "") {
            props.showAlert("Enter some text to convert!", "warning")
        } else {
            setText(text.toUpperCase());
            props.showAlert("Text converted to uppercase!", "success")
        }
    }

    const convertToLowercase = () => {
        if (text === "") {
            props.showAlert("Enter some text to convert!", "warning")
        } else {
            setText(text.toLowerCase());
            props.showAlert("Text converted to lowercase!", "success")
        }
    }

    const capitalize = () => {
        if (text === "") {
            props.showAlert("Enter some text to capitalize!", "warning")
        } else {
            // split the string into an array of sentences
            const sentences = text.split(". ");

            // iterate over each sentence and capitalize the first letter of the next word
            const capitalizedSentences = sentences.map((sentence) => {
                const words = sentence.split(" ");
                for (let i = 0; i < words.length; i++) {
                    if (words[i][0]) {
                        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                        break;
                    }
                }
                return words.join(" ");

            });

            // join the capitalized sentences back into a single string and give it to setText.
            setText(capitalizedSentences.join(". "))
            props.showAlert("Text capitalized!", "success")
        }
    }

    const removeSpaces = () => {
        if (text === "") {
            props.showAlert("Enter some text to remove spaces!", "warning")
        } else {
            setText(text.replace(/\s+/g, ' ').trim());
            props.showAlert("Extra spaces removed!", "success")
        }
    }

    const copyText = () => {
        if (text === "") {
            props.showAlert("Enter some text to copy!", "warning")
        } else {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            props.showAlert("Text copied to clipboard!", "success")
        }
    }

    const reset = () => {
        if (text === "") {
            props.showAlert("Enter some text before reseting!", "warning")
        } else {
            setText("")
            props.showAlert("TextBox reseted to empty!", "success")
        }
    }


    return (
        <>
            <div className='my-1'>
                <h4 className={`text-${props.mode} ps-2`}>Enter your text below to analyze:</h4>
                <textarea autoFocus className={`form-control my-3 bg-${props.textarea} text-${props.tatext}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button type="button" className={`btn btn-sm btn-outline-${props.fnbtn} mx-1 my-1`} onClick={convertToUppercase}>To UpperCase</button>
                <button type="button" className={`btn btn-sm btn-outline-${props.fnbtn} mx-1 my-1`} onClick={convertToLowercase}>To LowerCase</button>
                <button type="button" className={`btn btn-sm btn-outline-${props.fnbtn} mx-1 my-1`} onClick={capitalize}>Capitalize</button>
                <button type="button" className={`btn btn-sm btn-outline-${props.fnbtn} mx-1 my-1`} onClick={removeSpaces}>Remove Extra Spaces</button>
                <button type="button" className={`btn btn-sm btn-outline-${props.fnbtn} mx-1 my-1`} onClick={copyText}>Copy Text</button>
                <button type="button" className={`btn btn-sm btn-outline-${props.fnbtn} mx-1 my-1`} onClick={reset}>Reset</button>

            </div>
            <div className="container">
                <h3 className={`text-${props.mode}`}>Summary:</h3>
                <p className={`text-${props.mode}`}>Your text contains <b>{!text.trim() ? 0 : text.replace(/\s+/g, ' ').trim().split(' ').length}</b> words and <b>{text.replace(/[\s\n]+/g, '').length}</b> letters.</p>
                <h4 className={`text-${props.mode}`}>Preview:</h4>
                <p className={`text-${props.mode}`}>{text ? text : "Enter some text in the textbox to preview..."}</p>
            </div>
        </>
    )
}

export default Home
