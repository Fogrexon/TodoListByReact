import React, { Component } from 'react';

interface Task{
  name : string;
  description : string;
  finished : boolean;
  time : string;
}

class TaskElement extends Component
{
  constructor(props)
  {
    super(props);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler()
  {
    this.props.toggleHandler(this.props.id);
  }

  render()
  {
    return (
      <div>
        {this.props.name}
        <button 
          value={this.props.finished?"Finished":"NotFinished"} 
          onClick={this.toggleHandler()} 
        />
      </div>
    )
  }
}

class TaskList extends Component
{
  constructor(props)
  {
    super(props);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler(id)
  {
    this.props.toggleHandler(id);
  }

  render()
  {
    let lists : Task[] = this.props.tasks;
    let elements = lists.map(
      (list,index)=>{
        return (<TaskElement key={index} id={index} name={list.name} finished={list.finished} description={list.description} toggleHandler={this.toggleHandler}/>)
      }
    );
    return (
      <div>
        {elements}
      </div>
    );
  }
}


export default class TODOApp extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      todoTasks : [
        {name:"fist",finished:true,description:"Hello,world"}
      ]
    };

    this.addTask = this.addTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(data : any)
  {
    let tasks : Task[] = this.state.todoTasks;
    tasks.push(data);
    /*this.setState({
      todoTasks: tasks
    });*/
  }

  toggleTask(id : number)
  {
    let tasks : Task[] = this.state.todoTasks;
    tasks[id].finished = !tasks[id].finished;
    /*this.setState({
      todoTasks: tasks
    });*/
  }

  deleteTask(id : number)
  {
    let tasks : Task[] = this.state.todoTasks;
    delete tasks[id];
    /*this.setState({
      todoTasks: tasks
    });*/
  }

  render()
  {
    return (
      <div>
        <TaskList toggleHandler={this.toggleTask} tasks={this.state.todoTasks}></TaskList>
      </div>
    )
  }
}