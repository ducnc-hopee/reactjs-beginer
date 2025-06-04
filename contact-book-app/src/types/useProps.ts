import { Contact } from "./types";

export type AddFormProps = {
    onSubmit: (newContact: Omit<Contact, "id">) => void;
}

export type PersonCardProps = {
    contact: Contact;
    onEdit: (id: string) => void;
};

export type EditFormProps = {
    contact: Contact;
    onSave: (updatedContact: Contact) => void;
    onCancel: () => void;
    onDelete: (contatcId: string) => void;
}