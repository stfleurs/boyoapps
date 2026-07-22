import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVnXeDJfN_6XY4jhm0_YYb5It_MfTrq-A",
  authDomain: "boyoapp.firebaseapp.com",
  projectId: "boyoapp",
  storageBucket: "boyoapp.firebasestorage.app",
  messagingSenderId: "1067927935915",
  appId: "1:1067927935915:web:4f96788ea3552c76b3d0ee",
  measurementId: "G-7XRC8V4NQ0",
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }
  return app;
}

export async function getAnalyticsInstance(): Promise<Analytics | undefined> {
  if (typeof window === "undefined") return undefined;
  if (analytics) return analytics;
  const supported = await isSupported();
  if (supported) {
    analytics = getAnalytics(getFirebaseApp());
  }
  return analytics;
}
