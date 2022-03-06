import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./components/EditPlayer";
import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="row justify-content-center">
          <div className="col">
            <Routes>
              <Route path="/" element={<PlayerList />}></Route>
              <Route path="add" element={<AddPlayer />}></Route>
              <Route path="edit" element={<EditPlayer />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
