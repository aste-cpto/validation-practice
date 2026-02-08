import { PhoneTask } from './pages/PhoneTask';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex min-h-screen bg-gray-50">
       
        <main className="flex-1 flex items-center justify-center p-4">
          <PhoneTask />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;