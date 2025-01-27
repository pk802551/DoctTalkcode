import logo from './logo.svg';
import './App.css';
import Routing from './config/Routing';


import { createTheme, ThemeProvider } from "@mui/material/styles"

function App() {
 
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#1B4D3E",
    },
    secondary: {
      main: "#FF4500",
    },
  },
})
  return (
    <div className="App">
         <ThemeProvider theme={theme}>
       <Routing/>
       </ThemeProvider>
    </div>
  );
}

export default App;
