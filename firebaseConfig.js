//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyD-IRvdd-BlMn6uT27XIB_UzV2-lu5tJ38",
    authDomain: "trafficlightapp-564b4.firebaseapp.com",
    projectId: "trafficlightapp-564b4",
    storageBucket: "trafficlightapp-564b4.appspot.com",
    messagingSenderId: "151680092960",
    appId: "1:151680092960:web:5c6557d87fe73fb505e545"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()