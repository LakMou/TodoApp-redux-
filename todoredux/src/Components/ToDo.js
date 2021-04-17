import React from 'react'


const ToDo =(props) =>{

    return (
        <div className="to-do">
                <span className="to-do-name">
                    {props.item.workName}
                </span>
        </div>
    )
}

export default ToDo