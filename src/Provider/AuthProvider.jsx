import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "./Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true)

  const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const signInWithGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
}

const signInWithGitHub = () => {
  setLoading(true);
  return signInWithPopup(auth, githubProvider);
}


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    updateUserProfile,
    signInWithGoogle,
    signInWithGitHub 
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// PropTypes definition for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node
};

export default AuthProvider;
