
import { Box, Text, Button } from "@chakra-ui/react";

export default function NoteCard({ note, onDelete }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" mb={4}>
      <Text fontSize="xl" fontWeight="bold">{note.title}</Text>
      <Text mt={2}>{note.content}</Text>
      <Button colorScheme="red" mt={4} onClick={() => onDelete(note.id)}>
        Delete
      </Button>
    </Box>
  );
}
