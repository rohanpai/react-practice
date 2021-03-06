import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers'

class App extends Component {

    state = {
        todos: [
            { id: 1, name: 'This is react', isComplete: true },
            { id: 2, name: 'React Again', isComplete: false },
            { id: 3, name: 'Something Else', isComplete: false },
        ],

        currentTodo: ''
    }


    handleToggle = (id) => {
        const todo = findById(id, this.state.todos)
        const toggled = toggleTodo(todo)
        const updatedTodos = updateTodo(this.state.todos, toggled)
        this.setState({todos: updatedTodos})
    
    }

    handleSubmit = (evt) => {

        evt.preventDefault()

        const newId = generateId()
        const newTodo = {name: this.state.currentTodo, isComplete: false, id: newId}
        console.log(newId)
        const updatedTodos = addTodo(this.state.todos, newTodo)
        this.setState({ todos: updatedTodos,
                        currentTodo: '',
                        errorMessage: ''
        })
    
    }

    handleEmptySubmit = (evt) => {
        evt.preventDefault()
        this.setState({
            errorMessage: "Please Supply an error Name"
        })
    }


    handleInputChange = (evt) => {
        this.setState({
            currentTodo: evt.target.value
        })
    }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>

        <div className="Todo-App">
        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
        <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
        />
        <TodoList handleToggle={this.handleToggle} todos ={this.state.todos}/>

        </div>

      </div>
    );
  }
}

export default App;
