import { addDoc, collection, doc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createOrder = async (orderData) => {
  const ordersCollection = collection(db, 'orders');
  const date = Timestamp.now();

  const orderDocument = await addDoc(ordersCollection, {
    ...orderData,
    date,
  });

  return {
    id: orderDocument.id,
    ...orderData,
    date,
  };
};

export const getOrderByID = async (orderId) => {
  const orderRef = doc(db, 'orders', orderId);

  const orderSnapshot = await getDoc(orderRef);

  if (!orderSnapshot.exists()) {
    return null;
  }

  return {
    id: orderSnapshot.id,
    ...orderSnapshot.data(),
  };
};
