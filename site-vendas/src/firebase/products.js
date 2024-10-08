import { firestore } from './firebase';

// Função para obter produtos do Firestore
export const getProducts = async () => {
  try {
    const snapshot = await firestore.collection('products').get();
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
};

// Função para adicionar um novo produto ao Firestore
export const addProduct = async (product) => {
  try {
    const docRef = await firestore.collection('products').add(product);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
};
