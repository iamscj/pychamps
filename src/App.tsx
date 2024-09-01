import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultComponents/DefaultLayout";
import Home from "./pages/Home";
import PythonPdfViewer from "./pages/PythonPdfViewer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <ThemeProvider theme={darkTheme}>
      {isDarkMode && <CssBaseline />}
      <Router>
        <DefaultLayout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/python-course" element={<PythonPdfViewer />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
