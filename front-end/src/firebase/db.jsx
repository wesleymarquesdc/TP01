import { v4 as uuid } from "uuid"
import { db, auth, storage } from "./firebase"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc, addDoc, updateDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy, arrayUnion, Timestamp } from "firebase/firestore";

const USERCHATS_COLLECTION = "userChats"
const CHATS_COLLECTION = "chats"
const USERS_COLLECTION = "users";
const ITENS_COLLECTION = "itens";
const PHOTOS_FOLDER = "itensPhoto";

export const getChatMessagesFromDB = (chatId, callback) => {
  const chatMessagesDocRef = doc(db, CHATS_COLLECTION, chatId);
  
  const unsubscribe = onSnapshot(chatMessagesDocRef, (doc) => {
    const chatMessages = doc.data()
    const chatMessagesArray = chatMessages.messages
    callback(chatMessagesArray);
  });
  
  return unsubscribe;
};

export const getUserChatsFromDB = (callback) => {
  const userChatsDocRef = doc(db, USERCHATS_COLLECTION, auth.currentUser.uid);
  
  const unsubscribe = onSnapshot(userChatsDocRef, (doc) => {
    const userChats = doc.data()
    const userChatsArray = Object.keys(userChats)
                        .filter(key => key !== 'userId')
                        .map(chatId => ({
                          userId: userChats[chatId].userInfo?.userId,
                          displayName: userChats[chatId].userInfo?.displayName,
                          date: userChats[chatId].date
                        }))
                        .sort((a, b) => {
                          const dateA = a.date?.toDate?.() ?? new Date(0);
                          const dateB = b.date?.toDate?.() ?? new Date(0);
                          return dateB - dateA;
                        });
    callback(userChatsArray);
  });
  
  return unsubscribe;
};

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
      userId: auth.currentUser.uid, 
      displayName: auth.currentUser.displayName
    });
    return docRef.id;

  } catch (err) {
    console.log(err)

    return null;
  }
};

export const saveUserToDB = async (user) => {
  try {
    const userDocRef = doc(db, USERS_COLLECTION, user.uid);
    const userChatsDocRef = doc(db, USERCHATS_COLLECTION, user.uid);

    await setDoc(userDocRef, {
      displayName: user.displayName,
      email: user.email,
      userId: user.uid
    });

    await setDoc(userChatsDocRef, {
      userId: user.uid
    });

  } catch (err) {
    console.log(err)
  }
};

export const saveChatToDB = async (userId, userDisplayName) => {
  const combinedID = 
    auth.currentUser.uid > userId 
      ? auth.currentUser.uid + userId 
      : userId + auth.currentUser.uid;
      
  try {
    const chatDocRef = doc(db, CHATS_COLLECTION, combinedID);
    const currentUserChatsDocRef = doc(db, USERCHATS_COLLECTION, auth.currentUser.uid);
    const otherUserChatsDocRef = doc(db, USERCHATS_COLLECTION, userId);

    const res = await getDoc(chatDocRef);
    if(!res.exists()){
      await setDoc(chatDocRef, {
        messages: [],
      });

      await updateDoc(currentUserChatsDocRef, {
        [combinedID+".userInfo"]: {
          userId: userId,
          displayName: userDisplayName
        },
        [combinedID+".date"]: serverTimestamp()
      })

      await updateDoc(otherUserChatsDocRef, {
        [combinedID+".userInfo"]: {
          userId: auth.currentUser.uid,
          displayName: auth.currentUser.displayName
        },
        [combinedID+".date"]: serverTimestamp()
      })
    }

  } catch (err) {
    console.log(err)
  }
};

export const saveMessageToDB = async (chatId, text) => {
  try {
    const chatDocRef = doc(db, CHATS_COLLECTION, chatId);

    await updateDoc(chatDocRef, {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: auth.currentUser.uid,
        date: Timestamp.now()
      }),
    })

  } catch (err) {
    console.log(err)
  }
};