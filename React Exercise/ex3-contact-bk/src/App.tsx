import React, { useState } from 'react';
import ContactCard from './contactCard';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from './types/contacts'; /*Importing a names export exported by name  */

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');

  const handleAdd = () => {
    if (!newName || !newCity) return;
    setContacts([...contacts, { id: uuidv4(), name: newName, city: newCity }]);
    setNewName('');
    setNewCity('');
  };

  const handleEdit = (id: string) => setEditingId(id); /* handleEdit is a varible  that holdas a function  */

  const handleDelete = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const handleSave = (id: string, name: string, city: string) => {
    setContacts(contacts.map((c) => (c.id === id ? { ...c, name, city } : c)));
    setEditingId(null);
  };

  return (
    <div className="app">
      <h1>Contact Book</h1>
      <div className="add-form">
        <input placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <input placeholder="City" value={newCity} onChange={(e) => setNewCity(e.target.value)} />
        <button onClick={handleAdd}>Add Contact</button>
      </div>

      <div className="cards">
        {contacts.map((c) => (
          <ContactCard
            key={c.id}
            contact={c}
            isEditing={editingId === c.id}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
};

export default App;