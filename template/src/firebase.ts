import { initializeFirebase, FirebaseCollection } from "./utils/firebase-utils";
import { Cat } from "../core/types";

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
export const CatStore = new FirebaseCollection<Cat>("cats");
