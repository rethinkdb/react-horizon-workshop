import React from "react";
import ReactDOM from "react-dom";

import ChatInput from "./components/input.jsx";
import ChatLogin from "./components/login.jsx";
import ChatMessage from "./components/message.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    let horizon = new Horizon();
    this.collection = horizon("messages");
    
    this.state = {
      username: null,
      messages: []
    };
  }
  
  render() {
    return (
      <div className="container">
        <h1>Chat Demo</h1>
        {this.state.username ?
          <div className="content">
            <div className="messages">
              {this.state.messages.map(m => <ChatMessage message={m} />)}
            </div>
            <ChatInput onMessage={::this.handleMessage} />
          </div> :
          <ChatLogin onLogin={::this.handleLogin} />}
      </div>
    );
  }
  
  handleLogin(username) {
    this.collection
        .order("time", "descending")
        .limit(20).watch()
        .forEach(messages => {
          this.setState({
            username: username,
            messages: [...messages].reverse()
          });
        });
  }
  
  handleMessage(message) {
    this.collection.store({
      user: this.state.username,
      text: message,
      time: new Date(),
    });
  }
}

ReactDOM.render(<App />, document.getElementById("app"));