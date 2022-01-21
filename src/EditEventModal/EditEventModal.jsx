import React, {useState} from 'react';

export const EditEventModal = ({ onSave, onDelete, eventText, onClose }) => {
  const [updateText, setText] = useState(eventText);
  const [isEditable, setIsEditable] = useState(false);

  return(
    <>
      <div id="deleteEventModal">
        <h2>Event</h2>

        {!isEditable && <p id="eventText">{updateText}</p>}

        {isEditable && 
          <input 
            className={''}
            value={updateText} 
            onChange={e => setText(e.target.value)}
            id="eventTitleInput" 
          />
        }

        {!isEditable&&<button onClick={()=>setIsEditable(!isEditable)} 
          id="editButton">Edit</button>}
        {isEditable&&<button onClick={()=>onSave(updateText)} 
          id="saveButton">Save</button>}

        <button onClick={onDelete} id="deleteButton">Delete</button>
        <button onClick={onClose} id="closeButton">Close</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
