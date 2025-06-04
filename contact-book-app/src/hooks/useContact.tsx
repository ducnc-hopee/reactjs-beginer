import { useState } from "react";
import { Contact } from "../types/types";
import { v4 as uuidv4 } from "uuid";

export function useContact()  {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [contactIdBeingEdited, setContactIdBeingEdited] = useState<
        string | null
    >(null);

    const handleUpdateContact = (updatedContact: Contact) => {
        const updatedContacts = contacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact
        );
        setContacts(updatedContacts);
        setContactIdBeingEdited(null);
    };

    const handleDeleteContact = () => {
        const updatedContacts = contacts.filter(
            (contact) => contact.id !== contactIdBeingEdited
        );
        setContacts(updatedContacts);
        setContactIdBeingEdited(null);
    };

    const handleAddContact = (newContact: Omit<Contact, "id">) => {
        setContacts([...contacts, { ...newContact, id: uuidv4() }]);
    };

    return { 
        contacts,
        contactIdBeingEdited,
        setContactIdBeingEdited,
        setContacts,
        handleAddContact, 
        handleUpdateContact, 
        handleDeleteContact}

}

export default useContact;