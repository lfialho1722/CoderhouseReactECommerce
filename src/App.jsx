import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenido a la tienda!"}/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Categoría seleccionada"}/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
