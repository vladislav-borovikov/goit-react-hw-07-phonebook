import React from "react";

const RenderContacts = ({ value, onDelete, deleting }) => {
  return (
    <ul>
      
      {value.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} {number} 
          </p>
          <button type="submit" onClick={() => onDelete(id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RenderContacts;


