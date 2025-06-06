import React, { useState } from 'react';
import { Contact } from '../types/contacts';

type Props = {
  contact: Contact;
  onSave: (id: string, name: string, city: string) => void;
};

const EditContact: React.FC<Props> = ({ contact, onSave }) => {
  const [name, setName] = useState(contact.name);
  const [city, setCity] = useState(contact.city);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-2 w-full"
      />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-2 w-full"
      />
      <button
        onClick={() => onSave(contact.id, name, city)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default EditContact;