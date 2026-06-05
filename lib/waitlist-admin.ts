import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDb } from "./firebase";

export type WaitlistSignup = {
  id: string;
  name: string;
  email: string;
  createdAt: Date | null;
};

export async function getWaitlistSignups(): Promise<WaitlistSignup[]> {
  const snapshot = await getDocs(
    query(collection(getDb(), "waitlist"), orderBy("createdAt", "desc")),
  );

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name as string,
      email: data.email as string,
      createdAt: data.createdAt?.toDate?.() ?? null,
    };
  });
}
