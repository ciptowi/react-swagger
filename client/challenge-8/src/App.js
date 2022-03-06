import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <Routes>
              <Route path="/" element={<PlayerList />}></Route>
              <Route path="add" element={<AddPlayer />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
