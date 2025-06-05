import { PersonCardProp } from "../types/props";

const PersonCard: React.FC<PersonCardProp> = ({ contact, onEdit }) => {
  return (
    <div className="w-96 min-h-44 bg-white rounded m-10 p-4 shadow-sm flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-2xl pb-1">{contact.name}</h2>
        <p>{contact.city}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="text-white cursor-pointer bg-blue-500 px-3 rounded py-1
          hover:bg-blue-700 mx-3"
          onClick={() => onEdit(contact.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
