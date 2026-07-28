import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if we have the minimal config needed to initialize Firebase
const hasFirebaseConfig = !!firebaseConfig.apiKey;

// Never run Firebase on the server — only initialize client-side
let app = null;
if (typeof window !== 'undefined' && hasFirebaseConfig) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export default app;
