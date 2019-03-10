import React, { Component } from 'react';
import './App.css';

class CateClicked extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        // console.log(this.props.items)
        return(
            <div className="items_list">
                {this.props.items ? (
                <div>
                    <h4>{`Items in Category: (${this.props.cateName})`}</h4>
                    <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map(item => {
                        return(<tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>);
                    })}
                    </tbody>
                    </table>
                    </div>
                ) : null}
                
            </div>
        );
    }
}

export default CateClicked;

