import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
export const initializeFirebaseFramework = () => {
    firebase.initializeApp(firebaseConfig);
}
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {

            const { displayName, email, photoURl } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURl,
                error: '',
                success: true
            }
            return signedInUser;
        }).catch(err => {
            let errorMessage = err.message;
            const signedInUser = {};
            signedInUser.error = errorMessage;
            signedInUser.success = false;
            return signedInUser;
        })
}
