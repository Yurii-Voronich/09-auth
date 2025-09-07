import { Note } from "@/types/note";
import { User } from "@/types/user";
import axios from "axios";
import { nextServer } from "./api";

interface NoteResp {
  notes: Note[];
  totalPages: number;
}
interface fetchNotesProps {
  page: number;
  search?: string;
  tag?: string;
  perPage: number;
}
export default async function fetchNotes(
  page: number,
  searchQuery?: string,
  tag?: string
): Promise<NoteResp> {
  const params: fetchNotesProps = {
    page,
    perPage: 12,
  };

  if (searchQuery) params.search = searchQuery;
  if (tag) params.tag = tag;

  const res = await axios.get<NoteResp>("/notes", { params });
  return res.data;
}

export interface NewNote {
  title: string;
  content: string;
  tag: string;
}
export async function createNote(newNoteData: NewNote) {
  const resp = await axios.post<Note>("/notes", newNoteData);
  return resp.data;
}

export async function deleteNote(id: string) {
  const resp = await axios.delete<Note>(`/notes/${id}`);
  return resp.data;
}

export async function fetchNoteById(id: string) {
  const resp = await axios.get<Note>(`/notes/${id}`);
  return resp.data;
}
// AUTH LOGIC
export interface Credentials {
  email: string;
  password: string;
}
export async function register(credentials: Credentials) {
  const { data } = await nextServer.post<User>("/auth/register", credentials);
  return data;
}

export async function login(credentials: Credentials) {
  const { data } = await nextServer.post<User>("/auth/login", credentials);
  return data;
}

export const logout = async () => {
  await nextServer.post<User>("/auth/logout");
};
