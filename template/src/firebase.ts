import { initializeFirebase, FirebaseCollection } from "./utils/firebase-utils";
import { Cat, CATS_COLLECTION_NAME } from "../core/StoreTypes";

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
export type { Cat };
export const CatStore = new FirebaseCollection<Cat>(CATS_COLLECTION_NAME);
