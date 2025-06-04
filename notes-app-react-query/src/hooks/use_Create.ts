import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useState } from "react";

function useCreate({onAdd}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        await onAdd({
            title: title.trim(),
            content: content.trim(),
            is_pinned: false,
        });

        setTitle('');
        setContent('')
    };

    return {
        handleSubmit
    }
}

export default useCreate;