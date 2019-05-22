import React from 'react'

const Option = ( props ) => {

    return (
        <div>
            <button onClick = { ( event ) => {
                props.handleDeleteOption ( props.optionText )
            } }>Remove</button>
            <p>{ props.optionText }</p>
        </div>
    )

}

export { Option as default }