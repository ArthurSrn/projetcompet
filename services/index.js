"use client"

import {addDoc,collection, getDocs, Timestamp } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig";




export const sendContactForm = async ({ name, email, comment }) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      name,
      email,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err)
    return -1;
  }
};



export const fetchLogementData = async () => {
  try {
    const citiesRef = collection(firestore, "filtre");
    const snapshot = await getDocs(citiesRef);
    const logementData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return logementData;
  } catch (err) {
    console.log(err);
    return [];
  }
};