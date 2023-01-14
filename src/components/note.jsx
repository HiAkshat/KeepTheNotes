import React from "react";

let title = "Note Title"
let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus arcu, bibendum eget consequat in, bibendum at elit. "

function note(props){
    return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
    )
}

export default note;
