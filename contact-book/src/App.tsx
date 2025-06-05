import "./App.css";
import AddCard from "./components/AddCard";
import EditCard from "./components/EditCard";
import PersonCard from "./components/PersonCard";
import { useHandlers } from "./utils/handlers";

function App() {
  const {
    contacts,
    contactBeingEdited,
    setContactBeingEdited,
    handleAddContact,
    handleUpdateContact,
    handleDeleteContact,
  } = useHandlers();
  return (
    <>
    <div className="bg-gray-400 p-4 min-h-dvh">
      <div className="m-11 pt-6">
        <h1 className="text-3xl">Contact Book</h1>
        <p>Keep track of where your friends live</p>
      </div>
        <div>
          <AddCard onSubmit={handleAddContact} />
        </div>
      <div className="grid grid-cols-3 gap-4">
        {contacts.map((contact) =>
          contactBeingEdited && contactBeingEdited === contact.id ? (
            <EditCard
              key={contact.id}
              contact={contact}
              onSave={handleUpdateContact}
              onCancel={() => setContactBeingEdited(null)}
              onDelete={handleDeleteContact}
            />
          ) : (
            <PersonCard
              key={contact.id}
              contact={contact}
              onEdit={(id) => setContactBeingEdited(id)}
            />
          )
        )}
      </div>
    </div>
    </>
  );
}

export default App;
