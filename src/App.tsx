import "./App.css";
import DataTable from "./components/pages/table";
import RandomQuotes from "./components/pages/random";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/pages/random.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/random" element={<RandomQuotes />} />
      </Routes>
    </Router>
  );
}

export default App;
