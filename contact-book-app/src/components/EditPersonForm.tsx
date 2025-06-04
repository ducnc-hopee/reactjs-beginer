import { FormEvent } from "react";
import { EditFormProps } from "../types/useProps";

const EditPersonForm: React.FC<EditFormProps> = ({
  contact,
  onSave,
  onCancel,
  onDelete,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const updatedContact = {
      ...contact,
      name: formData.get("name") as string,
      city: formData.get("city") as string,
    };

    onSave(updatedContact);
    form.reset();
  };

  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm min-h-44">
      <div className="card-body">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
          autoComplete="off"
        >
          <label className="input input-sm">
            <span className="label">Name:</span>
            <input type="text" name="name" defaultValue={contact.name} />
          </label>
          <label className="input input-sm">
            <span className="label">City:</span>
            <input type="text" name="city" defaultValue={contact.city} />
          </label>
          <div className="justify-between card-actions mt-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
            <div>
              <button type="button" className="btn" onClick={onCancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPersonForm;
