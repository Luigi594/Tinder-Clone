import React from 'react';
import Header from './Header';
import AllChats from './AllChats';

function Chats() {
  return (

    <>
    <Header backButton="/" />
        <div className='chats'>
            <AllChats
            
            name="Kiernan"
            message={"What's up?"}
            timestamp="35 minutes ago"
            profilePic={"https://i0.wp.com/historia-biografia.com/wp-content/uploads/2020/04/shipka.png?fit=442%2C294&ssl=1"}/>
        </div>
    </>
  )
}

export default Chats
