
import { useRef } from "react";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";

export default function NoteForm({ onAdd }) {
  const titleRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    if (title && content) {
      onAdd({ title, content });
      titleRef.current.value = "";
      contentRef.current.value = "";
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={6}>
      <Input ref={titleRef} placeholder="Title" mb={2} />
      <Textarea ref={contentRef} placeholder="Content" mb={2} />
      <Button type="submit" colorScheme="teal">Add Note</Button>
    </Box>
  );
}
