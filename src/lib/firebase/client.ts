import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

function getFirebaseConfig() {
  const cfg = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  const missing = Object.entries(cfg)
    .filter(([, v]) => !v)
    .map(([k]) => k);

  return { cfg, missing };
}

export function getFirebaseApp(): FirebaseApp {
  if (getApps().length) return getApps()[0]!;

  const { cfg } = getFirebaseConfig();
  return initializeApp(cfg);
}

export function firebaseClient() {
  const { missing } = getFirebaseConfig();
  if (missing.length) {
    throw new Error(
      `Firebase config missing: ${missing.join(
        ", "
      )}. Create .env.local from .env.local.example.`
    );
  }

  const app = getFirebaseApp();
  return {
    app,
    auth: getAuth(app),
    db: getFirestore(app),
    storage: getStorage(app)
  };
}

