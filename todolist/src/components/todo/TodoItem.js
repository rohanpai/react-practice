import React from 'react'
import {partial} from "../../lib/utils"


export const TodoItem = (props) => {
    
    const handleToggle = partial(props.handleToggle, props.id)
    return (
        <li key={props.id}>
            <input 
            onChange={handleToggle}
            type="checkbox" checked={props.isComplete}/>
            {props.name}
        </li>
    )

}


TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}
