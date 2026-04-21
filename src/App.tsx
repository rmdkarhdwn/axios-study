import Main from "./screens/MainScreen";
import Userdeta from "./screens/UserDetailScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:id" element={<Userdeta />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
