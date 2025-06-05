import React, { useState} from "react";
import { Contact } from './types/contacts';


type Props={
    contact: Contact;
    isEditing: boolean;
    onEdit: (id: string)=> void;
    onDelete: (id: string)=> void;
    onSave: (id: string, name: string, city: string)=> void
};

const ContactCard: React.FC<Props> = ({ contact, isEditing, onEdit, onDelete, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [city, setCity] = useState(contact.city);

  return (
    <div className="card">
      {!isEditing ? (
        <>
          <h3>{contact.name}</h3>
          <p>{contact.city}</p>
          <button onClick={() => onEdit(contact.id)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </>
      ) : (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={() => onSave(contact.id, name, city)}>Save</button>
        </>
      )}
    </div>
  );
};

export default ContactCard;