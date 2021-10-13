import { initializeFirebase, FirebaseCollection } from "./utils/firebase-utils";

initializeFirebase({
  apiKey: "AIzaSyCDNmOx78Kjz04R8NpsFtqn6Cyo9t-vscU",
  authDomain: "mozspa-firebase-example.firebaseapp.com",
  projectId: "mozspa-firebase-example",
  storageBucket: "mozspa-firebase-example.appspot.com",
  messagingSenderId: "680209068735",
  appId: "1:680209068735:web:5acbc0cdd4976f8a1ecc0a",
  measurementId: "G-PKSP4HMB7G",
});

export interface Cat {
  name: string;
  color: string;
}

// Add your stores here
export const CatStore = new FirebaseCollection<Cat>("cats");
