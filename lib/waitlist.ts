import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDb } from "./firebase";

function emailToDocId(email: string) {
  return email.toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function firestoreErrorMessage(error: unknown) {
  const code =
    error && typeof error === "object" && "code" in error
      ? String(error.code)
      : "";

  if (code === "permission-denied") {
    return "Firestore blocked this signup. Publish the waitlist security rules in Firebase Console → Firestore → Rules.";
  }

  if (code === "not-found" || code === "failed-precondition") {
    return "Firestore is not set up yet. Create a Firestore database in Firebase Console first.";
  }

  if (code === "unavailable") {
    return "Could not reach Firestore. Check your internet connection and try again.";
  }

  return "Something went wrong. Please try again.";
}

export async function joinWaitlist(name: string, email: string) {
  const trimmedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (trimmedName.length < 2) {
    throw new Error("Please enter your name.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  const db = getDb();

  try {
    await setDoc(doc(db, "waitlist", emailToDocId(normalizedEmail)), {
      name: trimmedName,
      email: normalizedEmail,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Firestore waitlist write failed:", error);
    throw new Error(firestoreErrorMessage(error));
  }
}
