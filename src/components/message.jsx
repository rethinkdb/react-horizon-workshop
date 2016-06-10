import React from "react";

export default class ChatMessage extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="sender">{this.props.message.user}</div>
        <div className="time">&nbsp;({::this.time()})</div>
        <div className="text">{this.props.message.text}</div>
      </div>
    );
  }
  
  time() {
    return moment(this.props.message.time).format("hh:mm A");
  }
  
}