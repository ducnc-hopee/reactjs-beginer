import React from "react";
import { Contact } from "../types/contacts";
import EditContact from "./EditContact";
import { ViewContact } from "./ViewContact";

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
        <ViewContact contact={contact} onEdit={onEdit} onDelete={onDelete} />
      ) : (
        <EditContact contact={contact} onSave={onSave} />
      )}
    </div>
  );
};

export default ContactCard;
