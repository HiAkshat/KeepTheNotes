import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function note(props){
    function handleClick(){
        props.onDelete(props.id)
    }

    return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="delete_button" onClick={handleClick}><DeleteOutlineOutlinedIcon /></button>
    </div>
    )
}

export default note;
