import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDb } from "./firebase";

export type WorkshopOption = "yes" | "no";

export const WORKSHOP_OPTIONS: WorkshopOption[] = ["yes", "no"];

export type SponsorInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  sponsorship: string;
  problem: string;
  workshop: string;
};

export type SponsorResult = {
  alreadyRegistered: boolean;
};

export type SponsorErrorMessages = {
  invalidName: string;
  invalidEmail: string;
  invalidPhone: string;
  invalidCompany: string;
  invalidSponsorship: string;
  invalidProblem: string;
  invalidWorkshop: string;
  firestoreSetup: string;
  unavailable: string;
  generic: string;
};

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function isValidPhone(phone: string) {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 15;
}

function emailToDocId(email: string) {
  return email.toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function isValidWorkshop(workshop: string): workshop is WorkshopOption {
  return WORKSHOP_OPTIONS.includes(workshop as WorkshopOption);
}

function firestoreErrorCode(error: unknown) {
  return error && typeof error === "object" && "code" in error
    ? String(error.code)
    : "";
}

function firestoreErrorMessage(
  error: unknown,
  messages: SponsorErrorMessages,
) {
  const code = firestoreErrorCode(error);

  if (code === "not-found" || code === "failed-precondition") {
    return messages.firestoreSetup;
  }

  if (code === "unavailable") {
    return messages.unavailable;
  }

  return messages.generic;
}

export async function registerSponsor(
  input: SponsorInput,
  messages: SponsorErrorMessages,
): Promise<SponsorResult> {
  const trimmedName = input.name.trim();
  const normalizedEmail = input.email.trim().toLowerCase();
  const normalizedPhone = normalizePhone(input.phone);
  const trimmedCompany = input.company.trim();
  const trimmedSponsorship = input.sponsorship.trim();
  const trimmedProblem = input.problem.trim();

  if (trimmedName.length < 2) {
    throw new Error(messages.invalidName);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error(messages.invalidEmail);
  }

  if (!isValidPhone(input.phone)) {
    throw new Error(messages.invalidPhone);
  }

  if (trimmedCompany.length < 2) {
    throw new Error(messages.invalidCompany);
  }

  if (trimmedSponsorship.length < 3) {
    throw new Error(messages.invalidSponsorship);
  }

  if (trimmedProblem.length < 3) {
    throw new Error(messages.invalidProblem);
  }

  if (!isValidWorkshop(input.workshop)) {
    throw new Error(messages.invalidWorkshop);
  }

  const db = getDb();
  const docRef = doc(db, "sponsors", emailToDocId(normalizedEmail));

  try {
    const existing = await getDoc(docRef);
    if (existing.exists()) {
      return { alreadyRegistered: true };
    }

    await setDoc(docRef, {
      name: trimmedName,
      email: normalizedEmail,
      phone: normalizedPhone,
      company: trimmedCompany,
      sponsorship: trimmedSponsorship,
      problem: trimmedProblem,
      wantsWorkshop: input.workshop === "yes",
      createdAt: serverTimestamp(),
    });

    return { alreadyRegistered: false };
  } catch (error) {
    console.error("Firestore sponsor write failed:", error);
    throw new Error(firestoreErrorMessage(error, messages));
  }
}
