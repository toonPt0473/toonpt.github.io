import React from 'react';
import Profile from './profile';
//import Github from './github';
import Game from './game';
import Video from './video' ;
import Contact from './contact'

function choose(selected){
    if(selected === 'game'){
        return <Game />
    }
    if(selected === 'video'){
        return <Video />
    }
    if(selected === 'email'){
        return <Contact />
    }
    return <Profile />
}

function Body(props){
    return (<div>
             {choose(props.selected)} 
        </div>
    )
}

export default Body

