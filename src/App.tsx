import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorDisplay } from './components';
import { HomeScreen } from './screens';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ErrorBoundary fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorDisplay error={error} resetErrorBoundary={resetErrorBoundary} />
        )}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </QueryClientProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;