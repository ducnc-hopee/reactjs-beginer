import { Contact } from "./entity/Person";

export type PersonCardProp = {
    contact: Contact;
    onEdit: (id: string) => void;
}

export type EditProps = {
  contact: Contact;
  onDelete: (contactId: string) => void;
  onCancel: () => void;
  onSave: (updatedContact: Contact) => void;
};

export type AddProps = {
  onSubmit: (newContact: Omit<Contact, "id">) => void;
};
