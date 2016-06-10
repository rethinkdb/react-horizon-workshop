import React from "react";

export default class ChatInput extends React.Component {
  render() {
    return (
      <div className="entry">
        <input placeholder="Type message here"
               onKeyUp={::this.handleKeyPress}
               ref={c => this.input = c} />
        <button onClick={::this.sendMessage}>Send</button>
      </div>
    );
  }
  
  sendMessage(ev) {
    this.props.onMessage(this.input.value);
    this.input.value = "";
  }
  
  handleKeyPress(ev) {
    if (ev.keyCode === 13)
      this.sendMessage(ev);
  }
}