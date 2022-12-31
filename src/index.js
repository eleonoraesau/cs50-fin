import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import NoPage from "./pages/NoPage";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function App() {
   return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="results" element={<Results />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
   );
  }

  ReactDOM.render(<App />, document.getElementById("root"));
