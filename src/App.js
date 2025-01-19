import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import FirstMeetingPage from "./pages/FirstMeetingPage";
import HomePage from "./pages/HomePage";
import SecondMeetingPage from "./pages/SecondMeetingPage";
import TrainingTeluguPage from "./pages/TrainingTeluguPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/first-meeting" element={<FirstMeetingPage />} />
        <Route path="/second-meeting" element={<SecondMeetingPage />} />
        <Route path="/train" element={<TrainingTeluguPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
