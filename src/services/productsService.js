import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const COLLECTION_NAME = 'products';

// Obtener todos los productos de la base de datos de Firebase
export const getProducts = async () => {
  // accedemos a la colección de productos
  const productCollection = collection(db, COLLECTION_NAME);
  // obtenemos todos los documentos de la colección
  const querySnapshot = await getDocs(productCollection);

  // mapeamos cada documento a un objeto con sus propiedades
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductsByCategory = async (category) => {
  const productCollection = collection(db, COLLECTION_NAME);

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

export const getProductById = async (productId) => {
  const productRef = doc(db, COLLECTION_NAME, productId);

  const productSnapshot = await getDoc(productRef);

  if (!productSnapshot.exists()) {
    return null;
  }

  return {
    id: productSnapshot.id,
    ...productSnapshot.data(),
  };
};

export const checkProductsStock = async (items) => {
  await Promise.all(
    items.map(async (item) => {
      const productRef = doc(db, COLLECTION_NAME, item.id);
      const productSnapshot = await getDoc(productRef);

      if (!productSnapshot.exists()) {
        throw new Error(`Producto ${item.title} no encontrado`);
      }

      const product = productSnapshot.data();

      if (product.stock < item.quantity) {
        throw new Error(`Stock insuficiente para el producto: ${item.title}`);
      }
    }),
  );
};

export const updateProductStock = async (productId, quantity) => {
  const productRef = doc(db, COLLECTION_NAME, productId);

  const productSnapshot = await getDoc(productRef);

  if (!productSnapshot.exists()) {
    throw new Error('Producto no encontrado');
  }

  const product = productSnapshot.data();

  const newStock = product.stock - quantity;

  if (newStock < 0) {
    throw new Error('Stock insuficiente');
  }

  await updateDoc(productRef, {
    stock: newStock,
  });
};


