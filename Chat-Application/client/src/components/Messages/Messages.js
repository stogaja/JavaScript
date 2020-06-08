import React from 'react';
import scrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
    <scrollToBottom>
        {messages.map((message, i) => <div key={i}><Message messages={message} name={name} /></div>)}
    </scrollToBottom>
)

export default Messages;