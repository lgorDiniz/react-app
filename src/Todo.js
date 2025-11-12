import React, { useEffect, useState } from "react";
import "./Todo.css";
import Item from "./components/Item";
import List from "./components/List";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";

const SAVED_ITEMS = "savedItems";

function Todo(){

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))

        console.log(savedItems)
        
        if(savedItems){
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text){
        let item = new Item(text);

        setItems([...items, item]);
    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it=>it.id != item.id)

        setItems(filteredItems)
    }

    function onDone(item){
        let updatedItem = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItem);
    }

    function onHideModal(e){
        let target = e.target;
        if(target.id == "modal"){
            setShowModal(false);
        }
    }
    
    return (
        <div className="container">
            <header className="header"><h1>Todo</h1> <button onClick={()=>{setShowModal(true)}} className="addButton">+</button></header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal = {onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>)
}

export default Todo;