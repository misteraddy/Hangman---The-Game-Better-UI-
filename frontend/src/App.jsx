import "./App.css";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import HomeContainer from "./pages/Home/HomeContainer";


const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/"
          element={<RootLayout />}
        >
          <Route path="/home" element={<HomeContainer />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;