import { useState } from "react";
import { Contact } from "../types/entity/Person";
import { v4 as uuidv4 } from "uuid";

export function useHandlers() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contactBeingEdited, setContactBeingEdited] = useState<string | null>(
    null
  );

  const handleAddContact = (newContact: Omit<Contact, "id">) => {
    setContacts([...contacts, { ...newContact, id: uuidv4() }]);
  };

  const handleUpdateContact = (updatedContact: Contact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setContactBeingEdited(null);
  };

  const handleDeleteContact = () => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactBeingEdited
    );
    setContacts(updatedContacts);
    setContactBeingEdited(null);
  };
  return {
    contacts,
    contactBeingEdited,
    setContactBeingEdited,
    handleAddContact,
    handleDeleteContact,
    handleUpdateContact,
  };
}
