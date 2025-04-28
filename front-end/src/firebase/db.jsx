import { db } from "./firebase"; 
import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";

// utiliza snapshot para "escutar" o banco
export const getItensFromDB = (callback) => {
    const itensCollectionsRef = collection(db, "itens");
    const q = query(itensCollectionsRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const itens = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        callback(itens);
    });

    return unsubscribe;
};

export const saveItemToDB = async (item) => {
    try {
      const itensCollectionRef = collection(db, "itens");

      const docRef = await addDoc(itensCollectionRef, {
        ...item,
        createdAt: serverTimestamp()
      });
      return docRef.id;
    } catch (err) {
      console.log(err)
      return null;
    }
  };