import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";
import { API_URL } from "../../ConstApiKey";

export const useEditNote = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updateNote }) =>
            axios.put(`${API_URL}/notes/${id}`, updateNote),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] })
        }
    });
};