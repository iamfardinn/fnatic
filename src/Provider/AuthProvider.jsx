import { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile } from "firebase/auth";
import { auth as firebaseAuth } from '../config/firebaseConfig'; // Rename auth here to avoid conflicts

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(firebaseAuth, googleProvider); // Use firebaseAuth here
    }
   
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(firebaseAuth, githubProvider); // Use firebaseAuth here
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(firebaseAuth, email, password); // Use firebaseAuth here
    }

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(firebaseAuth, email, password); // Use firebaseAuth here
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
        googleLogin,
        createUser,
        signin,
        logOut,
        user,
        loading,
        githubLogin,
        handleUpdateProfile
    }
    
    return (
        <AuthContext.Provider value={auth1}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
