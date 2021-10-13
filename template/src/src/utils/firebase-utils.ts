/* eslint-disable react-hooks/rules-of-hooks */

import { getApp, initializeApp, FirebaseApp } from "firebase/app";
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
} from "firebase/firestore";

import "firebase/firestore";
import "firebase/auth";
import { useState, useEffect } from "react";

export let app: FirebaseApp;
export let db: Firestore;

/**
 * Initializes Firestore. Has to be called first before anything else can be used.
 */
export function initializeFirebase(
  config: Parameters<typeof initializeApp>[0]
) {
  app = initializeApp(config);
  db = getFirestore();
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

  useQuery() {
    const [data, setData] = useState<Array<T & { id: string }>>([]);
    useEffect(() => {
      const q = query(this.collection());
      return onSnapshot(q, (snapshot) => {
        const newData: Array<T & { id: string }> = [];
        snapshot.forEach((doc) => {
          newData.push({ id: doc.id, ...(doc.data() as T) });
        });
        setData(newData);
      });
    }, []);
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
