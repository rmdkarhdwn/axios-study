import Main from "./screens/MainScreen";
import Userdeta from "./screens/UserDetailScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/user/:id" element={<Userdeta theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
