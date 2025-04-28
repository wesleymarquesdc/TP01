import { db, auth, storage } from "./firebase"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy } from "firebase/firestore";

const ITENS_COLLECTION = "itens";
const PHOTOS_FOLDER = "itensPhoto";

// utiliza snapshot para "escutar" o banco
export const getItensFromDB = (callback, onlyOwn = false) => {
  const itensCollectionsRef = collection(db, ITENS_COLLECTION);
  
  let q;
  if (onlyOwn) {
    q = query(
      itensCollectionsRef,
      where("userId", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );
  } else {
    q = query(
      itensCollectionsRef,
      orderBy("createdAt", "desc")
    );
  }
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const itens = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    callback(itens);
  });
  
  return unsubscribe;
};

const uploadPhoto = async (itemPhoto) => {
  let photoURL = null
  const storageRef = ref(storage, `${PHOTOS_FOLDER}/${itemPhoto.name}-${Date.now()}`);

  try{
    const uploadResult = await uploadBytes(storageRef, itemPhoto);
    photoURL = await getDownloadURL(uploadResult.ref);
  } catch(err){
    console.log(err)
  }

  return photoURL;
}

export const saveItemToDB = async (item) => {
  try {
    const itensCollectionRef = collection(db, ITENS_COLLECTION);

    let photoURL = null
    if(item.photo) {
      photoURL = await uploadPhoto(item.photo)
    }
    
    const docRef = await addDoc(itensCollectionRef, {
      ...item,
      photo: photoURL,
      createdAt: serverTimestamp(),
      userId: auth?.currentUser?.uid
    });
    return docRef.id;

  } catch (err) {
    console.log(err)

    return null;
  }
};