import React from "react"
import Card from "./Card";

function DoneImg(props){
    if(props.done){
        return "☑";
    }
    else{
        return "𐄂"
    }
}

function ListItem(props){
    return(
    <li>
        <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
                <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                <button onClick={()=> {props.onItemDeleted(props.item)}}>X</button>
            </div>
        </Card>
    </li>)
}

export default ListItem;