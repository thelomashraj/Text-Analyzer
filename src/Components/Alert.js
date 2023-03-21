import React from 'react'

function Alert(props) {
    return (
            props.alert &&  <div className={`alert alert-${props.alert.type}`} role="alert" style={{ padding: "7px 1rem 7px 1rem", borderRadius: "0px" }}>
                <b>{props.alert.type.toUpperCase()}: </b> {props.alert.message}
            </div>
    )
}

export default Alert
