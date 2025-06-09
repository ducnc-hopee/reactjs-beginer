import React, { useState } from 'react';
import AddContact from './components/AddContact';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from './types/contacts'; // Type for contact object
import ContactCard from './components/ContactCard';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');

  // Add new contact
  const handleAdd = () => {
    if (!newName || !newCity) return;
    const newContact: Contact = { id: uuidv4(), name: newName, city: newCity };
    setContacts([...contacts, newContact]);
    setNewName('');
    setNewCity('');
  };

  // Start editing a contact
  const handleEdit = (id: string) => setEditingId(id);

  // Delete contact
  const handleDelete = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id));
    if (editingId === id) setEditingId(null);
  };

  // Save edited contact
  const handleSave = (id: string, name: string, city: string) => {
    setContacts(
      contacts.map((c) =>
        c.id === id ? { ...c, name, city } : c
      )
    );
    setEditingId(null);
  };

  return (
    <div className="app p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Book</h1>
      <AddContact
        name={newName}
        city={newCity}
        onNameChange={setNewName}
        onCityChange={setNewCity}
        onAdd={handleAdd}
      />

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