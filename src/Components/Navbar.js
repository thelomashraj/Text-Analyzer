import React from 'react'

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.navbar} fixed-top`}>
            <div className="container-fluid collapse navbar-collapse">
                <b className="navbar-brand">Text Analyzer</b>

                <div>
                    <input type="checkbox" className="btn-sm btn-check" id="btn-check-outlined" autoComplete="off" onClick={props.toggleMode}/>
                    <label className="btn btn-sm btn-outline-light" htmlFor="btn-check-outlined">{props.btnText}</label><br />
                </div>
            </div>
        </nav>
    )
}

export default Navbar