import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgVwRYSc9YeYO2U9RSkIyxk5bpMO0J9HE",
  authDomain: "react-coderhouse-60df6.firebaseapp.com",
  projectId: "react-coderhouse-60df6",
  storageBucket: "react-coderhouse-60df6.firebasestorage.app",
  messagingSenderId: "433050470592",
  appId: "1:433050470592:web:f9d2deb54647691e38c525",
  measurementId: "G-V0MBFZCBG9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de Firestore
const db = getFirestore(app);
export default db;