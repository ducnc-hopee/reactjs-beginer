import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../ConstApiKey";

export const useGetNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      axios.get(`${API_URL}/notes`).then((res) => res.data)
  });
};