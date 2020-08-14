import React from 'react';

const Chats = (props) => (
    <div>
        Chats
        <button
            onClick={() => {
                localStorage.removeItem('token');
                props.history.push('/login');
            }}
        >Log out</button>
    </div>
);

export default Chats;