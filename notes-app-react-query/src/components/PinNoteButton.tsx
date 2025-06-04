import React from 'react';

interface PinNoteButtonProps {
  id?: string;
  is_pinned?: boolean;
}

const PinNoteButton: React.FC<PinNoteButtonProps> = (/*{ id, is_pinned }*/) => {
  return <>Pin note</>;
};

export default PinNoteButton; 