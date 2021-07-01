import "./App.css";
import Contacts from "./components/contact/Contacts";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddContact from "./components/contact/AddContact";
import EditContact from "./components/contact/EditContact";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/addContact" exact component={AddContact} />
          <Route path="/edit/:id" exact component={EditContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
