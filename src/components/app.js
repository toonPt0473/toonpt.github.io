import React, { Component } from 'react';
import Top from './Header/Header';
import Body from './Body/Body';
import Chatbox from './chatbox/chatbox'

export default class App extends Component {
  constructor(props){
    super(props);
    this.select = (selected) => {
      this.setState({selected:selected})
    }
    this.state = {
      selected : 'profile'
    }
  }
  render() {
    return (<div>
        <Top clickOnHead={this.select}/>
        <Body selected={this.state.selected}/>
        <Chatbox />
        {/* <style>{`
            *{border: solid red 1px}
          `}</style> */}
      </div>
    );
  }
}
