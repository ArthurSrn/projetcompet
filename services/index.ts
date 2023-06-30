import { collection, getDocs, Firestore, DocumentData, QuerySnapshot } from "firebase/firestore";


export const fetchLogementData = async (firestore: Firestore): Promise<DocumentData[]> => {
  try {
    const citiesRef = collection(firestore, "filtre");
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(citiesRef);
    const logementData: DocumentData[] = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return logementData;
  } catch (err: any) {
    console.log(err);
    return [];
  }
};
