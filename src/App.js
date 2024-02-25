import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./layout/nav-bar";
import Owners from "./owners/Owners";
import AddNewOwner from "./owners/AddNewOwner";
import EditOwner from "./owners/EditOwner";
import ViewOwner from "./owners/ViewOwner";


function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Owners/>} />
          <Route exact path="/addowner" element={<AddNewOwner/>} />
          <Route exact path="/editowner/:id" element={<EditOwner/>} />
          <Route exact path="/viewowner/:id" element={<ViewOwner/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
