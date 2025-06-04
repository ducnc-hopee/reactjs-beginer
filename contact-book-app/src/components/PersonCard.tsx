import { PersonCardProps } from "../types/useProps";

const PersonCard: React.FC<PersonCardProps> = ({ contact, onEdit }) => {
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm min-h-44">
      <div className="card-body">
        <h2 className="card-title">{contact.name}</h2>
        <p>{contact.city}</p>
        <div className="justify-end card-actions">
          <button className="btn" onClick={() => onEdit(contact.id)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
