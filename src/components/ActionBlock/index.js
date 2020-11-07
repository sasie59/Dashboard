import React, { Component } from "react";

import "./style.scss";
import book from "./book.png";
import ball from "./ball.png";

export default class ActionBlock extends Component {
  constructor() {
    super();
    this.state = {
      action: 'book', // book or ball
    };
  }
  
  handleClick = (action) => {
    this.setState({ action });
  }

  // <div style={style}> .....
  /** 你應該把 click 事件綁在籃球區塊 或 書的區塊，而不是綁在整個大區塊，然後再用 if 去判斷 */
  render() {
    const { action } = this.state;
    return (
      <div className="ActionBlock">
        <div onClick={this.handleClick.bind(this, 'book')} className={`planA ${action === 'book' ? 'gray' : 'white'}`}>
          <img className="book" src={book} width="50%" alt="book" />
        </div>
        <div className="space"></div>
        <div onClick={this.handleClick.bind(this, 'ball')} className={`planB ${action === 'ball' ? 'gray' : 'white'}`}>
          <img className="ball" src={ball} width="50%" alt="ball" />
        </div>
      </div>
    );
  }
}
