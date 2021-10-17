import React, { Component } from 'react'
import './TodoList.css'


class TodoList extends Component {

  render() {
    return (
      <div id="content">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.createTask(this.task.value)
        }}>
          <input
            id="newTask"
            ref={(input) => {
              this.task = input
            }}
            type="text"
            className="form-control"
            placeholder="Add task..."
            required />
          <input type="submit" hidden={false} className="btn btn-primary" />
        </form>
        <ul id="taskList" className="list-unstyled">
          { this.props.tasks.map((task, key) => {
            { if(task.content != "") {
              return(
                <div className="taskTemplate" className="checkbox" key={key}>
                  <label>
                    <input
                    type="checkbox"
                    name={task.id}
                    defaultChecked={task.completed}
                    ref={(input) => {
                      this.checkbox = input
                    }}
                    onClick={(event) => {
                      this.props.toggleCompleted(this.checkbox.name) }}/>
                    <span className="content">{task.content}</span>
                    <button className="btn btn-danger" onClick={(event) => {
                      this.props.deleteTask(task.id) }}>Delete</button>
                  </label>
                </div>
              )
            }
          }
          })}
        </ul>
        <ul id="completedTaskList" className="list-unstyled">
        </ul>
      </div>
    );
  }
}

export default TodoList;
