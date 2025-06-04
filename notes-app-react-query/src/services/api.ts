import axios from "axios";
import { Note } from '../types/note'

const API_URL = 'http://localhost:3000';

export const api = {
    getNotes: async (): Promise<Note[]> => {
        const reponse = await axios.get(`${API_URL}/notes`);
        return reponse.data;
    },

    createNote: async (note: Omit<Note, 'id'>): Promise<Note> => {
        const response = await axios.post(`${API_URL}/notes`, note);
        return response.data;
    },

    updateNote: async (id: string, note: Partial<Note>): Promise<Note> => {
        const response = await axios.patch(`${API_URL}/notes/${id}`, note);
        return response.data;
    },

    deleteNote: async (id: string): Promise<void> => {
        await axios.delete(`${API_URL}/notes/${id}`);
    },
};