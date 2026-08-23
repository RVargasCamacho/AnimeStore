import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

// Obtener todos los productos de la base de datos de Firebase
export const getProducts = async () => {
  // accedemos a la colección de productos
  const productCollection = collection(db, 'productos');
  // obtenemos todos los documentos de la colección
  const querySnapshot = await getDocs(productCollection);

  // mapeamos cada documento a un objeto con sus propiedades
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductsByCategory = async (category) => {
  const productCollection = collection(db, 'productos');

  const categoryQuery = query(
    productCollection,
    where('category', '==', category),
  );

  const querySnapshot = await getDocs(categoryQuery);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
