import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C59AE",
    },
    error: {
      main: "#ac0d14",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <AllRoutes />
    </ThemeProvider>
  );
}

export default App;