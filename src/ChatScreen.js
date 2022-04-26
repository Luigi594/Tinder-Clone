import React, { useState } from 'react';
import Header from './Header';
import Avatar from '@mui/material/Avatar';
import "./ChatScreen.css";

function ChatScreen() {

    const [input, setInput] = useState('');

    // this is for tracking all the messages stored in the database
    const [messages, setMessages] = useState([
        {
            name: "Kiernan",
            image: "https://i0.wp.com/historia-biografia.com/wp-content/uploads/2020/04/shipka.png?fit=442%2C294&ssl=1",
            message: "Whaat up? "
        },
        {
            name: "Kiernan",
            image: "https://i0.wp.com/historia-biografia.com/wp-content/uploads/2020/04/shipka.png?fit=442%2C294&ssl=1",
            message: "Whaat up? "
        },
        {
            message: "Heey nothing for the momments "
        },
    ]);

    const handleSend = e => {

        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }


  return (

    <>
        <Header backButton="/chats"/>

        <div className='chatScreen'>
            <p className='chatScreen_timestamp'>You matched with Luis</p>

            {messages.map((message) => (

                message.name ? (
                    <div className='chatScreen_message'>
                        <Avatar 
                        
                        className='chatScreen_image'
                        alt={message.image}
                        src={message.image}
                        />
                        <p className='chatScreen_text'>{message.message}</p>
                    </div>

                ) : ( 
                    <div className='chatScreen_message'>
                        <p className='chatScreen_textUser'>{message.message}</p>
                    </div>
                )

            ))}
        </div>

        {/** The form to send a message */}

        <form className="chatScreen_input">
            <input 

            type="text"
            className='chatScreen_inputField'
            placeholder='Type a message...'
            value={input}
            onChange={(e) => setInput(e.target.value)}/>

            <button onClick={handleSend} type="submit" className='chatScreen_inputButton'>SEND</button>
        </form>
    </>
    
  )
}

export default ChatScreen
