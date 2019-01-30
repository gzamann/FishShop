import React from 'react';

export default class AddFish extends React.Component{
constructor(props){
    super(props);
    this.createFish = this.createFish.bind(this);
}

name = React.createRef();
price = React.createRef();
status = React.createRef();
desc = React.createRef();
image = React.createRef();


    createFish = (event) => {
    event.preventDefault();
    console.log(this.nameRef.value.value);
};

    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                <option value="available">Fresh</option>
                <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text" placeholder="Description"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image url"/>
                <button type="submit">Add Fish</button>
            </form>
        );
    }
}