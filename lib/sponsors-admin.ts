import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDb } from "./firebase";

export type SponsorSignup = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  sponsorship: string;
  problem: string;
  wantsWorkshop: boolean;
  createdAt: Date | null;
};

export async function getSponsorSignups(): Promise<SponsorSignup[]> {
  const snapshot = await getDocs(
    query(collection(getDb(), "sponsors"), orderBy("createdAt", "desc")),
  );

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name as string,
      email: data.email as string,
      phone: (data.phone as string | undefined) ?? "—",
      company: (data.company as string | undefined) ?? "—",
      sponsorship: (data.sponsorship as string | undefined) ?? "—",
      problem: (data.problem as string | undefined) ?? "—",
      wantsWorkshop: Boolean(data.wantsWorkshop),
      createdAt: data.createdAt?.toDate?.() ?? null,
    };
  });
}
