import { initializeFirebase, FirebaseCollection } from "./utils/firebase-utils";

initializeFirebase({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

// Add your stores here
export const CATS_COLLECTION_NAME = "cats";
export interface Cat {
  name: string;
  color: string;
  uid: string;
}
export const CatStore = new FirebaseCollection<Cat>(CATS_COLLECTION_NAME);
