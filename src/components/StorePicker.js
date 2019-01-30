import React from 'react';

class StorePicker extends React.Component{
myInput = React.createRef();

goToStore = event => {
    event.preventDefault();
    
    console.log(this.myInput);

    // const storeName = this.myInput.value.value;

    // this.props.history.push(`/store/${storeName}`);
};

    render(){
        return (
            <div className="shopformset">
            <form className="Storeform" onSubmit={this.goToStore}>
                <h2>Enter Store Name</h2>
                <input type="text"
                 ref={this.myInput}
                 required placeholder="store name" defaultValue="Enter"/>
                <button type="submit">Visit Store</button>
            </form>
            </div>
        );
    }
    }   

export default StorePicker;