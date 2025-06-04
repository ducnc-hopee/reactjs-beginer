import PersonCard from "./components/PersonCard";
import EditPersonForm from "./components/EditPersonForm";
import AddPersonForm from "./components/AddPersonForm";
import { useContact} from "./hooks/useContact";


function App() {
  const { contacts, contactIdBeingEdited, setContactIdBeingEdited, handleAddContact, handleUpdateContact, handleDeleteContact } = useContact();

  return (
    <div className="bg-gray-200 p-4 min-h-dvh dark:bg-gray-800">
      <div className="container mx-auto">
        <h1 className="text-3xl pt-6">Contact Book</h1>
        <p>Keep track of where your friends live</p>
        <AddPersonForm onSubmit={handleAddContact} />
        <div className="grid grid-cols-3 gap-4 ">
          {contacts.map((contact) =>
            contactIdBeingEdited && contactIdBeingEdited === contact.id ? (
              <EditPersonForm
                key={contact.id}
                contact={contact}
                onSave={handleUpdateContact}
                onCancel={() => setContactIdBeingEdited(null)}
                onDelete={handleDeleteContact}
              />
            ) : (
              <PersonCard
                key={contact.id}
                contact={contact}
                onEdit={(id) => setContactIdBeingEdited(id)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
