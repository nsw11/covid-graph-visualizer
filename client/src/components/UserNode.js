import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class UserNode extends Component {
    // Should take in:
    // name, uuid, x, y, status, friends
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            uuid: props.uuid,
            x: props.x,
            y: props.y,
            status: props.status,
            friends: props.friends,
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default UserNode;