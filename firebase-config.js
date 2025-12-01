// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ENrm8fqGiPYpgAkY0_gnaf5qOUt_nNw",
  authDomain: "lnd-reise.firebaseapp.com",
  projectId: "lnd-reise",
  storageBucket: "lnd-reise.firebasestorage.app",
  messagingSenderId: "606105270988",
  appId: "1:606105270988:web:18d1ab955b5dfd2c2b6069",
  measurementId: "G-D2MR1D4WV1"
};

// Инициализация Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, query, where, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Экспорт для использования в других файлах
window.db = db;
window.auth = auth;
window.firebaseModules = { 
  collection, addDoc, getDocs, query, where, doc, setDoc, getDoc, updateDoc, deleteDoc,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut 
};

console.log('✅ Firebase инициализирован успешно!');
