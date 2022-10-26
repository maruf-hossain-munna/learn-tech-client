import React, { createContext } from 'react';
import {getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth' 
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('');
    // const showTheme =() =>{
    //     setTheme(theme)
    // }

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        return signOut(auth);
    }


    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })

        return () =>{
            unSubscribe();
        }
    } ,[])

    const authInfo = {user, providerLogin, logOut, createUser, signIn, setTheme}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;