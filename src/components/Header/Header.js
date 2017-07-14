import React from 'react';


function openInNewTab(url) {
  const win = window.open(url);
  win.focus();
}

function Top({clickOnHead}){
    return (
        <div className="topHeader">
            <div className="middle">
                <div className="header" onClick={() => clickOnHead('profile')}><strong>Profile</strong></div>
                <div className="header" onClick={() => openInNewTab('https://github.com/toonPt0473')}><strong>github</strong></div>
                <div className="header" onClick={() => clickOnHead('game')}><strong>Game</strong></div>
                <div className="header" onClick={() => clickOnHead('video')}><strong>Stream Video</strong></div>
                <div className="header" onClick={() => clickOnHead('email')}><strong>Contact</strong></div>
            </div>
            <style>
                {`
                    .topHeader{
                        display: table;
                        position: static;
                        width: 100%;
                        height: 60px;
                    }

                    .middle{
                        display: table-cell;
                        vertical-align: middle;
                    }

                    .header{
                        margin-left: auto;
                        margin-right: auto; 
                        text-align: center;
                        display: inline-block;
                        width:20%;
                        cursor: pointer;
                    }
                    
                    .header strong{
                        font-size: 1.15em;
                        color: #999;
                    }  

                    @media(max-width:1000px){
                        .header strong{
                            font-size: 0.95em;
                        }
                    }

                    @media(max-width:800px){
                        .header strong{
                            font-size: 0.67em;
                        }
                    }                  
                `}
            </style>
        </div>
    )
}

export default Top