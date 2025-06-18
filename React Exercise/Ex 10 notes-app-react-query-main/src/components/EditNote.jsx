import { useState } from "react";
import { useEditNote } from "../services/api/Edit-Note";

export default function EditNote({ note, onFinish }) {
  const editNote = useEditNote();
  const [editedTitle, setEditedTitle] = useState(note.title || "");
  const [editedContent, setEditedContent] = useState(note.content || "");

  const handleSave = () => {
    if (!editedTitle.trim() || !editedContent.trim()) {
      alert("Both title and content are required.");
      return;
    }

    editNote.mutate(
      {
        id: note.id,
        updateNote: {
          ...note,
          title: editedTitle,
          content: editedContent,
        },
      },
      {
        onSuccess: () => {
          onFinish();
        },
      }
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <textarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <div>
        <button onClick={handleSave} disabled={editNote.isPending}>
          {editNote.isPending ? "Saving..." : "Save"}
        </button>
        <button onClick={onFinish}>Cancel</button>
      </div>
    </div>
  );
}