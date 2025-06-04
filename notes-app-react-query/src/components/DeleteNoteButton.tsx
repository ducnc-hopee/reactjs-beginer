import React from 'react';

interface DeleteNoteButtonProps {
  id: string;
}

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({ id }) => {
  return <>Delete note button {id}</>;
};

export default DeleteNoteButton; 