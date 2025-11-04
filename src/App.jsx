import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Componentes/views/Home.jsx";
import { Menu } from "./Componentes/shared/Menu.jsx";
import { Footer } from "./Componentes/shared/Footer.jsx";
import { BrowserRouter,Routes,Route } from "react-router";
function App() {
  return (
    <>
     <BrowserRouter>
        <Menu/>
        <main>
          <Routes>
          <Route path="" element={<Home/>}></Route>
          </Routes>
        </main>
        <Footer />
     </BrowserRouter>  
    </>
  );
}

export default App;
