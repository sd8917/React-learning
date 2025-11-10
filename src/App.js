import { ThemeProvider } from "./components/themeContext";
import Header from "./Header";

function App() {
  return (
   <ThemeProvider>
    <Header />
  </ThemeProvider>
  );
}

export default App;
