import { FormEvent } from "react";
import { EditProps } from "../types/props";

const EditCard: React.FC<EditProps> = ({
  contact,
  onSave,
  onCancel,
  onDelete,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get("name")?.toString().trim();
    const city = formData.get("city")?.toString().trim();

    if (!name || !city) {
      alert("Both Name and City fields are required.");
      return;
    }

    const updatedContact = {
      ...contact,
      name: formData.get("name") as string,
      city: formData.get("city") as string,
    };

    onSave(updatedContact);
    form.reset();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="card w-100 bg-base-100 card-md shadow-sm min-h-50 bg-white rounded m-10 "
        autoComplete="off"
      >
        <div className="flex flex-col gap-4">
          <label className="">
            <span className="label px-2">Name:</span>
            <input
              className="border-2 rounded my-3"
              type="text"
              name="name"
              defaultValue={contact.name}
            />
          </label>
          <label>
            <span className="label px-2">City:</span>
            <input
              className="border-2 rounded my-3 "
              type="text"
              name="city"
              defaultValue={contact.city}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2 items-start mt-4">
          <button
            type="button"
            className="bg-pink-400 rounded px-3 mx-3 cursor-pointer"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
          <div className="flex justify-between">
            <button
              type="button"
              className="mx-3 bg-gray-400 rounded px-3 cursor-pointer"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 rounded px-3 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
