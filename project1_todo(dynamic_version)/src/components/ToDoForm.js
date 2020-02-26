import React from 'react';
import shortid from 'shortid';

export default class ToDoForm extends React.Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false,
            id: shortid.generate()
        });
        this.setState({
            text: ''
        });
    }
 
    render() {
        return (
            <form className="add-note-form" onSubmit={this.handleSubmit}>
                <input 
                    className="textarea-note"
                    name="text"
                    value={this.state.text} 
                    onChange={this.handleChange}
                    placeholder="What to do"
                />
                <button className="button-note" onClick={this.handleSubmit}>+</button>
            </form>
        )}
}