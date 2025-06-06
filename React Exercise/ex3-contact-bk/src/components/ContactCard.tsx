import React from "react";
import { Contact } from "../types/contacts";
import EditContact from "./Editcontact";

type Props = {
  contact: Contact;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSave: (id: string, name: string, city: string) => void;
};

const ContactCard: React.FC<Props> = ({
  contact,
  isEditing,
  onEdit,
  onDelete,
  onSave,
}) => {
  return (
    <div className="card bg-white rounded-lg p-4 shadow-md mb-4">
      {!isEditing ? (
        <>
          <h3 className="text-xl font-semibold">{contact.name}</h3>
          <p className="text-gray-500">{contact.city}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onEdit(contact.id)}
              className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(contact.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <EditContact contact={contact} onSave={onSave} />
      )}
    </div>
  );
};

export default ContactCard;
