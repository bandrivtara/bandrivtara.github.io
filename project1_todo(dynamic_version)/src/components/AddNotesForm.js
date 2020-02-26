import React from 'react';

const AddNotesForm = (props) => {
    return (
        <form className="add-note-form" onSubmit={props.addUser}>
            <textarea 
                className="textarea-note"
                type="text" 
                placeholder="Notatka" 
                onChange={props.getInputValue} 
                value={props.currentValue} 
            />
            <button className="button-note">+</button>
        </form>
    );
}

export default AddNotesForm;