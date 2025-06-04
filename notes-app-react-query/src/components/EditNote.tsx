import React from 'react';

interface EditNoteProps {
  note?: {
    id: string;
    content: string;
  };
  onSave?: (note: { id: string; content: string }) => void;
}

const EditNote: React.FC<EditNoteProps> = (/*{ note, onSave }*/) => {
  return <>Edit note </>;
};

export default EditNote; 