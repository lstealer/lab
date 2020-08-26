
import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <div className="container" style={{display: this.props.item=="user"?"":"none"}}>
                <div className="row">
                    <h1>User</h1>
                </div>
                
            </div>
        )
    }
}
