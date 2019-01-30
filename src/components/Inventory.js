import React, {Component} from 'react';
import AddFish from './AddFish';

export default class Inventory extends Component{
    render(){
        return(
            <div className="inventory">
            <h1>Inventory!</h1>
            <AddFish />
            </div>
        );
    }
}