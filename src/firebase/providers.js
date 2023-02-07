import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (e) {
    const errorMessage = e.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log({ email, password, displayName });

    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    //*Actualizar la data en Firebase

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      errorMessage: e.message,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (e) {
    console.log(e.message);
    return {
      ok: false,
      errorMessage: e.message,
    };
  }
};
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
