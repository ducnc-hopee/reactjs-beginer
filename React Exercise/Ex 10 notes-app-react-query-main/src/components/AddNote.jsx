import { useState } from "react";
import { useCreateNote } from "../services/api/Create-Note";
import toast from "react-hot-toast";

const AddNote = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const createNoteMutation = useCreateNote();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Both fields are required.")
      return;
    }

    console.log("Submitted: ", { title, content });

    createNoteMutation.mutate(
      { title, content },
      {
        onSuccess: () => {
          toast.success("Note added!");
          setTitle("");
          setContent("");
          setError("");
        },
        onError: () => {
          toast.error("Error creating notes.");
        }
      }
    );
  };


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "30px",
        borderRadius: "8px",
        width: "400px",// restrict width 
        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)"
      }}
    >
      {/* Error message (optional) */}
      {error && <span style={{ color: "red" }}>{error}</span>}
      {/* Title input */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Content textarea */}
      <textarea
        placeholder="Take a note ...."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
      ></textarea>

      {/* Submit Button */}
      <button type="submit"> Add note </button>
    </form>
  )
};

export default AddNote;
