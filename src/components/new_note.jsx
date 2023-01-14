import React, {useState} from "react";

function NewNote(props){
  const [title, setTitle] = useState("")
  const [textInput, setTextInput] = useState("")

  function handleTitleChange(event){
    let {value} = event.target;
    setTitle(value)
    console.log(title)
  }

  function handleTextChange(event){
    let {value} = event.target;
    setTextInput(value);
  }

  function submitNote(event){
    props.onAdd(title, textInput)
    setTitle("")
    setTextInput("")
    event.preventDefault();
  }
  

  return (
    <div className="new_note">
    <form>
      <input className="new_note_title" type="text" placeholder="Add Title" onChange={handleTitleChange} value={title}/>
      <textarea rows="3" className="new_note_text" type="text" placeholder="Take A Note.." onChange={handleTextChange} value={textInput}/>
     
      <button className="new_note_submit"
      onClick={submitNote}>
        +
      </button>
      </form>
    </div>
  )
}

export default NewNote