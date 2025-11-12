class Item{
    constructor(text){
        this.id = Date.now() + Math.random();
        this.text = text;
        this.done = false;
    }
}

export default Item;