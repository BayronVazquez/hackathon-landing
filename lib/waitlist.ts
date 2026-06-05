import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDb } from "./firebase";

export type WaitlistResult = {
  alreadyRegistered: boolean;
};

function emailToDocId(email: string) {
  return email.toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function firestoreErrorCode(error: unknown) {
  return error && typeof error === "object" && "code" in error
    ? String(error.code)
    : "";
}

function firestoreErrorMessage(error: unknown) {
  const code = firestoreErrorCode(error);

  if (code === "not-found" || code === "failed-precondition") {
    return "Firestore is not set up yet. Create a Firestore database in Firebase Console first.";
  }

  if (code === "unavailable") {
    return "Could not reach Firestore. Check your internet connection and try again.";
  }

  return "Something went wrong. Please try again.";
}

export async function joinWaitlist(
  name: string,
  email: string,
): Promise<WaitlistResult> {
  const trimmedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (trimmedName.length < 2) {
    throw new Error("Please enter your name.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  const db = getDb();
  const docRef = doc(db, "waitlist", emailToDocId(normalizedEmail));

  try {
    const existing = await getDoc(docRef);
    if (existing.exists()) {
      return { alreadyRegistered: true };
    }

    await setDoc(docRef, {
      name: trimmedName,
      email: normalizedEmail,
      createdAt: serverTimestamp(),
    });

    return { alreadyRegistered: false };
  } catch (error) {
    console.error("Firestore waitlist write failed:", error);
    throw new Error(firestoreErrorMessage(error));
  }
}
