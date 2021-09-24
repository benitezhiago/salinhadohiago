import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { Flip, ToastContainer } from "react-toastify";
import { NewRoom } from "./pages/NewRoom";
// import { Room } from './pages/Room';
// import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminRoom } from "./pages/AdminRoom";

function App() {
  return (
    <>
      <ToastContainer transition={Flip} limit={1} />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
