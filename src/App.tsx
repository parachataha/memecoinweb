import { useEffect } from "react";
import {
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Particle from "./pages/Particle";

function App() {
  
  return (
    <div>
      <Particle/>
      <Home/>

    </div>
    
  );
}
export default App;
