import React, {useState} from "react";
import Header from "./header"
import Note from "./note"
import notes from "../notes"
import Footer from "./footer"
import NewNote from "./new_note";

function App(){
    const [items, setItems] = useState([
        {title: "How are you?", text: "Im good so you say how are you doing good i suppose"},
        {title: "Loops",
        text: "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."}
        ,{title: "Loops are very good i like them very much",
        text: "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."}
    ])
    // const [items, setItems] = useState([])

    function createListItem(title, textInput){
        if (!(title==="" && textInput==="")){
            setItems(prevValue => [...prevValue, {title: title, text:textInput}])
        }
        console.log(items.length)
    }

    function deleteItem(id){
        setItems(prevValue => {
            return prevValue.filter((item, index) => {return id != index})
        })
    }

    return (
        <div>
            <Header />
            <NewNote onAdd={createListItem} />
            <div className="container">
                {/* {items.map((item, index) => <Note key={index} id={index} title={item.title} content={item.text} />)} */}
                {items.map((item, index) => <Note key={index} id={index} title={item.title} content={item.text} onDelete={deleteItem} />)}
            </div>
        </div>
    )
}

export default App; 