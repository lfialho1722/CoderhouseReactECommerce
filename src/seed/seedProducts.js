import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
      id: "Fo72G4",
      name: "Freídora de aire",
      description: "Freidora eléctrica de funcionamiento a base de aire",
      stock: 8,
      price: 2100,
      image: "/img/freidora.jpeg",
      category: "hogar"
    },
    {
      id: "Kt84Q9",
      name: "Licuadora de alta potencia",
      description: "Licuadora con motor de 1200W, ideal para batidos y salsas.",
      stock: 12,
      price: 2800,
      image: "/img/batidora.jpeg",
      category: "hogar"
    },
    {
      id: "Np63Y8",
      name: "Cafetera de goteo",
      description: "Cafetera automática con capacidad para 10 tazas.",
      stock: 20,
      price: 2900,
      image: "/img/cafetera.jpeg",
      category: "hogar"
    },
    {
      id: "Rt85F3",
      name: "Ventilador de torre",
      description: "Ventilador con control remoto y múltiples velocidades.",
      stock: 7,
      price: 1750,
      image: "/img/ventilador.jpeg",
      category: "hogar"
    },
    {
      id: "El92R1",
      name: "Auriculares inalámbricos",
      description: "Auriculares Bluetooth con cancelación de ruido activa.",
      stock: 15,
      price: 4500,
      image: "/img/auriculares.jpeg",
      category: "electrónica"
    },
    {
      id: "El64X5",
      name: "Teclado mecánico",
      description: "Teclado mecánico con retroiluminación RGB y switches rojos.",
      stock: 10,
      price: 3200,
      image: "/img/teclado.jpeg",
      category: "electrónica"
    },
    {
      id: "El23P8",
      name: "Monitor 24 pulgadas",
      description: "Monitor Full HD con tasa de refresco de 144Hz.",
      stock: 5,
      price: 9200,
      image: "/img/monitor.jpeg",
      category: "electrónica"
    },
    {
      id: "El75Z4",
      name: "Cámara web HD",
      description: "Cámara web con resolución 1080p y micrófono integrado.",
      stock: 25,
      price: 1600,
      image: "/img/camara.jpeg",
      category: "electrónica"
    },
    {
      id: "Be14C7",
      name: "Refresco de cola 1.5L",
      description: "Refresco de cola con gas, ideal para acompañar comidas.",
      stock: 60,
      price: 120,
      image: "/img/coca.jpeg",
      category: "bebidas"
    },
    {
      id: "Be23M5",
      name: "Bebida energética 500ml",
      description: "Bebida energética con alto contenido de cafeína y vitaminas B.",
      stock: 35,
      price: 110,
      image: "/img/energetica.jpeg",
      category: "bebidas"
    },
    {
      id: "Be98S2",
      name: "Té helado sabor limón 1L",
      description: "Té helado refrescante con un toque de limón.",
      stock: 45,
      price: 170,
      image: "/img/limon.jpeg",
      category: "bebidas"
    },
    {
      id: "Be45J9",
      name: "Refresco sabor naranja 2L",
      description: "Refresco con sabor a naranja, ideal para compartir.",
      stock: 50,
      price: 120,
      image: "/img/naranja.jpeg",
      category: "bebidas"
    }
  ]

  const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct } ) => {
        addDoc(productsRef, dataProduct)
    })
  }

  seedProducts()