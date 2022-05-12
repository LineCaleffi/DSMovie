import Listing from "pages/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from 'pages/Form';

function App() {
  return (
    // BrowserRouter é um componente responsável por informar a nossa aplicação 
    // que teremos um roteamento de componentes
    <BrowserRouter>
      <Navbar />
      {/* Routes: componente que associa a rota ao componente.
          Nele temos três parâmetros: component, path e exact.*/}
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
