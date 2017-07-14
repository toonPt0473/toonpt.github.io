import React from 'react';
//import fade from './fade';
import $ from 'jquery'

const time = new Date();
const text = 'หากต้องการเรียกสัมภาษณ์งาน กรุณาแจ้งรายละเอียดในกล่อง Chat Box นี้ แล้วข้อความจะแจ้งเตือนมาในไลน์ของผมครับ ขอบคุณครับ'
const onChatClose = () => {
    if(document.getElementById('textContent').innerHTML === text){
        $('#textContent').html('<p id="textContent" style="color:#ff3b3b">ถ้าผมยังมีความสามารถไม่เพียงพอ ก็ขอรบกวนสละเวลาช่วยให้คำแนะนำผ่านทางข้อความด้วยครับผม ขอบคุณครับ และกดกากบาทอีกครั้งเพื่อปิดChat box นี้ครับ</p>')
        //document.getElementById('textContent').innerHTML = 'ถ้าผมยังมีความสามารถไม่เพียงพอ ก็ขอรบกวนสละเวลาช่วยให้คำแนะนำผ่านทางข้อความด้วยครับผม ขอบคุณครับ และกดกากบาทอีกครั้งเพื่อปิดChat box นี้ครับ';
        //document.getElementById('textContent').style.color = '#ff3b3b';

    }
    else {
        $('#live-chat').fadeOut(800); 
        //fade().fadeOut(document.getElementById('live-chat'))
    }
}
const typingMsg = (event) => {
    if(event.keyCode === 13) {      
        updateMsg(event.target.value);
        event.target.value = "";
    }
}
const updateMsg = (content) => {
    $('.chat-message').append(`<p id="getTextContent">${content}</p>`)
}

const Chatbox = () => {
    return (
        <div className="body">
            <div id="live-chat">		
                <header className="clearfix" >			
                    <a className="chat-close" onClick={onChatClose}>x</a>
                    <h4 onClick={() => {$('.chat').slideToggle(500, 'swing');
		                $('.chat-message-counter').fadeToggle(300, 'swing');}}>Paitoon Arayasatjapong</h4>
                    <span className="chat-message-counter">1</span>
                </header>
                <div className="chat">			
                    <div className="chat-history">
                        <div className="chat-message clearfix">					
                            <img src="http://gravatar.com/avatar/2c0ad52fc5943b78d6abe069cc08f320?s=32" alt="" width="32" height="32" />
                            <div className="chat-message-content clearfix">						
                                <span className="chat-time">{time.getHours()}:{time.getMinutes()}</span>
                                <h5 className="hname">Paitoon Arayasatjapong</h5><br/>
                                <p id="textContent">{text}</p>
                            </div> 
                        </div> 
                    </div> 
                    
                        <fieldset>					 
                            <input type="text" placeholder="Type your message…" name="content" autoFocus onKeyUp={typingMsg}/>
                            <input type="hidden" />
                         </fieldset>
                    
                </div> 
            </div> 	
            <style>{`
                    @charset "utf-8";
                    .body {
                        background: #e9e9e9;
                        color: #666;
                        font: 100%/1.5em "Droid Sans", sans-serif;
                        margin: 0;
                    }
                    .hname { padding-left: 40px}
                    a { text-decoration: none; }

                    fieldset {
                        border: 0;
                        margin: 0;
                        padding: 0;
                    }

                    h4, h5 {
                        line-height: 1.7em;
                        margin: 0;
                    }

                    hr {
                        background: #e9e9e9;
                        border: 0;
                        -moz-box-sizing: content-box;
                        box-sizing: content-box;
                        height: 1px;
                        margin: 0;
                        min-height: 1px;
                    }

                    img {
                        border: 0;
                        display: block;
                        height: auto;
                        max-width: 100%;
                    }

                    input {
                        border: 0;
                        color: inherit;
                        font-family: inherit;
                        font-size: 100%;
                        line-height: normal;
                        margin: 0;
                    }

                    p { margin: 0; }

                    .clearfix { *zoom: 1; } 
                    .clearfix:before, .clearfix:after {
                        content: "";
                        display: table;
                    }
                    .clearfix:after { clear: both; }

                    #live-chat {
                        bottom: 0;
                        font-size: 15px;
                        right: 24px;
                        position: fixed;
                        width: 300px;
                    }

                    #live-chat header {
                        background: #c0d0db;
                        background-image: -webkit-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: -moz-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: -ms-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: -o-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: linear-gradient(to bottom, #c0d0db, #135f8f)
                        border-radius: 5px 5px 0 0;
                        color: #fff;
                        cursor: pointer;
                        padding: 2px 15px;
                    }

                    #live-chat h4:before {
                        background: #1a8a34;
                        border-radius: 50%;
                        content: "";
                        display: inline-block;
                        height: 8px;
                        margin: 0 8px 0 0;
                        width: 8px;
                    }

                    #live-chat h4 {
                        font-size: 15px;
                    }

                    #live-chat h5 {
                        font-size: 13px;
                    }

                    #live-chat fieldset {
                        padding: 24px;
                    }

                    #live-chat input[type="text"] {
                        border: 1px solid #ccc;
                        border-radius: 3px;
                        padding: 8px;
                        outline: none;
                        width: 234px;
                    }

                    #getTextContent{ 
                        text-align: right; 
                        color: #3498db;
                    }

                    .chat-message-counter {
                        background: #e62727;
                        border: 1px solid #fff;
                        border-radius: 50%;
                        display: none;
                        font-size: 12px;
                        font-weight: bold;
                        height: 28px;
                        left: 0;
                        line-height: 28px;
                        margin: -15px 0 0 -15px;
                        position: absolute;
                        text-align: center;
                        top: 0;
                        width: 28px;
                    }

                    .chat-close {
                        background: #1b2126;
                        border-radius: 50%;
                        color: #fff;
                        display: block;
                        float: right;
                        font-size: 13px;
                        height: 16px;
                        line-height: 16px;
                        margin: 5px 0 0 0;
                        text-align: center;
                        width: 16px;
                    }

                    .chat {
                        background: #fff;
                    }

                    .chat-history {
                        height: 252px;
                        padding: 8px 24px;
                        overflow-y: scroll;
                    }

                    .chat-message {
                        margin: 16px 0;
                    }

                    .chat-message img {
                        border-radius: 50%;
                        float: left;
                    }

                    .chat-message-content {2:49 PM 7/11/2017
                        margin-left: 56px;
                    }

                    .chat-time {
                        float: right;
                        font-size: 11px;
                        margin: 5px 0 0 0;
                    }

                    .chat-feedback {
                        font-style: italic;	
                        margin: 0 0 0 80px;
                    }   

                    @media(max-width: 900px){
                        #live-chat {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
        )
}

export default Chatbox
