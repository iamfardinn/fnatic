import { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,updateProfile } from "firebase/auth";
import { auth as firebaseAuth } from '../config/firebaseConfig'; 

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(firebaseAuth, googleProvider); 
    }
   
   

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(firebaseAuth, email, password); 
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(firebaseAuth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }
    const logOut = () => {
        return signOut(firebaseAuth);
    }
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    const auth1 = {
        googleLogin,createUser,signin,logOut, user, loading, handleUpdateProfile
    }
    
    return (
        <AuthContext.Provider value={auth1}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
