
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
