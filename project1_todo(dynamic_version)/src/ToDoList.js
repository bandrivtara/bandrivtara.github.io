import React from 'react';

import ToDoForm from './components/ToDoForm';
import ToDo from './components/ToDo';
import Heading from './components/Heading';

export default class ToDoList extends React.Component {

    state = {
        todos: [],
        filter: 'all'
    };

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        })
    }

    checkComplete = (check) => {
        this.setState({
            filter : check
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    handleDeleteAllCompleteTodo = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render() {
        let todos=[];

        if (this.state.filter === 'all') {
            todos = this.state.todos;
        } else if (this.state.filter === 'active'){
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.filter === 'complete'){
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
        <div className="r-side">
            <div className="r-sideContain">
                <Heading title='Dodaj sprawę' />
                <ToDoForm onSubmit={this.addToDo}/>
                <div className='list'>
                    {todos.map(todo => (
                        <ToDo 
                        onDelete = {() => this.handleDeleteTodo(todo.id)}
                        key={todo.id} 
                        todo={todo} 
                        toggleComplete={()=>this.toggleComplete(todo.id)} />
                    ))}
                </div>
            </div>
            <div className='bottomContainer'>
                    <button onClick={()=> this.checkComplete('all')}>Wszystkie: {this.state.todos.filter(todo => todo).length}</button>
                    <button onClick={()=> this.checkComplete('active')}>Aktywne: {this.state.todos.filter(todo => !todo.complete).length}</button>
                    <button onClick={()=> this.checkComplete('complete')}>Zrobione: {this.state.todos.filter(todo => todo.complete).length}</button>
                    <button onClick={this.handleDeleteAllCompleteTodo}>Usuń wszystkie zrobione sprawy</button>
            </div>
        </div>
        )}
}