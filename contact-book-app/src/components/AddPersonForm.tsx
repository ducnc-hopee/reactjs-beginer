import { FormEvent } from "react";
import { AddFormProps } from "../types/useProps";

const AddPersonForm: React.FC<AddFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newContact = {
      name: formData.get("name") as string,
      city: formData.get("city") as string,
    };

    onSubmit(newContact);
    form.reset();
  };
  return (
    <div className="w-fit bg-base-100 shadow my-6 p-6">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center"
        autoComplete="off"
      >
        <label className="input">
          <span className="label">Name:</span>
          <input type="text" name="name" />
        </label>
        <label className="input">
          <span className="label">City:</span>
          <input type="text" name="city" />
        </label>
        <button className="btn btn-primary">Add contact</button>
      </form>
    </div>
  );
};

export default AddPersonForm;
