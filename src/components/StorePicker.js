import React from 'react';

class StorePicker extends React.Component{
    render(){
        return (
            <div className="shopformset">
            <form>
                <h2>Enter Store Name</h2>
                <input type="text" required placeholder="store name">
                </input>
                <button type="submit">Visit Store</button>
            </form>
            </div>
        )
        
    }
    }

export default StorePicker;