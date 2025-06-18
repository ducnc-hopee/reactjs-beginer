import { useEditNote } from "../services/api/Edit-Note";

export default function PinNoteButton({ note }) {
  const editNote = useEditNote();

  const handlePinToggle = () => {
    editNote.mutate({
      id: note.id,
      updateNote: {
        ...note,
        pinned: !note.pinned, // Toggle pin
      },
    });
  };

  return (
    <button onClick={handlePinToggle}>
      {note.pinned ? "Unpin" : "Pin"}
    </button>
  );
}