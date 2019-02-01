import React from 'react';

class AddFish extends React.Component{

constructor(props){
        super(props);
        this.createFish = this.createFish.bind(this);
    };

nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

    createFish = (event) => {
    event.preventDefault();
    console.log(this.name.value.value);
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

export default AddFish;