import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GenreProvider } from './context/GenreContext.tsx';
import { BookMarkProvider } from './context/BookMarkContext.tsx';
const queryClient = new QueryClient()
createRoot(document.getElementById("root")!).render(
  <BookMarkProvider>
    <GenreProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </GenreProvider>
  </BookMarkProvider>
);
