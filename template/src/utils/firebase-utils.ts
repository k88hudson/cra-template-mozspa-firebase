/* eslint-disable react-hooks/rules-of-hooks */

import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  Firestore,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  QueryConstraint,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut as firebaseSignOut,
  Auth,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useState, useEffect } from "react";

export let app: FirebaseApp;
export let db: Firestore;
export let auth: Auth;
export let googleProvider: GoogleAuthProvider;

/**
 * Initializes Firestore. Has to be called first before anything else can be used.
 */
export function initializeFirebase(
  config: Parameters<typeof initializeApp>[0]
) {
  app = initializeApp(config);
  db = getFirestore();
  auth = getAuth();
  googleProvider = new GoogleAuthProvider();
}

/**
 * Sign in to the app
 */
export function signIn() {
  return signInWithPopup(auth, googleProvider).catch((error) => {
    console.log(error);
  });
}

export function signOut() {
  return firebaseSignOut(auth);
}

export function useAuth() {
  const [uid, setUser] = useState<User | null>(null);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
  }, []);
  return uid;
}

/**
 * Utilities for querying and modifying a FB collection
 */
export class FirebaseCollection<T> {
  tableId: string;
  db: typeof db;

  constructor(tableId: string) {
    this.tableId = tableId;
    this.db = db;
  }

  collection() {
    return collection(this.db, this.tableId);
  }

  useQuery(
    invalidate: any[],
    {
      skipIf,
      query: queryParams = [],
    }: { skipIf?: boolean; query?: QueryConstraint[] }
  ) {
    const [data, setData] = useState<Array<T & { id: string }>>([]);
    useEffect(() => {
      // If the key param becomes undefined, clear the data.
      if (skipIf) {
        setData([]);
        return;
      }
      const q = query(this.collection(), ...queryParams);
      return onSnapshot(q, (snapshot) => {
        const newData: Array<T & { id: string }> = [];
        snapshot.forEach((doc) => {
          newData.push({ id: doc.id, ...(doc.data() as T) });
        });
        setData(newData);
      });

      // Note: we're relying on a manually set key to invalidate the cache.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, invalidate);
    return { data };
  }

  add(data: T) {
    addDoc(this.collection(), data);
  }

  update(id: string, data: T) {
    setDoc(doc(this.db, this.tableId, id), data, { merge: true });
  }

  delete(id: string) {
    deleteDoc(doc(this.db, this.tableId, id));
  }
}
