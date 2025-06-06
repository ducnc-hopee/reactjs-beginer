import React from 'react';

type Props = {
  name: string;
  city: string;
  onNameChange: (val: string) => void;
  onCityChange: (val: string) => void;
  onAdd: () => void;
};

const AddContact: React.FC<Props> = ({ name, city, onNameChange, onCityChange, onAdd }) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <input
        placeholder="City"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <button
        onClick={onAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;