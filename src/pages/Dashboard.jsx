// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { addNote, deleteNote, fetchNotes } from "../services/firebaseService";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  const handleAdd = async (note) => {
    await addNote(note);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
  };

  return (
    <Container maxW="container.md" mt={6}>
      <Heading mb={6}>Your Notes</Heading>
      <NoteForm onAdd={handleAdd} />
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </Container>
  );
}
