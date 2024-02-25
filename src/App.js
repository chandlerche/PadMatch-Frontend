import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./layout/nav-bar";
import Owners from "./owners/Owners";
import AddNewOwner from "./owners/AddNewOwner";
import EditOwner from "./owners/EditOwner";


function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Owners/>} />
          <Route exact path="/addowner" element={<AddNewOwner/>} />
          <Route exact path="/editowner/:id" element={<EditOwner/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
