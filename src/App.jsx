import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <LandingPage />
    </>
  );
}

export default App;
