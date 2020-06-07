import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    

    return (
        <div className="container bg-light">
            <h4>Welcome, <small>Username</small> </h4>
            <div className="container text-center">
                <h1 className="heading">Join Chama Room</h1>
                <hr/>

                <div><input placeholder="Prefered username." className="form-control" type="text" onChange={ (event) => setName(event.target.value) } /></div>
                <div><input placeholder="Room name." className="form-control mt-4" type="text" onChange={ (event) => setRoom(event.target.value) } /></div>

                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                <button className="btn btn-link mt-4" type="submit">Join now</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;