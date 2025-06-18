import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../ConstApiKey";

export const useDeleteNote = () => {
    const queryClient = useQueryClient();


    return useMutation({
        mutationFn: (id) => axios.delete(`${API_URL}/notes/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] });
        }
    });
};