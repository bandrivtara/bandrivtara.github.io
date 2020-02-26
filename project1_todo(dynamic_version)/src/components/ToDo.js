import React from 'react';


export default props => (
    <div className='todo'>
        <div style={{
            textDecoration: props.todo.complete ? 'line-through' : ''
        }} onClick={props.toggleComplete}>{props.todo.text}
        </div>
        <div className="btn-delete" onClick={props.onDelete}></div>
    </div>
    );