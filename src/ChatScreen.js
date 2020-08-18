import React,{useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput]= useState([])
    const [messages, setMessages]=useState([
        {
            name:'Elle',
            image:"...",
            message:"Hi whatsup??"
        },
        {
            name:'Elle',
            image:"...",
            message:"anyhting planned?"
        },
        {
            message:"Nothing just chilling?"
        }
    ]);

    const handleSend = (e) => {
         e.preventDefault();
         
         setMessages([...messages, { message:input }]);
         setInput("");
    };
    return (
        <div>
            <div className="chatScreen">
                <p className="chatScreen__timestamp">YOU WATCHED WITH ELLE ON 10/07/2020</p>
                {messages.map((message)=>(
                    message.name ? (<div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt = {message.name} src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>):(
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                ))}
            </div>
            <form className="chatScreen__input">
                <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="chatScreen__inputField" 
                type="text" placeholder="Type a message"/>
                <button className="chatScreen__inputButton" type="submit"
                     onClick={handleSend}>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
