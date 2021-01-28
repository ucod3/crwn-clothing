import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBcc5HPQF52aZU09pj-1Seh44YBUO8a87s',
	authDomain: 'crwn-db-ee9ef.firebaseapp.com',
	projectId: 'crwn-db-ee9ef',
	storageBucket: 'crwn-db-ee9ef.appspot.com',
	messagingSenderId: '481827153599',
	appId: '1:481827153599:web:fb673827e6a40b5a7c480a',
	measurementId: 'G-PJVC1G6BC2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
