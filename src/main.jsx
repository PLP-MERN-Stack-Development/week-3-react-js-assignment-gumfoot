import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and components
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Tasks from "./pages/Tasks.jsx";
import PostList from "./pages/PostList.jsx";
import Layout from "./components/Layout.jsx";

// Theme context
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Global styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="posts" element={<PostList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
