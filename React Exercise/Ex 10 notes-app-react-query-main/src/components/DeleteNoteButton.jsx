import { useDeleteNote} from "../services/api/Delete-Note"; /* custom hook from delete-note.js */


export default function DeleteButton({ noteId }) {
  const deleteNote =useDeleteNote();
  
  const handleDelete = () => {
    deleteNote.mutate(noteId); /* receivesnoteID as prop, ID of note that needs to be deleted */
  };

  return(
    <button onClick={handleDelete} disabled={deleteNote.isPending}>
      Delete
    </button>
  );
} 