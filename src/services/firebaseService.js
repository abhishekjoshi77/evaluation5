
import app from "../firebase-config";
import { getDatabase, ref, push, remove, onValue } from "firebase/database";

const db = getDatabase(app);

export const addNote = async (note) => {
  const notesRef = ref(db, 'notes/');
  await push(notesRef, note);
};

export const deleteNote = async (id) => {
  const noteRef = ref(db, `notes/${id}`);
  await remove(noteRef);
};

export const fetchNotes = (callback) => {
  const notesRef = ref(db, 'notes/');
  onValue(notesRef, (snapshot) => {
    const data = snapshot.val();
    callback(data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []);
  });
};
