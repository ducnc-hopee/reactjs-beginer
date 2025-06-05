import { FormEvent } from "react";
import { AddProps } from "../types/props";

const AddCard: React.FC<AddProps> = ({ onSubmit }) => {
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

    const newContact = { name, city };

    onSubmit(newContact);
    form.reset();
  };
  return (
    <div className="w-fit bg-base-100 shadow my-6 ml-10 p-6 bg-white rounded">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="input">
          <span className="label">Name:</span>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded px-5 py-1 mx-3"
          />
        </label>
        <label className="input">
          <span className="label">City:</span>
          <input
            type="text"
            name="city"
            className="border border-gray-300 rounded px-2 py-1 mx-3"
          />
        </label>
        <button className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700 mx-3 cursor-pointer">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default AddCard;
