import React, {Component} from 'react';

import Heading from './components/Heading';
import NotesList from './components/NotesList';
import AddNotesForm from './components/AddNotesForm';

class Notes extends Component {

    constructor() {
        super();
        this.state = {
            usersList: [],
            currentInputValue: ''
        }
    }

    setCurrentInputValue = (event) => {
        this.setState({currentInputValue: event.target.value})
    }

    addUser = (event) => {
        event.preventDefault();

        if(this.state.currentInputValue === '') return;

        this.setState(prevState=>{
            return({
                usersList: [...prevState.usersList, this.state.currentInputValue],
                currentInputValue: ''
            });
        });
    }

    deleteUser = (userIndex) => {
        let filteredArray = this.state.usersList.filter((elem, index)=>{
            return index !== userIndex;
        });
        this.setState({usersList: filteredArray})
    }

    render() {
        return (
            <div className="l-side">
                <Heading title='Dodaj notatkę' />
                <AddNotesForm 
                    addUser={this.addUser} 
                    getInputValue={this.setCurrentInputValue}
                    currentValue={this.state.currentInputValue}
                />
                <NotesList 
                    usersList={this.state.usersList}
                    deleteUser={this.deleteUser} 
                />
            </div>
        );
    }
}

export default Notes;