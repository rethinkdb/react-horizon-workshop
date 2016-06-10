import React from "react";

export default class ChatLogin extends React.Component {
  render() {
    return (
      <div className="login">
        <input placeholder="Type username here"
               onKeyUp={::this.handleKeyPress}
               ref={c => this.input = c} />
        <button onClick={::this.handleLogin}>Send</button>
      </div>
    );
  }
  
  handleLogin(ev) {
    this.props.onLogin(this.input.value);
    this.input.value = "";
  }
  
  handleKeyPress(ev) {
    if (ev.keyCode === 13)
      this.handleLogin(ev);
  }
}