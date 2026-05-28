import { doc, getDoc } from "firebase/firestore";
import { firebaseClient } from "../firebase/client";

export type UserRole = "admin" | "client";

export async function getUserRole(uid: string): Promise<UserRole | null> {
  const { db } = firebaseClient();
  const snap = await getDoc(doc(db, "users", uid));
  if (!snap.exists()) return null;
  const data = snap.data() as { role?: unknown };
  return data.role === "admin" || data.role === "client" ? data.role : null;
}

