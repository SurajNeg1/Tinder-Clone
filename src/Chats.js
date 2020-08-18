import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name = "Sarah"
            message="Helow"
            timestamp="15 min ago"
            profilePic="..."/>

            <Chat 
            name = "Elle"
            message="Hi whatsup??"
            timestamp="30 min ago"
            profilePic="..."/>

            <Chat 
            name = "Karen"
            message="Fuck Trump!!!!"
            timestamp="45 min ago"
            profilePic="..."/>

            <Chat 
            name = "Natasha"
            message="What u doing??"
            timestamp="50 min ago"
            profilePic="..."/>
        </div>
    )
}

export default Chats
