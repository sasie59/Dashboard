import React, { Component } from "react";

import "./style.scss";
// import Task from "./Task";

export default class ToDoListBlock extends Component {
  constructor() {
    super();
    this.state = {
      tab: 'all', // all, done, active
      todoList: [
        { id: 1, text: "task 1 task 1 task 1 task 1 task 1 task 1", isDone: false },
        { id: 2, text: "task 2 task 2 task 2 task 2 task 2 task 2", isDone: true },
        { id: 3, text: "task 3 task 3 task 3 task 3 task 3 task 3", isDone: false },
        { id: 4, text: "task 4 task 4 task 4 task 4 task 4 task 4", isDone: true },
        { id: 5, text: "task 5 task 5 task 5 task 5 task 5 task 5", isDone: false },
        { id: 6, text: "task 6 task 6 task 6 task 6 task 6 task 6", isDone: true },
      ],
    };
  }

  handleClick = (id) => {
    const { todoList } = this.state;
    const taskIndex = todoList.findIndex(task => task.id === id);
    todoList[taskIndex].isDone = !todoList[taskIndex].isDone;
    this.setState({
      todoList
    });
  };

  handleDelete = id => {
    const { todoList } = this.state;
    const taskIndex = todoList.findIndex(task => task.id === id);
    this.setState({
      todoList: [
        ...todoList.slice(0, taskIndex),
        ...todoList.slice(taskIndex + 1),
      ]
    });
  }

  handleChangeTab = tab => {
    this.setState({ tab });
  }

  render() {
    return (
      <div className="ToDoListBlock">
        <div className={`title ${this.state.tab}`}>
          <div onClick={this.handleChangeTab.bind(this, 'all')}>All Task</div>
          <div onClick={this.handleChangeTab.bind(this, 'done')}>Done</div>
          <div onClick={this.handleChangeTab.bind(this, 'active')}>Active</div>
        </div>
        <div className='list'>
          {this.state.todoList
            .filter(todo => {
              return this.state.tab === 'done' ? todo.isDone :
                    this.state.tab === 'active' ? !todo.isDone:
                    true;
            })
            .map((todo) => (
              <div
                key={todo.id}
                className={`name ${todo.isDone ? "line" : ""}`}
              >
                <span onClick={this.handleClick.bind(this, todo.id)}>{todo.text}</span>
                <div style={{
                  display: 'inline-Block',
                  width: '10px'
                }} />
                <button className="del" onClick={this.handleDelete.bind(this, todo.id)}>Delete</button>
              </div>
          ))}
        </div>
      </div>
    );
  }
}
