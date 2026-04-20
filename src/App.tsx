import Main from "./screens/MainScreen"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Main></Main>
    </QueryClientProvider>
  )
}

export default App
