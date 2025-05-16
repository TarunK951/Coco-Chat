// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
apiKey: "AIzaSyCx_qsQW9dIp2NAEEg-b3NUNik7S8CSSi4",
  authDomain: "coco-chat-a6268.firebaseapp.com",
  projectId: "coco-chat-a6268",
  storageBucket: "coco-chat-a6268.firebasestorage.app",
  messagingSenderId: "1055965214828",
  appId: "1:1055965214828:web:85934b61efc8e7fca88049",
  measurementId: "G-F3GH5KXJGW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
