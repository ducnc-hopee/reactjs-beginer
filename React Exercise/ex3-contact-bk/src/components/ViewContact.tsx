import { Button } from "./Button";
import { Contact } from "../types/contacts";
import { FC } from "react";

type TViewContactProps = {
  contact: Contact;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const ViewContact: FC<TViewContactProps> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <h3 className="text-xl font-semibold">{contact.name}</h3>
      <p className="text-gray-500">{contact.city}</p>
      <div className="mt-2 flex gap-2">
        <Button onClick={() => onEdit(contact.id)} variant="warning">
          Edit
        </Button>
        <Button onClick={() => onDelete(contact.id)} variant="danger">
          Delete
        </Button>
      </div>
    </>
  );
};
