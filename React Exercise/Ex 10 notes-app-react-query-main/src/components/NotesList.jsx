import { useGetNotes } from "../services/api/Get-note.jsx";
import DeleteButton from "./DeleteNoteButton.jsx";
import EditNote from "./EditNote.jsx";
import { useState } from "react";
import PinNoteButton from "./PinNoteButton.jsx";

const NotesList = () => {
  const { data: notes, isLoading, isError } = useGetNotes();
  const [editingId, setEditingId] = useState(null);

  if (isLoading) return <p>Loading notes...</p>;
  if (isError) return <p>Error loading notes</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Notes</h2>
      {notes
        .slice()
        .sort((a, b) => b.pinned - a.pinned || b.id - a.id) // pinned first
        .map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              backgroundColor: "#fffde7",
            }}
          >
            {editingId === note.id ? (
              <EditNote
                note={note}
                onFinish={() => setEditingId(null)}
              />
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h3>{note.title}</h3>
                  <PinNoteButton note={note} />
                </div>
                <p>{note.content}</p>
                <button onClick={() => setEditingId(note.id)}>Edit</button>
              </>
            )}

            <DeleteButton noteId={note.id} />
          </div>
        ))}
    </div>
  );
};

export default NotesList;