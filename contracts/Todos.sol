// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Todos {
  uint public taskCount = 0;

    //model task object
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    //put tasks in state
    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        string content,
        bool completed
    );

    event TaskCompleted(
        uint id,
        bool completed
    );

    event TaskLength(
        uint length
    );

    constructor() public {}

    //add new task
    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount,_content,false);
    }

    // set task as completed
    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }


    // delete a task
    function deleteTask(uint _id) public{
      delete tasks[_id];
    }
}
