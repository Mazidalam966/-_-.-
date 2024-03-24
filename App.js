

import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg'
import home from './assets/home.svg';
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAi } from './openai'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      text: "Hi",
      isBot: true,
    }
  ])
  console.log(sendMsgToOpenAi())
  const handleSend = async () => {
    const res = await sendMsgToOpenAi(input);
    setMessage(...message,
      { text: input, isBot: true },
      { text: res, isBot: true }
    )
  }
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='logo ChatGpt' className='logo'></img>
            <span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'> <img src={addBtn} alt='New Chat' className='addBtn'></img>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='query' className=''></img> What is Programming ?</button>
            <button className='query'><img src={msgIcon} alt='query' className=''></img> How to use an API ?</button>

          </div>

        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='home' className='listitemsImg' />Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='saved' className='listitemsImg' />Saved
          </div>
          <div className='listItems'>
            <img src={rocket} alt='rocket' className='listitemsImg' />Upgrade
          </div>

        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          {message.map((message, i) => {
            <div className={message.isBot ? 'chat bot' : "chat"}>
              <img src={message.isBot ? gptImgLogo : userIcon} className="chatimg" />
              <p className='txt'>{message.text}</p>
            </div>
          })}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message' value={input} onChange={(e) => setInput(e.target.value)} />
            <button className='send' onClick={() => handleSend()}><img src={sendBtn} /></button>
          </div>
          <p>ChatGPT may produce information about people, places, or facts. ChatGPT March 20 Version</p>
        </div>

      </div>

    </div>
  );
}

export default App;





