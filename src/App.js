
import {Routes,Route} from "react-router-dom";
import Login from "./componants/Login";
import Profile from "./componants/Profile";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
