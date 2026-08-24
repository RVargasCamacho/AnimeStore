import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createOrder = async (orderData) => {
  const ordersCollection = collection(db, 'orders');
  const date =  Timestamp.now();

  const orderDocument = await addDoc(ordersCollection, {
    ...orderData,
    date
  });

  return {
    id: orderDocument.id,
    ...orderData,
    date
  };
};