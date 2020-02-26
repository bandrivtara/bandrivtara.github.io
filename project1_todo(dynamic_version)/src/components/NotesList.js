import React from 'react';

const NotesList = (props) => {

    let usersItems = props.usersList.map((user, index)=>{
        return <div key={index} className='notes' onClick={()=>props.deleteUser(index)} ><p>{user}</p></div>;
    });

    return (
        <div className="notes-desk">
            {usersItems}
        </div>
    );
}

export default NotesList;